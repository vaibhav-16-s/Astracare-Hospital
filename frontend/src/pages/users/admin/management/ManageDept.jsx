import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AdminNav } from "../../../../components/navbar/AdminNav";
import { Link, useNavigate } from "react-router-dom";

function ManageDept() {
    const navigate = useNavigate();
    const [deptData, setDeptData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/admin/showalldept"
            );
            setDeptData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const filterDept = deptData.filter((dept) => {
        return (
            dept.name.toLowerCase().includes(search.toLowerCase())
        )
    });

    return (
        <>
            <div className="header">
                <AdminNav />
            </div>

            <div className="body">
                <h2>Department Management</h2>

                <div className="hBody">
                    <p>
                        These are the departments currently available in your
                        hospital. Here you can view department details, add new
                        departments, update existing information, or remove
                        departments when necessary.
                    </p>

                    <div>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search By Dept/" className=" mr-sm-2" />
                    </div>

                    <div className="mt-2">
                        <Button
                            onClick={() => navigate("/admin/deptregister")}
                            variant="warning"
                            size="sm"
                        >
                            Register Department
                        </Button>
                    </div>

                    <br />

                    <div>
                        {filterDept.map((dept) => (
                            <Card key={dept._id} className="mb-3">
                                <Card.Body>
                                    <Card.Title>{dept.name.toUpperCase()}</Card.Title>

                                    <Card.Text>
                                        <b>Description:</b> {dept.description}
                                    </Card.Text>

                                    <Card.Text>
                                        <b>Head Employee:</b>{" "}
                                        {dept.headEmployee?.name || "Not Assigned"}
                                    </Card.Text>

                                    <Card.Text>
                                        <b>Employee Type:</b>{" "}
                                        {dept.headEmployee ? dept.headEmployeeModel : "N/A"}
                                    </Card.Text>

                                    <Card.Text>
                                        <b>Total Doctors:</b>{" "}
                                        {dept.totalDoctors}
                                    </Card.Text>

                                    <Card.Text>
                                        <b>Total Staff:</b>{" "}
                                        {dept.totalStaff}
                                    </Card.Text>

                                    <Card.Text>
                                        <b>Location:</b>{" "}
                                        {dept.location || "Not Available"}
                                    </Card.Text>

                                    <Card.Text>
                                        <b>Status:</b> {dept.status}
                                    </Card.Text>

                                    <Card.Text>
                                        <b>Created At:</b>{" "}
                                        {dept.createdAt
                                            ? new Date(dept.createdAt).toLocaleString("en-IN")
                                            : "Not Available"}
                                    </Card.Text>

                                    <Card.Text>
                                        <b>Updated At:</b>{" "}
                                        {dept.updatedAt
                                            ? new Date(dept.updatedAt).toLocaleString("en-IN")
                                            : "Not Available"}
                                    </Card.Text>

                                    <Button
                                        as={Link}
                                        to={`/admin/editdept/${dept._id}`}
                                        variant="warning"
                                        size="sm"
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        as={Link}
                                        to={`/admin/deletedept/${dept._id}`}
                                        variant="danger"
                                        size="sm"
                                        className="ms-2"
                                    >
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer">
                <div>© Astracare</div>

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
    );
}

export default ManageDept;