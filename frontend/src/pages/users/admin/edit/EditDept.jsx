import React, { useState, useEffect } from "react";
import axios from "axios";
import { AdminNav } from "../../../../components/navbar/AdminNav";
import { useNavigate, useParams } from "react-router-dom";

function EditDept() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [headEmployeeEmail, setHeadEmployeeEmail] = useState("");
    const [headEmployeeModel, setHeadEmployeeModel] = useState("");
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    const [res, setRes] = useState("");

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

            // because headDoctor is populated
            if (result.headEmployee) {

                setHeadEmployeeEmail(
                    result.headEmployee.email
                );

            }

            setHeadEmployeeModel(
                result.headEmployeeModel
            );

        } catch (error) {
            console.log(error);
        }
    };


    const DeptUpdate = async () => {
        try {
            const response = await axios.put(
                `http://localhost:5000/admin/updatedept/${id}`,
                {

                    name,
                    description,
                    headEmployeeEmail,
                    headEmployeeModel,
                    location,
                    status

                }
            );
            setRes(response.data.message);
            setTimeout(() => navigate("/admin/managedept", { replace: true }), 2000);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="header">
                <AdminNav />
            </div>
            <div className="body">
                <h2>Edit Department</h2>
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
                    Head Employee Email:
                    <input

                        value={headEmployeeEmail}

                        onChange={(e) =>
                            setHeadEmployeeEmail(e.target.value)
                        }

                    />
                    <select

                        value={headEmployeeModel}

                        onChange={(e) =>
                            setHeadEmployeeModel(e.target.value)
                        }

                    >

                        <option value="Doctor">
                            Doctor
                        </option>

                        <option value="Staff">
                            Staff
                        </option>


                    </select>
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
                <button onClick={DeptUpdate}>
                    Update Department
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


export default EditDept;