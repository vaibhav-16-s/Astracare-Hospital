import React from 'react'
import { DoctorNav } from '../../../components/navbar/DoctorNav'
import { Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../../assets/docCarousel/car2_s1.jpeg";
import slide2 from "../../../assets/docCarousel/car2_s2.jpeg";
import slide3 from "../../../assets/docCarousel/car2_s3.jpeg";
import slide4 from "../../../assets/docCarousel/car2_s4.jpeg";

function DoctorHome() {
  return (
    <><div className='header'> <DoctorNav /></div>
      <div className='body'><h2>This is Doctor Home Page</h2>
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
            </Carousel>
          </Card>
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
export default DoctorHome