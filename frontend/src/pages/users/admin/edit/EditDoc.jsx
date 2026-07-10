import { useEffect } from "react";
import { AdminNav } from "../../../../components/navbar/AdminNav";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function EditDoc() {

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

    const { id } = useParams();

    useEffect(() => {
        getDocDetails();
    }, [])

    const getDocDetails = async () => {
        const response = await axios.get(`http://localhost:5000/admin/getdocdetails/${id}`);
        let result = response.data.docData;
        setName(result.name);
        setEmail(result.email);
        setContact(result.contact);
        setAddr(result.address);
        setGender(result.gender);
        setStatus(result.status);
        setQual(result.qualification);
        setDept(result.department);
        setDOB(result.dateOfBirth ? result.dateOfBirth.split("T")[0] : "");
    }

    const DocUpdate = async (req, res) => {
        try {
            const response = await axios.put(`http://localhost:5000/admin/updatedoc/${id}`,
                { name, email, contact, addr, gender, status, dept, qual,dob});
            let result = await response.data;
            if (result) {
                setRes(result.message);
                 setTimeout(() => navigate("/admin/managedoctors", { replace: true }), 2000);
            }
        }
        catch (error) {
            console.log(error);
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

                <p><button onClick={DocUpdate}>Update</button></p>
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

export default EditDoc