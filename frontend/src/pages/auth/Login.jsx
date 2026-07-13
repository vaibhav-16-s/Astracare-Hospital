import { useState } from "react"
import { HomeNav } from "../../components/navbar/HomeNav";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const LoginUser = async () => {
        const response = await axios.post('http://localhost:5000/api/login', { email, pass });
        let result = response.data;
        if (result === null) {
            setRes("Invalid email and/or password.");
        }
        else if (result.error === 'Invalid user') {
            setRes("Either email or password is incorrect.");
        } else {
            let ut = result.role;
            if (ut === "Admin") {
                navigate('/admin/home', { replace: true });
            } else if (ut === "Doctor") {
                navigate('/doc/home', { replace: true });
            } else if (ut === "Patient") {
                navigate('/patient/home', { replace: true });
            } else if (ut === "Nurse" || ut === "Receptionist" || ut === "Lab Technician") {
                navigate('/staff/home', { replace: true });
            }
            else {
                setRes("Contact your administrator for access.");
            }
        }
    }
    return (
        <>
            <div className='header'> <HomeNav /></div>
            <div
                className="body d-flex justify-content-center align-items-center"
                style={{ minHeight: "80vh" }}>
                <Card style={{ width: "26rem" }}>
                    <Card.Body>
                        <Card.Title className="text-center mb-4">
                            User Login
                        </Card.Title>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="Enter password" />
                        </div>

                        <button
                            className="btn btn-primary w-100"
                            onClick={LoginUser}
                        >
                            Login
                        </button>

                    </Card.Body>

                </Card>
            </div>
            <div className='footer'> <div>© Astracare</div>
                <div><h2>About</h2>
                    <p>this is about astracare
                    </p></div>
                <div><h2>Contact</h2>
                    <p>this is contact details
                    </p></div>
            </div>
        </>
    )
}

export default Login;