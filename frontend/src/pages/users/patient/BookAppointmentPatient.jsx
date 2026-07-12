import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { PatientNav } from '../../../components/navbar/PatientNav';

function BookAppointmentPatient() {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [reason, setReason] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [slots, setSlots] = useState([]);
  const [res, setres] = useState("");


  useEffect(() => {
    axios.get("http://localhost:5000/api/doctors/departments").then(res => setDepartments(res.data));
  }, []);


  const handleDateChange = async (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    const res = await axios.get(
      `http://localhost:5000/api/appointments/doctors/${date}`
    );
    setDoctors(res.data);
  };


  const handleDoctorChange = async (e) => {
    const doctorId = e.target.value;
    setSelectedDoctor(doctorId);
    const res = await axios.get(
      `http://localhost:5000/api/doctors/${doctorId}`
    );

    setSelectedDepartment(res.data.department);
    const slotRes = await axios.get(
      `http://localhost:5000/api/appointments/slots/${doctorId}/${selectedDate}`
    );

    setSlots(slotRes.data);
  };


  const handleBookAppointment = async () => {
    try {
      
      await axios.post(
        "http://localhost:5000/api/appointments",
        {
          doctor: selectedDoctor,
          appointmentDate: selectedDate,
          slot: selectedSlot,
          reason
        }
      );
      setRes("Appointment booked successfully");

    }
    catch (err) {

      setRes(err.response?.data?.message || "Booking failed");
    }
  };


  return (
    <>
      <div className='header'><PatientNav /></div>

      <div className='body'>

        <h2>Book Appointment</h2>

        <div className='app2'>
          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>
                Fill The details Accurately
              </Card.Title>
              <Card.Text>
                <input
                  type="date"
                  className="form-control"
                  value={selectedDate}
                  onChange={handleDateChange}
                />

                <br />

                <select
                  className="form-select"
                  value={selectedDoctor}
                  onChange={handleDoctorChange}
                >
                  <option value="">
                    Select Doctor
                  </option>
                  {
                    doctors.map(doc => (
                      <option
                        key={doc._id}
                        value={doc._id}
                      >
                        {doc.name}
                      </option>
                    ))
                  }
                </select>

                <br />

                <select
                  className="form-select"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="">
                    Select Department
                  </option>

                  {
                    departments.map((dept, index) => (
                      <option key={index} value={dept}>
                        {dept}
                      </option>
                    ))
                  }

                </select>

                {
                  departments.map((dept, index) => (

                    <option key={index}>
                      {dept}
                    </option>

                  ))
                }

                <br />

                <select
                  className="form-select"
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                >
                  <option value="">Select Slot</option>

                  {
                    slots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))
                  }

                </select>

                <br />

                <input
                  className="form-control"
                  placeholder="Reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </Card.Text>

              <Card.Link href="#">
                View prescription
              </Card.Link>

              <Card.Link href="#">
                View all prescription
              </Card.Link>

            </Card.Body>
          </Card>
        </div>
        <button
          className="btn btn-primary w-25 mt-3"
          onClick={handleBookAppointment}
        >
          Book Appointment
        </button>
        <h3>{res}</h3>
      </div >


      <div className='footer'>

        <div>
          © Astracare
        </div>

        <div>
          <h2>About</h2>
          <p>this is about Astracare</p>
        </div>

        <div>
          <h2>Contact</h2>
          <p>this is contact details</p>
        </div>

      </div>


    </>
  )

}
export default BookAppointmentPatient;