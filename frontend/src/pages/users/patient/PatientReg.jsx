import  { useState } from 'react'

import axios from 'axios';
import { PatientNav } from '../../../components/navbar/PatientNav';
function PatientReg() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [addr, setAddr] = useState("");
    const [gender, setGender] = useState("");
    const [diseaseHistory, setDiseaseHistory] = useState([]);
    const [diseaseName, setDiseaseName] = useState("");
    const [diagnosedOn, setDiagnosedOn] = useState("");
    const [recoveredOn, setRecoveredOn] = useState("");
    const [bGroup, setBgroup] = useState("");
    const [dob, setDOB] = useState("");
    const [res, setRes] = useState("");
    const [pass, setPass] = useState("");
    const [cPass, setCpass] = useState("");

    const PatientRegister = async (req, res) => {
        const response=await axios.post("http://localhost:5000/patient/register", 
            {name,email,contact,gender,address: addr,dateOfBirth: dob,bloodGroup: bGroup,diseaseHistory,password: pass});

        const result = await response.data;
        console.log("doc reg response :- ", result);
        if (result) {
            setRes(result.message);
            setName("");
            setContact("");
            setAddr("");
            setEmail("");
            setBgroup("")
            setGender("");
            setMedHis("")
            setDOB("");
            setPass("");
            setCpass("");
            setDiseaseHistory([]);

        }
    }
     const addDisease = () => {

        if (!diseaseName || !diagnosedOn) {
            alert("Disease Name and Diagnosed Date are required");
            return;
        }

        const disease = {diseaseName,diagnosedOn,recoveredOn};

        setDiseaseHistory([...diseaseHistory, disease]);

        setDiseaseName("");
        setDiagnosedOn("");
        setRecoveredOn("");
    };
    return (
        <>
            <div className="header"><PatientNav /></div>
            <div className="body">Patient Registration
                <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
                <p>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                <p>Gender: <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} /></p>
                <p>DOB: <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} /></p>
                <p>Blood Group: <select value={bGroup} onChange={(e) => setBgroup(e.target.value)} >
                    <option value="">Select</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                </select>
                </p>
                <div><p>
                    Disease Name:
                    <input
                        type="text"
                        value={diseaseName}
                        onChange={(e) => setDiseaseName(e.target.value)}
                    />
                </p>

                    <p>
                        Diagnosed On:
                        <input
                            type="date"
                            value={diagnosedOn}
                            onChange={(e) => setDiagnosedOn(e.target.value)}
                        />
                    </p>

                    <p>
                        Recovered On:
                        <input
                            type="date"
                            value={recoveredOn}
                            onChange={(e) => setRecoveredOn(e.target.value)}
                        />
                    </p>

                    <button onClick={addDisease}>
                        Add Disease
                    </button>

                    <br /><br />

                    <ul>
                        {diseaseHistory.map((disease, index) => (
                            <li key={index}>
                                {disease.diseaseName} | Diagnosed: {disease.diagnosedOn} | Recovered: {disease.recoveredOn || "Not Recovered"}
                            </li>
                        ))}
                    </ul>

                    <br />

                </div>

                <p>Contact: <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} /></p>
                <p>Address: <input type="text" value={addr} onChange={(e) => setAddr(e.target.value)} /></p>
                <p>Password: <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} /></p>
                <p>Confirm: <input type="text" value={cPass} onChange={(e) => setCpass(e.target.value)} /></p>
                <p><button onClick={PatientRegister}>Register</button></p>
                <h4>{res}</h4>
            </div>
            <div className="footer"></div>
        </>
    )
}

export default PatientReg