import React from 'react'
import { StaffNav } from '../../../components/navbar/StaffNav'

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