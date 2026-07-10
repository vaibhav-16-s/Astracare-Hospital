import Card from "react-bootstrap/Card";
import { AdminNav } from "../../../components/navbar/AdminNav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function AdminHome() {

    const [dashboard, setDashboard] = useState({
        totalDoctors: 0,
        totalStaff: 0,
        totalReceptionists: 0,
        totalNurses: 0,
        totalLabTechnicians: 0,
        totalPatients: 0,
        totalDepartments: 0
    });

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {

            const response = await axios.get(
                "http://localhost:5000/admin/admindashboard"
            );

            setDashboard(response.data);

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

                <div className="hBody">
                    <h2>Welcome Admin!</h2>
                </div>

                <div
                    className="mBody"
                    style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap"
                    }}
                >

                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>Total Doctors</Card.Title>

                            <h1>{dashboard.totalDoctors}</h1>

                            <Card.Link
                                as={Link}
                                to="/admin/managedoctors"
                            >
                                View Doctors
                            </Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "18rem" }}>
                        <Card.Body>

                            <Card.Title>Total Staff</Card.Title>

                            <h2>{dashboard.totalStaff}</h2>

                            <Card.Text>
                                Receptionists : {dashboard.totalReceptionists}
                                <br />
                                Nurses : {dashboard.totalNurses}
                                <br />
                                Lab Technicians : {dashboard.totalLabTechnicians}
                            </Card.Text>

                            <Card.Link
                                as={Link}
                                to="/admin/managestaff"
                            >
                                View Staff
                            </Card.Link>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: "18rem" }}>
                        <Card.Body>

                            <Card.Title>Total Patients</Card.Title>

                            <h1>{dashboard.totalPatients}</h1>

                            <Card.Link
                                as={Link}
                                to="/admin/managepatients"
                            >
                                View Patients
                            </Card.Link>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: "18rem" }}>
                        <Card.Body>

                            <Card.Title>Total Departments</Card.Title>

                            <h1>{dashboard.totalDepartments}</h1>

                            <Card.Link
                                as={Link}
                                to="/admin/managedept"
                            >
                                View Departments
                            </Card.Link>

                        </Card.Body>
                    </Card>

                </div>

            </div>

            <div className="footer">

                <div>© Astracare</div>

                <div>
                    <h2>About</h2>
                    <p>This is about Astracare</p>
                </div>

                <div>
                    <h2>Contact</h2>
                    <p>This is contact details</p>
                </div>

            </div>

        </>
    );
}