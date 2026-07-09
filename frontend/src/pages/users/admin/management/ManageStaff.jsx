import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AdminNav } from '../../../../components/navbar/AdminNav'
import { useNavigate } from 'react-router-dom';

function ManageStaff() {
    const navigate=useNavigate();
    return (
        <>
            <div className='header'> <AdminNav /></div>
            <div className='body'><h2>Staff Management</h2>
                <div className='hBody'>
                    <p>
                        View and manage all hospital staff,
                        including receptionists, nurses, and laboratory technicians.
                        Add, update, or remove staff records as needed.
                    </p>

                    <div>
                        <input type="text" placeholder="Search By Dept/" className=" mr-sm-2" />
                        <Button variant="warning" size="sm">Search</Button>
                    </div>
                    <div><Button onClick={() => navigate("/staff/register")} variant="warning" size="sm">Register Staff</Button></div>
                    <br />
                    <div>

                        <h4>Receptionists</h4>
                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th>Date of Birth</th>
                                    <th>Blood Group</th>
                                    <th>Edit</th>

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

                                    <td>
                                        <Button variant="warning" size="sm">
                                            Edit
                                        </Button>



                                        <Button variant="danger" size="sm" className="ms-2">
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        {/* 
    TODO: View More Logic

    1. Create state:
       const [receptionLimit, setReceptionLimit] = useState(10);

    2. Fetch all receptionists from backend.

    3. Display only:
       receptionists.slice(0, receptionLimit)

    4. On "View More" button click:
       setReceptionLimit(prev => prev + 10);

    5. Hide button when:
       receptionLimit >= receptionists.length
*/}
                        <div className="text-center mt-3">
                            <Button variant="secondary">
                                View More
                            </Button>
                        </div>

                        <h4>Nurses</h4>
                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th>Date of Birth</th>
                                    <th>Blood Group</th>
                                    <th>Edit</th>

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
                        {/* 
    TODO: View More Logic

    const [nurseLimit, setNurseLimit] = useState(10);

    Display:
    nurses.slice(0, nurseLimit)

    On click:
    setNurseLimit(prev => prev + 10);

    Hide button when all nurses are displayed.
*/}
                        <div className="text-center mt-3">
                            <Button variant="secondary">
                                View More
                            </Button>
                        </div>

                        <h4>Lab technicians</h4>
                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th>Date of Birth</th>
                                    <th>Blood Group</th>
                                    <th>Edit</th>

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

                                    <td>
                                        <Button variant="warning" size="sm">
                                            Edit
                                        </Button>



                                        <Button variant="danger" size="sm">
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        { /*
            =========================================
            Future Improvements
            =========================================

            ✓ Fetch all staff from backend.

            ✓ Separate into:
                - Receptionists
                - Nurses
                - Lab Technicians

            ✓ Search by department/name.

            ✓ Expandable row on click
                (shows remaining details).

            ✓ View More
                - Initially show 10 records.
                - Each click loads 10 more.
                - Hide button when all records are visible.

            ✓ Edit/Delete functionality.

            =========================================
            */}
                        <div className="text-center mt-3">
                            <Button variant="secondary">
                                View More
                            </Button>
                        </div>

                    </div>
                </div>
            </div >

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

export default ManageStaff;