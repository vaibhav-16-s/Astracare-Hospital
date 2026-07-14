import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { AdminNav } from "../../../../components/navbar/AdminNav";

function ManageShifts() {

    const [shifts, setShifts] = useState([]);
    const [shiftLimit, setShiftLimit] = useState(10);
    const [activeRole, setActiveRole] = useState("Doctor");
    const navigate = useNavigate();
    const [expandedShift, setExpandedShift] = useState(null);

    const filteredShifts = shifts.filter(
        (shift) => shift.empRole === activeRole
    );

    useEffect(() => {
        fetchShifts();
    }, []);

    const fetchShifts = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/admin/allshifts"
            );

            setShifts(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    return (
        <>
            <div className="header">
                <AdminNav />
            </div>

            <div className="body">

                <h2>Shift Chart</h2>

                <div className="hBody">

                    <p>
                        Manage staff shift schedules from one place.
                        View assigned shifts, update timings, create new schedules,
                        and ensure smooth hospital operations.
                    </p>

                    <div className="d-flex justify-content-between mb-4">

                        <input
                            type="text"
                            placeholder="Search Employee"
                            className="form-control w-50"
                        />

                        <Button
                            variant="warning"
                            onClick={() => navigate("/admin/shiftreg")}
                        >
                            Assign Shift
                        </Button>

                    </div>
                    <Tabs
                        defaultActiveKey="Doctor"
                        id="shift-tabs"
                        className="mb-3"
                        fill
                        onSelect={(role) => setActiveRole(role)}
                    >

                        <Tab
                            eventKey="Doctor"
                            title="Doctors"
                        >
                        </Tab>


                        <Tab
                            eventKey="Nurse"
                            title="Nurses"
                        >
                        </Tab>


                        <Tab
                            eventKey="Receptionist"
                            title="Receptionists"
                        >
                        </Tab>


                        <Tab
                            eventKey="Lab Technician"
                            title="Lab Technicians"
                        >
                        </Tab>


                    </Tabs>
                    <Table bordered hover responsive>

                        <thead>

                            <tr>
                                <th>Employee</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Week Start</th>

                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {
                                filteredShifts.length > 0 ? (

                                    filteredShifts.slice(0, shiftLimit).map((shift) => (

                                        <React.Fragment key={shift._id}>

                                            <tr
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    setExpandedShift(
                                                        expandedShift === shift._id
                                                            ? null
                                                            : shift._id
                                                    )
                                                }
                                            >

                                                <td>
                                                    {shift.empId?.name}
                                                </td>

                                                <td>
                                                    {shift.empRole}
                                                </td>

                                                <td>
                                                    {
                                                        shift.empId?.department ||
                                                        shift.empId?.dept ||
                                                        "-"
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        shift.weekStart
                                                            ? new Date(shift.weekStart)
                                                                .toLocaleDateString("en-IN")
                                                            : "-"
                                                    }
                                                </td>


                                                <td>

                                                    <Button
                                                        size="sm"
                                                        variant="warning"
                                                        onClick={(e) => {

                                                            e.stopPropagation();

                                                            navigate(
                                                                `/admin/updateshift/${shift._id}`
                                                            );

                                                        }}
                                                    >
                                                        Update
                                                    </Button>

                                                </td>


                                            </tr>


                                            {
                                                expandedShift === shift._id && (

                                                    <tr>

                                                        <td colSpan="5">

                                                            <Table bordered size="sm">

                                                                <thead>

                                                                    <tr>
                                                                        <th>Day</th>
                                                                        <th>Start</th>
                                                                        <th>End</th>
                                                                        <th>Status</th>
                                                                    </tr>

                                                                </thead>


                                                                <tbody>

                                                                    {
                                                                        shift.schedule?.map((day) => (

                                                                            <tr key={day.day}>

                                                                                <td>
                                                                                    {day.day}
                                                                                </td>

                                                                                <td>
                                                                                    {day.startTime || "-"}
                                                                                </td>

                                                                                <td>
                                                                                    {day.endTime || "-"}
                                                                                </td>

                                                                                <td>
                                                                                    {day.status}
                                                                                </td>

                                                                            </tr>

                                                                        ))
                                                                    }

                                                                </tbody>


                                                            </Table>

                                                        </td>

                                                    </tr>

                                                )
                                            }


                                        </React.Fragment>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="5"
                                            className="text-center"
                                        >
                                            No Shifts Found
                                        </td>

                                    </tr>

                                )
                            }

                        </tbody>

                    </Table>

                    {
                        shiftLimit < shifts.length && (

                            <div className="text-center mt-3">

                                <Button
                                    variant="secondary"
                                    onClick={() => setShiftLimit(prev => prev + 10)}
                                >
                                    View More
                                </Button>

                            </div>

                        )
                    }

                </div>

            </div>

            <div className="footer">

                <div>© AstraCare</div>

                <div>

                    <h2>About</h2>

                    <p>
                        This is about AstraCare
                    </p>

                </div>

                <div>

                    <h2>Contact</h2>

                    <p>
                        Contact details
                    </p>

                </div>

            </div>

        </>
    );
}

export default ManageShifts;