import React from 'react'
import { PatientNav } from '../../../components/navbar/PatientNav'

function PatientHome() {
  return (
    <>
    <div classname="header"><PatientNav/></div>
    <div className="body">This is Patient Home</div>
    <div className="footer" ></div>

    </>
  )
}

export default PatientHome