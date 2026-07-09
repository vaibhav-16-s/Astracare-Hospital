import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AdminNav } from '../../../../components/navbar/AdminNav'

function ManageShifts() {
    return (
        <>
            <div className='header'> <AdminNav /></div>
            <div className='body'><h2>Shift Chart</h2>
                <div className='hBody'>
                    <p>
                        Manage staff shift schedules from one place.
                        View assigned shifts, update timings, create new schedules,
                        and ensure smooth hospital operations.
                    </p>

                    <div>
                        <input type="text" placeholder="Search By Dept/" className=" mr-sm-2" />
                        <Button variant="warning" size="sm">Search</Button>
                    </div>
                    <div><Button variant="warning" size="sm">Update Shifts</Button></div>
                    <br />
                    <div>


                        <Table className="table-warning">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry the Bird</td>
                                    <td>dure</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>


                    </div>
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

export default ManageShifts