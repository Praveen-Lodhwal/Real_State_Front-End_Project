import React from 'react'
import Slider from 'react-slick';
import Navbar from './Navbar'

function Home() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <> 
     <Navbar/>
      {/* Header Start */}
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family </h1>
            <p className="animated fadeIn mb-4 pb-2">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p>
            <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
          </div>
          <div className="col-md-6 animated fadeIn">
            <Slider {...settings}>
              <div>
                <img src="img/carousel-1.jpg" alt="" className="slide" style={{width: "650px", height: "500px"}}/>
              </div>
              <div>
                <img src="img/carousel-2.jpg" alt="" className="slide" style={{width: "650px", height: "500px"}}/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* Header End  */}
    </>
  )
}

export default Home
