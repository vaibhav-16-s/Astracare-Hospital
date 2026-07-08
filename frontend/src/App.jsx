
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/auth/Login';
import DoctorReg from "./pages/users/doctor/DoctorReg";
import PatientReg from "./pages/users/patient/PatientReg";
import StaffReg from "./pages/users/staff/StaffReg";
import { AdminHome } from "./pages/users/admin/AdminHome";
import PatientHome from "./pages/users/patient/PatientHome";
import DoctorHome from "./pages/users/doctor/DoctorHome";
import StaffHome from "./pages/users/staff/StaffHome";
import AdminReg from "./pages/users/admin/AdminReg";
import ManageDoctors from "./pages/users/admin/ManageDoctors";
import ManageStaff from "./pages/users/admin/ManageStaff";
import ManageDept from "./pages/users/admin/ManageDept";
import ManagePatient from "./pages/users/admin/ManagePatient";
import ManageAppointments from "./pages/users/admin/ManageAppointments";

function App() {
  return (
    <>
      <Router>
        <Routes>

        //Home
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

        //Admin
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/register" element={<AdminReg />} />
          <Route path="/admin/managedoctors" element={<ManageDoctors />} />
          <Route path="/admin/managepatients" element={<ManagePatient />} />
          <Route path="/admin/managestaff" element={<ManageStaff />} />
          <Route path="/admin/managedept" element={<ManageDept />} />    
          <Route path="/admin/manageappointment" element={<ManageAppointments />} />          
      

        //Doctor
          <Route path="/doc/home" element={<DoctorHome />} />
          <Route path="/doc/register" element={<DoctorReg />} />

        //Patient
          <Route path="/patient/home" element={<PatientHome />} />
          <Route path="/patient/register" element={<PatientReg />} />


        //Staff
          <Route path="/staff/home" element={<StaffHome />} />
          <Route path="/staff/register" element={<StaffReg />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
