import React, { useState, useEffect } from "react";
import axios from "axios";
import { AdminNav } from "../../../../components/navbar/AdminNav";
import { useNavigate, useParams } from "react-router-dom";

function DeleteDept() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("");
const [headDoctorEmail, setHeadDoctorEmail] = useState("");
    const [res, setRes] = useState("");
    const navigate = useNavigate();

    const { id } = useParams();


    useEffect(() => {
        getDeptDetails();
    }, []);


    const getDeptDetails = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/admin/getdeptdetails/${id}`
            );

            const result = response.data.deptData;

            setName(result.name);
            setDescription(result.description);
            setLocation(result.location);
            setStatus(result.status);



        } catch (error) {
            console.log(error);
        }
    };

    const DeptDelete = async () => {
        try {
            if (!window.confirm("Are you sure you want to delete this Department? This action cannot be undone.")) return;
            const response = await axios.delete(`http://localhost:5000/admin/deletedept/${id}`);
            if (response.data) {
                setRes(response.data.msg);
                setTimeout(() => navigate("/admin/managedept", { replace: true }), 2000);
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
                <h2>Delete Department</h2>
                <p>
                    Department Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{
                            width: "400px",
                            height: "100px"
                        }}
                    />
                </p>
                <p>
                    Head Doctor Email:
                    <input
                        type="text"
                        value={headDoctorEmail}
                        onChange={(e) => setHeadDoctorEmail(e.target.value)}
                    />
                </p>
                <p>
                    Location:
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </p>
                <p>
                    Status:

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}>

                        <option value="Active">
                            Active
                        </option>

                        <option value="Inactive">
                            Inactive
                        </option>

                    </select>
                </p>
                <button onClick={DeptDelete}>
                    Delete Department
                </button>
                <h4>{res}</h4>

            </div>
            <div className='footer'>
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

    )
}

export default DeleteDept