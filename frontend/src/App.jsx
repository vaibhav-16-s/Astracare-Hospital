
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/auth/Login';
import DoctorReg from "./pages/users/admin/reg/DoctorReg";
import PatientReg from "./pages/home/PatientReg";
import StaffReg from "./pages/users/admin/reg/StaffReg";
import { AdminHome } from "./pages/users/admin/AdminHome";
import PatientHome from "./pages/users/patient/PatientHome";
import DoctorHome from "./pages/users/doctor/DoctorHome";
import StaffHome from "./pages/users/staff/StaffHome";
import AdminReg from "./pages/users/admin/reg/AdminReg";
import ManageDoctors from "./pages/users/admin/management/ManageDoctors";
import ManageStaff from "./pages/users/admin/management/ManageStaff";
import ManageDept from "./pages/users/admin/management/ManageDept";
import ManagePatient from "./pages/users/admin/management/ManagePatient";
import ManageAppointments from "./pages/users/admin/management/ManageAppointments";
import ManageShifts from "./pages/users/admin/management/ManageShifts";
import EditDoc from "./pages/users/admin/edit/EditDoc";
import Deletedoc from "./pages/users/admin/edit/Deletedoc";

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
          <Route path="/admin/adminregister" element={<AdminReg />} />
          <Route path="/admin/managedoctors" element={<ManageDoctors />} />
          <Route path="/admin/managepatients" element={<ManagePatient />} />
          <Route path="/admin/managestaff" element={<ManageStaff />} />
          <Route path="/admin/managedept" element={<ManageDept />} />    
          <Route path="/admin/manageappointment" element={<ManageAppointments />} />   
          <Route path="/admin/manageshifts" element={<ManageShifts />} />          
          <Route path="/admin/editdoc/:id" element={<EditDoc />} />               
          <Route path="/admin/deletedoc/:id" element={<Deletedoc/>} />     
          <Route path="/admin/docregister" element={<DoctorReg />} />
          <Route path="/admin/staffregister" element={<StaffReg />} />
      

        //Doctor
          <Route path="/doc/home" element={<DoctorHome />} />
          

        //Patient
          <Route path="/patient/home" element={<PatientHome />} />
          <Route path="/patient/register" element={<PatientReg />} />


        //Staff
          <Route path="/staff/home" element={<StaffHome />} />
          
        </Routes>
      </Router>
    </>
  )
}
export default App
