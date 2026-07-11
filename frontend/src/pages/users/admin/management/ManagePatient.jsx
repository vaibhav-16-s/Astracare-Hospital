import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AdminNav } from "../../../../components/navbar/AdminNav";
import { Table, Button } from "react-bootstrap";

function ManagePatients() {
    const navigate = useNavigate();

    const [patientData, setPatientData] = useState([]);
    const [search, setSearch] = useState("");
    const [patientLimit, setPatientLimit] = useState(10);
    const [expandedPatient, setExpandedPatient] = useState(null);

    useEffect(() => {
        fetchPatientDetails();
    }, []);

    const fetchPatientDetails = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/admin/showallpatients"
            );

            setPatientData(response.data);

        }
        catch (err) {
            console.log(err);
        }

    }

    const filteredPatients = patientData.filter((patient) => {

        return (

            patient.name.toLowerCase().includes(search.toLowerCase()) ||

            patient.email.toLowerCase().includes(search.toLowerCase()) ||

            patient.contact.includes(search)

        );

    });
    return (
        <>
            <div className="header">
                <AdminNav />
            </div>

            <div className="body">
                <h2>Patient Management</h2>

                <div className="hBody">

                    <p>
                        These are the patients currently registered in your hospital.
                        Here you can view their details, update their information,
                        manage patient records, or remove them when necessary.
                    </p>

                    <div>
                        <input
                            type="text"
                            placeholder="Search by Name / Email / Contact"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                    <br />

                    <div>
                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th>Date of Birth</th>
                                    <th>Blood Group</th>
                                    <th>Edit</th>

                                </tr>
                            </thead>

                            <tbody>

                                {

                                    filteredPatients
                                        .slice(0, patientLimit)
                                        .map((patient, index) => (

                                            <React.Fragment key={patient._id}>

                                                <tr
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => setExpandedPatient(
                                                        expandedPatient === patient._id
                                                            ? null
                                                            : patient._id
                                                    )}
                                                >

                                                    <td>{index + 1}</td>

                                                    <td>{patient.name}</td>

                                                    <td>{patient.email}</td>

                                                    <td>{patient.gender}</td>

                                                    <td>{patient.contact}</td>

                                                    <td>{patient.address}</td>

                                                    <td>
                                                        {new Date(patient.dateOfBirth).toLocaleDateString("en-IN")}
                                                    </td>

                                                    <td>{patient.bloodGroup}</td>

                                                    <td>

                                                        <Button
                                                            as={Link}
                                                            to={`/admin/editpatient/${patient._id}`}
                                                            variant="warning"
                                                            size="sm"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >

                                                            Edit

                                                        </Button>


                                                    </td>

                                                </tr>

                                                {
                                                    expandedPatient === patient._id && (

                                                        <tr>

                                                            <td colSpan="9">

                                                                <div className="p-3 bg-light border rounded">

                                                                    <h5>Patient Details</h5>

                                                                    <p>
                                                                        <b>ID:</b> {patient._id}
                                                                    </p>

                                                                    <p>
                                                                        <b>Role:</b> {patient.role}
                                                                    </p>

                                                                    <p>
                                                                        <b>Created:</b>{" "}
                                                                        {new Date(patient.createdAt).toLocaleString("en-IN")}
                                                                    </p>

                                                                    <p>
                                                                        <b>Updated:</b>{" "}
                                                                        {new Date(patient.updatedAt).toLocaleString("en-IN")}
                                                                    </p>

                                                                </div>

                                                            </td>

                                                        </tr>

                                                    )

                                                }

                                            </React.Fragment>

                                        ))

                                }

                            </tbody>
                        </Table>
                    </div>

                    <div className="text-center mt-3">

                        {patientLimit < filteredPatients.length && (

                            <Button
                                variant="secondary"
                                onClick={() => setPatientLimit(prev => prev + 10)}
                            >

                                View More

                            </Button>

                        )}

                        {patientLimit > 10 && (

                            <Button
                                variant="outline-secondary"
                                className="ms-2"
                                onClick={() => setPatientLimit(10)}
                            >

                                View Less

                            </Button>

                        )}

                    </div>

                </div>
            </div>

            <div className="footer">
                <div>© Astracare</div>

                <div>
                    <h2>About</h2>
                    <p>This is about Astracare.</p>
                </div>

                <div>
                    <h2>Contact</h2>
                    <p>This is contact details.</p>
                </div>
            </div>
        </>
    );
}

export default ManagePatients;