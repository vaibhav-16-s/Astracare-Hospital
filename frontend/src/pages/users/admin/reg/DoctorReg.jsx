import React, { useState } from 'react'

import axios from 'axios';
import { AdminNav } from '../../../../components/navbar/AdminNav';
function DoctorReg() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [addr, setAddr] = useState("");
    const [gender, setGender] = useState("");
    const [dept, setDept] = useState("");
    const [status, setStatus] = useState("");
    const [qual, setQual] = useState("");
    const [dob, setDOB] = useState("");
    const [res, setRes] = useState("");
    const [pass, setPass] = useState("");
    const [cPass, setCpass] = useState("");

    const DocRegister = async (req, res) => {
        const response = await axios.post('http://localhost:5000/admin/docregister', {
            name, email, contact, addr, gender, dept, status, qual, dob, pass,
        });
        const result = await response.data;
        console.log("doc reg response :- ", result);
        if (result) {
            setRes(result.message);
            setName("");
            setContact("");
            setAddr("");
            setEmail("");
            setDept("");
            setGender("");
            setQual("");
            setDOB("");
            setPass("");
            setCpass("");
            setStatus("");
        }
    }
    return (
        <>
            <div className='header'> <AdminNav /></div>
            <div className="body"><h2>Doctor Registration</h2>
                <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
                <p>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                <p>Gender: <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} /></p>
                <p>DOB: <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} /></p>
                <p>Contact: <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} /></p>
                <p>Address: <input type="text" value={addr} onChange={(e) => setAddr(e.target.value)} /></p>
                <p>Department: <input type="text" value={dept} onChange={(e) => setDept(e.target.value)} /></p>
                <p>Qualification: <input type="text" value={qual} onChange={(e) => setQual(e.target.value)} /></p>
                <p>Status: <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} /></p>
                <p>Password: <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} /></p>
                <p>Confirm: <input type="text" value={cPass} onChange={(e) => setCpass(e.target.value)} /></p>
                <p><button onClick={DocRegister}>Register</button></p>
                <h4>{res}</h4>
            </div>
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

export default DoctorReg