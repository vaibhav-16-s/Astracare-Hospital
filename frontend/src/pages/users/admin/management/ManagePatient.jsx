import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { AdminNav } from "../../../../components/navbar/AdminNav";

function ManagePatients() {
    return (
        <>
            <div className="header">
                <AdminNav />
            </div>

            <div className="body">
                <h2>Patient Management</h2>

                <div className="hBody">

                    <p>
                        These are the patients currently registered in your hospital.
                        Here you can view their details, update their information,
                        manage patient records, or remove them when necessary.
                    </p>

                    <div>
                        <input
                            type="text"
                            placeholder="Search by Name / Email / Contact"
                            className="mr-sm-2"
                        />
                        <Button variant="warning" size="sm">
                            Search
                        </Button>
                    </div>

                    <br />

                    <div>
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

            <div className="footer">
                <div>© Astracare</div>

                <div>
                    <h2>About</h2>
                    <p>This is about Astracare.</p>
                </div>

                <div>
                    <h2>Contact</h2>
                    <p>This is contact details.</p>
                </div>
            </div>
        </>
    );
}

export default ManagePatients;