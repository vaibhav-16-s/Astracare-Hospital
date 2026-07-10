import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AdminNav } from "../../../../components/navbar/AdminNav";


function EditStaff() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [dept, setDept] = useState("");
    const [status, setStatus] = useState("");
    const [role, setRole] = useState("");
    const [res, setRes] = useState("");


    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/admin/getstaffdetails/${id}`);
            const staff = response.data.data;

            setName(staff.name);
            setEmail(staff.email);
            setContact(staff.contact);
            setAddress(staff.address);
            setGender(staff.gender);
            setDateOfBirth(staff.dateOfBirth.split("T")[0]);
            setDept(staff.dept);
            setStatus(staff.status);
            setRole(staff.role);
        }
        catch (error) {
            console.log(error);
        }
    };

    const StaffUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/admin/updatestaff/${id}`,
                {name,email,contact,address,gender,dateOfBirth,dept,status,role}
            );
            setRes(response.data.message);
            
            setTimeout(() => {
                navigate("/admin/managestaff");
            }, 1500);
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="header"><AdminNav /></div>
            <div className="body">
                <h2>Edit Staff</h2>
                <p>Name:<input value={name} onChange={(e) => setName(e.target.value)} /></p>
                <p>Email:<input value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                <p>Contact:<input value={contact} onChange={(e) => setContact(e.target.value)} /></p>
                <p>Address: <input value={address} onChange={(e) => setAddress(e.target.value)} /></p>
                <p>  Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </p>
                <p> DOB:<input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} /></p>
                <p>  Department:<input value={dept} onChange={(e) => setDept(e.target.value)} /></p>
                <p>  Status:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>On Leave</option>
                    </select>
                </p>
                <p>Role:
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option>Receptionist</option>
                        <option>Nurse</option>
                        <option>Lab Technician</option>
                    </select>
                </p>
                <button onClick={StaffUpdate}>
                    Update
                </button>
                <h4>{res}</h4>
            </div>
        </>
    )
}
export default EditStaff;