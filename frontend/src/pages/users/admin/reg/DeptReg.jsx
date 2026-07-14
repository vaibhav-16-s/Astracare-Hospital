import React, { useState } from "react";
import axios from "axios";
import { AdminNav } from "../../../../components/navbar/AdminNav";

function DeptReg() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [headEmployeeEmail, setHeadEmployeeEmail] = useState("");
  const [headEmployeeModel, setHeadEmployeeModel] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("select");
  const [res, setRes] = useState("");

  const DeptRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/deptregister",
        {
          name,
          description,
          headEmployeeEmail,
          headEmployeeModel,
          location,
          status
        }
      );

      const result = response.data;

      setRes(result.message);

      if (result.success) {
        setName("");
        setDescription("");
        setHeadEmployeeEmail("");
        setHeadEmployeeModel("");
        setLocation("");
        setStatus("");
      }
    } catch (error) {
      console.log(error);
      setRes("Failed to register department.");
    }
  };

  return (
    <>
      <div className="header">
        <AdminNav />
      </div>

      <div className="body">
        <h2>Department Registration</h2>

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
            style={{ width: "400px", height: "100px" }}
          />
        </p>

        <p>
          Head Employee Type:

          <select
            value={headEmployeeModel}
            onChange={(e) => setHeadEmployeeModel(e.target.value)}
          >

            <option value="">
              Select
            </option>

            <option value="Doctor">
              Doctor
            </option>

            <option value="Staff">
              Staff
            </option>

          </select>

        </p>


        <p>
          Head Employee Email:

          <input
            type="text"
            value={headEmployeeEmail}
            onChange={(e) => setHeadEmployeeEmail(e.target.value)}
            placeholder="Enter Employee Email"
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

            <option value="Select">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>

          </select>
        </p>

        <p>
          <button onClick={DeptRegister}>
            Register Department
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
export default DeptReg;