import React from 'react'
import { DoctorNav } from '../../../components/navbar/DoctorNav'

function DoctorHome() {
  return (
    <><div className='header'> <DoctorNav /></div>
      <div className='body'><h2>This is Doctor Home Page</h2></div>
  
        <div><h2>About</h2>
          <p>this is about Astracare</p>
          </div>
        <div><h2>Contact</h2>
          <p>this is contact details
          </p></div>
        <div className='footer'>© Astracare</div>
    </>
  )
}
export default DoctorHome