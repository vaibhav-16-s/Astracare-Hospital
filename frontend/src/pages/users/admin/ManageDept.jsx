import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AdminNav } from '../../../components/navbar/AdminNav'

function ManageDept() {
    return (
        <>
            <div className='header'> <AdminNav /></div>
            <div className='body'><h2>Department Management</h2>
                <div className='hBody'>
                    <p>
                      These are the departments currently available in your hospital.
                       Here you can view department details, add new departments, 
                       update existing information, or remove departments when necessary.
                    </p>

                    <div>
                        <input type="text" placeholder="Search By Dept/" className=" mr-sm-2" />
                        <Button variant="warning" size="sm">Search</Button>
                    </div>
                    <div >
                        
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

export default ManageDept;