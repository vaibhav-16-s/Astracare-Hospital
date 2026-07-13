import { useEffect, useState } from "react";
import { AdminNav } from "../../../../components/navbar/AdminNav";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DeleteStaff() {

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

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getStaffDetails();
    }, []);

    const getStaffDetails = async () => {
        try {

            const response = await axios.get(
                `http://localhost:5000/admin/getstaffdetails/${id}`
            );

            const result = response.data.data;

            setName(result.name);
            setEmail(result.email);
            setContact(result.contact);
            setAddr(result.address);
            setGender(result.gender);
            setDept(result.dept);
            setStatus(result.status);
            setRole(result.role);
            setDOB(result.dateOfBirth ? result.dateOfBirth.split("T")[0] : "");

        }
        catch (error) {
            console.log(error);
        }
    };

    const StaffDelete = async () => {

        try {

            if (
                !window.confirm(
                    "Are you sure you want to delete this staff member? This action cannot be undone."
                )
            ) return;

            const response = await axios.delete(
                `http://localhost:5000/admin/deletestaff/${id}`
            );

            if (response.data) {

                setRes(response.data.msg);

                setTimeout(() => {
                    navigate("/admin/managestaff", {
                        replace: true
                    });
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

                <h2>Delete Staff</h2>

                <p>
                    Name:
                    <input type="text" value={name} readOnly />
                </p>

                <p>
                    Email:
                    <input type="text" value={email} readOnly />
                </p>

                <p>
                    Gender:
                    <input type="text" value={gender} readOnly />
                </p>

                <p>
                    DOB:
                    <input type="date" value={dob} readOnly />
                </p>

                <p>
                    Contact:
                    <input type="text" value={contact} readOnly />
                </p>

                <p>
                    Address:
                    <input type="text" value={addr} readOnly />
                </p>

                <p>
                    Department:
                    <input type="text" value={dept} readOnly />
                </p>

                <p>
                    Role:
                    <input type="text" value={role} readOnly />
                </p>

                <p>
                    Status:
                    <input type="text" value={status} readOnly />
                </p>

                <p>
                    <button onClick={StaffDelete}>
                        Delete
                    </button>
                </p>

                <h4>{res}</h4>

            </div>

            <div className="footer">
                <div>© Astracare</div>

                <div>
                    <h2>About</h2>
                    <p>This is about Astracare</p>
                </div>

                <div>
                    <h2>Contact</h2>
                    <p>This is contact details</p>
                </div>
            </div>
        </>
    );
}

export default DeleteStaff;