import { useState } from "react";
import axios from "axios";
import { AdminNav } from "../../../../components/navbar/AdminNav";

function AdminReg() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [pass, setPass] = useState("");
    const [cPass, setCPass] = useState("");
    const [res, setRes] = useState("");

    const AdminRegister = async () => {

        if (pass !== cPass) {
            setRes("Passwords do not match");
            return;
        }

        try {

            const response = await axios.post(
                "http://localhost:5000/admin/adminregister",
                {
                    name,
                    email,
                    contact,
                    address,
                    pass
                }
            );

            const result = response.data;

            setRes(result.message);

            if (result.success) {
                setName("");
                setEmail("");
                setContact("");
                setAddress("");
                setPass("");
                setCPass("");
            }

        } catch (err) {

            setRes(err.response?.data?.message || "Registration Failed");

        }

    };

    return (
        <>

            <div className='header'> <AdminNav /></div>
            <div className="body">

                <h2>Admin Registration</h2>

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
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </p>

                <p>
                    Password:
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </p>

                <p>
                    Confirm Password:
                    <input
                        type="password"
                        value={cPass}
                        onChange={(e) => setCPass(e.target.value)}
                    />
                </p>

                <button onClick={AdminRegister}>
                    Register
                </button>

                <h4>{res}</h4>

            </div>

           
          
            <div className='footer'> <div>© Astracare</div>
                <div><h2>About</h2>
                    <p>this is about Astracare
                    </p></div>
                <div><h2>Contact</h2>
                    <p>this is contact details
                    </p></div>
            </div>
        </>
    );
}

export default AdminReg;