import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import {AdminNav} from "../../../../components/navbar/AdminNav";


function EditShift(){


    const {id}=useParams();

    const navigate=useNavigate();


    const [weekStart,setWeekStart]=useState("");



    const [weeklyShift,setWeeklyShift]=useState([]);



    useEffect(()=>{

        fetchShift();

    },[]);



    const fetchShift=async()=>{


        try{


            const response=await axios.get(
                `http://localhost:5000/admin/getshift/${id}`
            );


            const data=response.data;


            setWeekStart(
                data.weekStart.substring(0,10)
            );


            setWeeklyShift(data.schedule);



        }
        catch(error){

            console.log(error);

        }


    };





    const updateShift=async()=>{


        try{


            const response=await axios.put(

                `http://localhost:5000/admin/updateshift/${id}`,

                {
                    weekStart,
                    schedule:weeklyShift
                }

            );


            alert(response.data.message);


            navigate("/admin/manageshifts");


        }
        catch(error){

            console.log(error);

        }


    };




    return(

        <>


        <div className="header">
            <AdminNav/>
        </div>


        <div className="body">


            <h2>Edit Weekly Shift</h2>



            <label>
                Week Starting Date
            </label>


            <input

                type="date"

                value={weekStart}

                onChange={(e)=>setWeekStart(e.target.value)}

            />



            <br/><br/>




            <Table bordered hover>


                <thead>

                    <tr>

                        <th>
                            Day
                        </th>

                        <th>
                            Start Time
                        </th>

                        <th>
                            End Time
                        </th>

                        <th>
                            Status
                        </th>


                    </tr>


                </thead>




                <tbody>


                {
                    weeklyShift.map((shift,index)=>(


                        <tr key={shift.day}>


                            <td>
                                {shift.day}
                            </td>



                            <td>

                                <input

                                type="time"

                                value={shift.startTime}

                                onChange={(e)=>{


                                    let temp=[...weeklyShift];


                                    temp[index]={
                                        ...temp[index],
                                        startTime:e.target.value
                                    };


                                    setWeeklyShift(temp);


                                }}

                                />


                            </td>



                            <td>


                                <input

                                type="time"

                                value={shift.endTime}

                                onChange={(e)=>{


                                    let temp=[...weeklyShift];


                                    temp[index]={
                                        ...temp[index],
                                        endTime:e.target.value
                                    };


                                    setWeeklyShift(temp);


                                }}

                                />


                            </td>




                            <td>


                                <select

                                value={shift.status}

                                onChange={(e)=>{


                                    let temp=[...weeklyShift];


                                    temp[index]={
                                        ...temp[index],
                                        status:e.target.value
                                    };


                                    setWeeklyShift(temp);


                                }}

                                >


                                    <option>
                                        Scheduled
                                    </option>

                                    <option>
                                        Off
                                    </option>

                                    <option>
                                        Leave
                                    </option>


                                </select>


                            </td>



                        </tr>


                    ))
                }


                </tbody>



            </Table>




            <Button

            variant="success"

            onClick={updateShift}

            >

                Save Changes

            </Button>



        </div>



        </>

    )

}


export default EditShift;