import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { AdminNav } from "../../../../components/navbar/AdminNav";

function ShiftReg() {

    const navigate = useNavigate();

    const [role, setRole] = useState("");
    const [departments, setDepartments] = useState([]);
    const [department, setDepartment] = useState("");
    const [employees, setEmployees] = useState([]);
    const [empId, setEmpId] = useState("");

    const [weekStart, setWeekStart] = useState("");

    const [weeklyShift, setWeeklyShift] = useState([
        { day: "Monday", startTime: "", endTime: "", status: "Scheduled" },
        { day: "Tuesday", startTime: "", endTime: "", status: "Scheduled" },
        { day: "Wednesday", startTime: "", endTime: "", status: "Scheduled" },
        { day: "Thursday", startTime: "", endTime: "", status: "Scheduled" },
        { day: "Friday", startTime: "", endTime: "", status: "Scheduled" },
        { day: "Saturday", startTime: "", endTime: "", status: "Scheduled" },
        { day: "Sunday", startTime: "", endTime: "", status: "Scheduled" }
    ]);

    useEffect(() => {
        fetchDepartments();
    }, []);

    useEffect(() => {

        if (role && department) {
            fetchEmployees();
        }

    }, [role, department]);

    const fetchDepartments = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/admin/showalldept"
            );

            setDepartments(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const fetchEmployees = async () => {

        try {

            const response = await axios.get(
                `http://localhost:5000/admin/employees/${role}/${department}`
            );

            setEmployees(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const assignShift = async () => {

        if (!role || !department || !empId || !weekStart) {
            alert("Please fill all fields.");
            return;
        }

        try {

            const response = await axios.post(
                "http://localhost:5000/admin/assignweeklyshift",
                {
                    empId,
                    empRole: role,
                    weekStart,
                    schedule: weeklyShift
                }
            );

            alert(response.data.message);

            setRole("");
            setDepartment("");
            setEmployees([]);
            setEmpId("");
            setWeekStart("");

            setWeeklyShift([
                { day: "Monday", startTime: "", endTime: "", status: "Scheduled" },
                { day: "Tuesday", startTime: "", endTime: "", status: "Scheduled" },
                { day: "Wednesday", startTime: "", endTime: "", status: "Scheduled" },
                { day: "Thursday", startTime: "", endTime: "", status: "Scheduled" },
                { day: "Friday", startTime: "", endTime: "", status: "Scheduled" },
                { day: "Saturday", startTime: "", endTime: "", status: "Scheduled" },
                { day: "Sunday", startTime: "", endTime: "", status: "Scheduled" }
            ]);

            navigate("/admin/manageshifts");

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

                <h2>Register Weekly Shift</h2>

                <div>

                    <select
                        value={role}
                        onChange={(e) => {

                            setRole(e.target.value);
                            setDepartment("");
                            setEmployees([]);
                            setEmpId("");

                        }}
                    >

                        <option value="">Select Employee Type</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Receptionist">Receptionist</option>
                        <option value="Nurse">Nurse</option>
                        <option value="Lab Technician">Lab Technician</option>

                    </select>

                    <br />

                    <select
                        value={department}
                        onChange={(e) => {

                            setDepartment(e.target.value);
                            setEmpId("");

                        }}
                    >

                        <option value="">Select Department</option>

                        {
                            departments.map((dept) => (

                                <option
                                    key={dept._id}
                                    value={dept.name}
                                >
                                    {dept.name}
                                </option>

                            ))
                        }

                    </select>

                    <br />

                    <select
                        value={empId}
                        disabled={!role || !department}
                        onChange={(e) => setEmpId(e.target.value)}
                    >

                        <option value="">
                            Select Employee
                        </option>

                        {
                            employees.map((emp) => (

                                <option
                                    key={emp._id}
                                    value={emp._id}
                                >
                                    {emp.name}
                                </option>

                            ))
                        }

                    </select>

                    <br />

                    <label>
                        Week Starting Date:
                    </label>

                    <input
                        type="date"
                        value={weekStart}
                        onChange={(e) => setWeekStart(e.target.value)}
                    />

                    <br /><br />

                    <Table bordered hover>

                        <thead>

                            <tr>
                                <th>Day</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            {
                                weeklyShift.map((shift, index) => (

                                    <tr key={shift.day}>

                                        <td>{shift.day}</td>

                                        <td>

                                            <input
                                                type="time"
                                                value={shift.startTime}
                                                onChange={(e) => {

                                                    const temp = [...weeklyShift];

                                                    temp[index] = {
                                                        ...temp[index],
                                                        startTime: e.target.value
                                                    };

                                                    setWeeklyShift(temp);

                                                }}
                                            />

                                        </td>

                                        <td>

                                            <input
                                                type="time"
                                                value={shift.endTime}
                                                onChange={(e) => {

                                                    const temp = [...weeklyShift];

                                                    temp[index] = {
                                                        ...temp[index],
                                                        endTime: e.target.value
                                                    };

                                                    setWeeklyShift(temp);

                                                }}
                                            />

                                        </td>

                                        <td>

                                            <select
                                                value={shift.status}
                                                onChange={(e) => {

                                                    const temp = [...weeklyShift];

                                                    temp[index] = {
                                                        ...temp[index],
                                                        status: e.target.value
                                                    };

                                                    setWeeklyShift(temp);

                                                }}
                                            >

                                                <option>Scheduled</option>
                                                <option>Off</option>
                                                <option>Leave</option>

                                            </select>

                                        </td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </Table>

                    <Button
                        variant="success"
                        onClick={assignShift}
                    >
                        Assign Shift
                    </Button>

                </div>

            </div>
        </>
    );
}

export default ShiftReg;