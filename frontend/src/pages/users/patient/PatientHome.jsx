import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../../assets/patientCarousel/car1_s1.jpeg";
import slide2 from "../../../assets/patientCarousel/car1_s2.jpeg";
import slide3 from "../../../assets/patientCarousel/car1_s3.jpeg";
import slide4 from "../../../assets/patientCarousel/car1_s4.jpg";
import slide5 from "../../../assets/patientCarousel/car1_s5.jpeg";
import { PatientNav } from '../../../components/navbar/PatientNav'

function PatientHome() {
  return (
    <>
      <div className="header"><PatientNav /></div>
      <div className="body"><h2>Patient DashBoard</h2>
        <div className='app1'>


          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>upcomin appointments</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Doc Name:
                <br />
                date:
                <br />
                Timing:
                <br />
                reason:
              </Card.Text>
              <Card.Link href="#">view all appointments</Card.Link>
            </Card.Body>
          </Card>


          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Recent Report</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Recent report details()
              </Card.Text>
              <Card.Link href="#">view full report</Card.Link>
              <Card.Link href="#">view all reports</Card.Link>
            </Card.Body>
          </Card>


          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>recent MedHistory</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                recent medical history(latest disese gistory details)
              </Card.Text>
              <Card.Link href="#">View all history</Card.Link>
            </Card.Body>
          </Card>


        </div>
        <div className='app2'>
          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>active prescription</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">take these medicines properly for the time prescribed.</Card.Subtitle>
              <Card.Text>
                medname:duration(daily - twice a day)<br />
                medname:duration(alternate dys - after lunch)
              </Card.Text>
              <Card.Link href="#">View prescription</Card.Link>
              <Card.Link href="#">View  all prescription</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* car1 will be in the right side of the page  */}
      <div className="car1">
        <Card style={{ width: "18rem" }}>
          <Carousel fade interval={3000}>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide4}
                alt="Third slide"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide5}
                alt="Third slide"
              />

            </Carousel.Item>

          </Carousel>
        </Card>
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

export default PatientHome;