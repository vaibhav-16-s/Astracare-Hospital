import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AdminNav } from '../../../components/navbar/AdminNav'

function ManageDoctors() {
    return (
        <>
            <div className='header'> <AdminNav /></div>
            <div className='body'><h2>Doctor Management</h2>
                <div className='hBody'>
                    <p>
                        These are the doctor currently working in your.
                        Here you can view their details, update their info, manage schedules,
                        remove when necessary
                    </p>

                    <div>
                        <input type="text" placeholder="Search By Dept/" className=" mr-sm-2" />
                        <Button variant="warning" size="sm">Search</Button>
                    </div>
                    <br />
                    <div>


                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Email</th>
                                    <th>gender</th>
                                    <th>Contact</th>
                                    <th>Dob</th>
                                    <th>Status</th>
                                    <th></th>
                                    <th>Email</th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Patient Name</td>
                                    <td>patient@email.com</td>
                                    <td>Male</td>
                                    <td>9876543210</td>
                                    <td>Kota</td>
                                    <td>01/01/2000</td>
                                    <td>O+</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Button variant="warning" size="sm">
                                            Edit
                                        </Button>



                                        <Button variant="danger" size="sm" className="ms-2" className="ms-2">
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>


                    </div>
                </div>
            </div>

            <div className='footer'>
                <div>© Astracare</div>
                <div><h2>About</h2>
                    <p>this is about Astracare
                    </p></div>
                <div><h2>Contact</h2>
                    <p>this is contact details
                    </p>
                </div>
            </div>
        </>
    )
}

export default ManageDoctors