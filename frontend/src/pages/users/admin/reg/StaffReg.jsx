import axios from 'axios';

import { useState } from 'react';
import { AdminNav } from '../../../../components/navbar/AdminNav';

function StaffReg() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [addr, setAddr] = useState("");
    const [gender, setGender] = useState("");
    const [dept, setDept] = useState("");
    const [status, setStatus] = useState("");
    const [role, setRole] = useState("");
    const [dob, setDOB] = useState("");
    const [res, setRes] = useState("");
    const [pass, setPass] = useState("");
    const [cPass, setCpass] = useState("");

    const StaffRegister = async () => {
        try {

            const response = await axios.post(
                "http://localhost:5000/admin/staffregister",
                {
                    name,
                    email,
                    contact,
                    addr,
                    gender,
                    dept,
                    status,
                    role,
                    dob,
                    pass
                }
            );

            const result = response.data;

            console.log("staff reg response :- ", result);

            setRes(result.message);

            if (result.success) {

                setName("");
                setContact("");
                setAddr("");
                setEmail("");
                setDept("");
                setGender("");
                setRole("");
                setDOB("");
                setPass("");
                setCpass("");
                setStatus("");

            }

        }
        catch (error) {

            console.log(error);

            setRes(
                error.response?.data?.message ||
                "Staff Registration Failed"
            );

        }
    }
    return (
        <>
            <div className='header'> <AdminNav /></div>
            <div className='body'><h2>Staff Registration</h2>
                <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
                <p>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                <p>Gender: 
                    <select value={gender} onChange={(e) => setGender(e.target.value)}> 

                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>

                    </select>
                </p>
                <p>DOB: <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} /></p>
                <p>Contact: <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} /></p>
                <p>Address: <input type="text" value={addr} onChange={(e) => setAddr(e.target.value)} /></p>
                <p>Department: <input type="text" value={dept} onChange={(e) => setDept(e.target.value)} /></p>
                <p> Role: 
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    > 

                        <option value="">Select Role</option>
                        <option value="Receptionist">
                            Receptionist
                        </option>

                        <option value="Nurse">
                            Nurse
                        </option>

                        <option value="Lab Technician">
                            Lab Technician
                        </option>

                    </select>
                </p>
                <p>Status:  
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >

                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="On Leave">On Leave</option>

                    </select>
                </p>
                <p>Password: <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} /></p>
                <p>Confirm: <input type="text" value={cPass} onChange={(e) => setCpass(e.target.value)} /></p>
                <p><button onClick={StaffRegister}>Register</button></p>
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
export default StaffReg