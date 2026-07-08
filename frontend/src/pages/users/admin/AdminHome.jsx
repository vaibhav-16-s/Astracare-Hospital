
import Card from 'react-bootstrap/Card';
import { AdminNav } from '../../../components/navbar/AdminNav'

export function AdminHome() {
  return (
    <>
      <div className='header'> <AdminNav /></div>
      <div className='body'>
        <div className="hBody">Welcome Admin!</div>
        <div className="mBody">

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Total Doctors</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>

              </Card.Text>
              <Card.Link href="#">view doctors</Card.Link>

            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>total staff</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                toatagl nurse:
                <br />total receptionist:
                <br />total lab technicians:
              </Card.Text>
              <Card.Link href="#">view staff</Card.Link>

            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>total Patients</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>

              </Card.Text>
              <Card.Link href="#">view Patients</Card.Link>

            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>total departments</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>

              </Card.Text>
              <Card.Link href="#">view departments</Card.Link>

            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='footer'> <div>© Astracare</div>
        <div><h2>About</h2>
          <p>this is about Astracare
          </p></div>
        <div><h2>Contact</h2>
          <p>this is contact details
          </p></div>
      </div>
    </>
  )
}
