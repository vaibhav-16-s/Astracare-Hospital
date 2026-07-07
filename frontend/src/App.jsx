
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/auth/Login';
import DoctorReg from "./pages/users/doctor/DoctorReg";
import PatientReg from "./pages/users/patient/PatientReg";
function App() {
  return(
  <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/doc/register" element={<DoctorReg/>}/>
      <Route path="/patient/register" element={<PatientReg/>}/>
    </Routes>
   </Router>
  </>
  )
}
export default App
