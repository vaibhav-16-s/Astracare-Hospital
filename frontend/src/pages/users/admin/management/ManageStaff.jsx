import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { AdminNav } from '../../../../components/navbar/AdminNav';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ManageStaff() {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("receptionist");
    const [staffData, setStaffData] = useState([]);
    const [search, setSearch] = useState("");

    const [receptionLimit, setReceptionLimit] = useState(10);
    const [nurseLimit, setNurseLimit] = useState(10);
    const [labLimit, setLabLimit] = useState(10);

    const [expandedStaff, setExpandedStaff] = useState(null);

    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {

        try {
            const response = await axios.get(
                "http://localhost:5000/admin/showallstaff"
            );
            setStaffData(response.data);
        }
        catch (error) {
            console.log(error);
        }
    };

    const filterStaff = (role) => {
        return staffData.filter((staff) => {
            return (
                staff.role === role &&
                (
                    staff.name.toLowerCase().includes(search.toLowerCase()) || staff.email.toLowerCase().includes(search.toLowerCase())
                )
            );
        });
    }

    const receptionists = filterStaff("Receptionist");
    const nurses = filterStaff("Nurse");
    const labTechs = filterStaff("Lab Technician");


    const StaffTable = ({ data, limit, setLimit }) => (
        <>
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Contact</th>

                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.slice(0, limit).map((staff, index) => (
                            <React.Fragment key={staff._id}>
                                <tr
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setExpandedStaff(expandedStaff === staff._id ? null : staff._id)}>

                                    <td>{index + 1}</td>
                                    <td>{staff.name}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.gender}</td>
                                    <td>{staff.contact}</td>
                                    <td>{staff.status}</td>

                                    <td>
                                        <Button as={Link} to={`/admin/editstaff/${staff._id}`} variant="warning" size="sm" onClick={(e) => e.stopPropagation()}>
                                            Edit
                                        </Button>

                                        <Button as={Link} to={`/admin/deletestaff/${staff._id}`} variant="danger" size="sm" className="ms-2" onClick={(e) => e.stopPropagation()}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>

                                {
                                    expandedStaff === staff._id &&

                                    <tr>
                                        <td colSpan="8">
                                            <div className="p-3 bg-light border rounded">
                                                <h5>
                                                    Staff Details
                                                </h5>

                                                <p>
                                                    <b>ID:</b> {staff._id}
                                                </p>

                                                <p>
                                                    <b>Address:</b> {staff.address}
                                                </p>

                                                <p>
                                                    <b>Date Of Birth:</b>
                                                    {
                                                        new Date(
                                                            staff.dateOfBirth
                                                        ).toLocaleDateString("en-IN")
                                                    }
                                                </p>

                                                <p>
                                                    <b>Blood Group:</b>
                                                    {staff.bloodGroup || "N/A"}
                                                </p>

                                                <p>
                                                    <b>Created At:</b>
                                                    {
                                                        new Date(
                                                            staff.createdAt
                                                        ).toLocaleString("en-IN")
                                                    }
                                                </p>
                                                <p>
                                                    <b>Updated At:</b>
                                                    {
                                                        new Date(
                                                            staff.updatedAt
                                                        ).toLocaleString("en-IN")
                                                    }
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                }
                            </React.Fragment>
                        ))
                    }
                </tbody>
            </Table>

            <div className="text-center mt-3">
                {
                    limit < data.length &&

                    <Button variant="secondary" className="me-2" onClick={() => setLimit(prev => prev + 10)}>
                        View More
                    </Button>
                }

                {
                    limit > 10 && <Button variant="outline-secondary" onClick={() => setLimit(10)}>
                        View Less
                    </Button>
                }
            </div>
        </>
    );
    return (

        <>

            <div className='header'> <AdminNav /></div>

            <div className='body'>

                <h2>Staff Management</h2>

                <div className='hBody'>
                    <p>
                        View and manage all hospital staff,
                        including receptionists, nurses,
                        and laboratory technicians.
                    </p>

                    <input type="text" placeholder="Search By Name / Department" onChange={(e) => setSearch(e.target.value)} />

                    <br /><br />

                    <Button onClick={() => navigate("/admin/staffregister")} variant="warning" size="sm">
                        Register Staff
                    </Button>

                    <br /><br />

                    <Tabs id="staff-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">

                        <Tab eventKey="receptionist" title="Receptionists">
                            <StaffTable data={receptionists} limit={receptionLimit} setLimit={setReceptionLimit} />
                        </Tab>

                        <Tab eventKey="nurse" title="Nurses">
                            <StaffTable
                                data={nurses}
                                limit={nurseLimit}
                                setLimit={setNurseLimit}
                            />
                        </Tab>

                        <Tab eventKey="lab" title="Lab Technicians">
                            <StaffTable data={labTechs} limit={labLimit} setLimit={setLabLimit} />
                        </Tab>
                    </Tabs>
                </div>
            </div>

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
export default ManageStaff;