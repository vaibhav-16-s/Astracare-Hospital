import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AdminNav } from '../../../../components/navbar/AdminNav'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ManageDoctors() {
    const navigate = useNavigate();
    const [docData, setDocData] = useState([]);
    const [search, setSearch] = useState("");
    const [docLimit, setDocLimit] = useState(10);
    const [expandedDoc, setExpandedDoc] = useState(null);

    useEffect(() => {
        fetchDocDetails();
    }, []);

    const fetchDocDetails = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admin/showalldoc');
            setDocData(response.data);

        }
        catch (error) {
            console.log(error);
        }
    }
    const filteredDoctors = docData.filter((doc) => {
        return (
            doc.name.toLowerCase().includes(search.toLowerCase()) ||
            doc.department.toLowerCase().includes(search.toLowerCase())
        );
    });
    return (
        <>
            <div className='header'> <AdminNav /></div>
            <div className='body'><h2>Doctor Management</h2>
                <div className='hBody'>
                    <p>
                        These are the doctor currently working in your.
                        Here you can view their details, update their info, manage schedules,
                        remove when necessary
                    </p>

                    <div>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search By Dept/" className=" mr-sm-2" />
                    </div>
                    <div><Button onClick={() => navigate("/admin/docregister")} variant="warning" size="sm">Register Doctor</Button></div>
                    <br />
                    <div>


                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Contact</th>
                                    <th>DOB</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredDoctors.slice(0, docLimit).map((doc, index) => (
                                        <React.Fragment key={doc._id}>
                                            <tr style={{ cursor: "pointer" }} onClick={() =>
                                                setExpandedDoc(expandedDoc === doc._id ? null : doc._id)
                                            }>
                                            
                                                <td>{index + 1}</td>
                                                <td>{doc.name}</td>
                                                <td>{doc.department}</td>
                                                <td>{doc.email}</td>
                                                <td>{doc.gender}</td>
                                                <td>{doc.contact}</td>
                                                <td>
                                                    {new Date(doc.dateOfBirth).toLocaleDateString("en-IN")}
                                                </td>
                                                <td>{doc.status}</td>

                                                <td>
                                                    <Button
                                                        as={Link}
                                                        to={`/admin/editdoc/${doc._id}`}
                                                        variant="warning"
                                                        size="sm"
                                                        onClick={(e) => e.stopPropagation()}>
                                                        Edit
                                                    </Button>

                                                    <Button
                                                        as={Link}
                                                        to={`/admin/deletedoc/${doc._id}`}
                                                        variant="danger"
                                                        size="sm"
                                                        className="ms-2"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>

                                            {
                                                expandedDoc === doc._id && (
                                                    <tr>
                                                        <td colSpan="9">
                                                            <div className="p-3 bg-light border rounded">
                                                                <h5>Doctor Details</h5>
                                                                <p><b>ID:</b> {doc._id}</p>
                                                                <p><b>Address:</b> {doc.address}</p>
                                                                <p><b>Qualification:</b> {doc.qualification}</p>
                                                                <p>
                                                                    <b>Created At:</b>{" "}
                                                                    {new Date(doc.createdAt).toLocaleString("en-IN")}
                                                                </p>
                                                                <p>
                                                                    <b>Updated At:</b>{" "}
                                                                    {new Date(doc.updatedAt).toLocaleString("en-IN")}
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
                        {docLimit < filteredDoctors.length && (
                            <Button
                                variant="secondary"
                                onClick={() => setDocLimit(prev => prev + 10)}
                                className="me-2"
                            >
                                View More
                            </Button>
                        )}
                        {docLimit > 10 && (
                            <Button
                                variant="outline-secondary"
                                onClick={() => setDocLimit(10)}
                            >
                                View Less
                            </Button>
                        )}
                    </div>

                </div >
            </div >

            <div className='footer'>
                <div>© Astracare</div>
                <div><h2>About</h2>
                    <p>this is about Astracare
                    </p></div>
                <div><h2>Contact</h2>
                    <p>this is contact details
                    </p>
                </div>
            </div>
        </>
    )
}

export default ManageDoctors