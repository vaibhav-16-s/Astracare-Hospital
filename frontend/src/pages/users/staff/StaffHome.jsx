import React from 'react'
import { StaffNav } from '../../../components/navbar/StaffNav'
import slide1 from "../../../assets/staffCarousel/car3_s1.jpeg";
import slide2 from "../../../assets/staffCarousel/car3_s2.jpeg";
import slide3 from "../../../assets/staffCarousel/car3_s3.jpeg";
import slide4 from "../../../assets/staffCarousel/car3_s4.jpeg";
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function StaffHome() {
  return (
    <>
      <div className="header"><StaffNav /></div>
      <div className='body'><h2>Satff dashBoard</h2>





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

export default StaffHome;