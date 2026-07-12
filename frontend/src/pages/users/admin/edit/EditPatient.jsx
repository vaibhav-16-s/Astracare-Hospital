import { useEffect, useState } from "react";
import { AdminNav } from "../../../../components/navbar/AdminNav";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditPatient() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [addr, setAddr] = useState("");
    const [gender, setGender] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [dob, setDOB] = useState("");
    const [res, setRes] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPatientDetails();
    }, []);

    const getPatientDetails = async () => {
        try {

            const response = await axios.get(
                `http://localhost:5000/admin/getpatientdetails/${id}`
            );

            let result = response.data;

            setName(result.name || "");
            setEmail(result.email || "");
            setContact(result.contact || "");
            setAddr(result.address || "");
            setGender(result.gender || "");
            setBloodGroup(result.bloodGroup || "");
            setDOB(result.dateOfBirth ? result.dateOfBirth.split("T")[0] : "");

        }
        catch (error) {
            console.log(error);
        }
    };

    const PatientUpdate = async () => {

        try {

            const response = await axios.put(
                `http://localhost:5000/admin/updatepatient/${id}`,
                {
                    name,
                    email,
                    contact,
                    address: addr,
                    gender,
                    bloodGroup,
                    dateOfBirth: dob
                }
            );

            let result = response.data;

            if (result) {

                setRes(result.message);

                setTimeout(() => {
                    navigate("/admin/managepatients", { replace: true });
                }, 2000);

            }

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

                <h2>Edit Patient</h2>

                <p>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>

                <p>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>

                <p>
                    Gender:
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </p>

                <p>
                    DOB:
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)}
                    />
                </p>

                <p>
                    Contact:
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </p>

                <p>
                    Address:
                    <input
                        type="text"
                        value={addr}
                        onChange={(e) => setAddr(e.target.value)}
                    />
                </p>

                <p>
                    Blood Group:
                    <select
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </p>

                <p>
                    <button onClick={PatientUpdate}>
                        Update
                    </button>
                </p>

                <h4>{res}</h4>

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

export default EditPatient;