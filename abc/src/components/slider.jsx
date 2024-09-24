import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import "../App.css"

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          height="700"
        />
        <Carousel.Caption>
          <h1 className="sliderhead">EXCEPTIONAL CARE FOR ALL AGES</h1>
          <p className="slidertext" style={{color: "black"}}>We always provides our clients best services and try to
            achive their trust and satisfaction</p>
            <button className="slider-btn">Book your appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          height="700"
        />
        <Carousel.Caption>
          <h1 className="sliderhead">EXCEPTIONAL CARE FOR ALL AGES</h1>
           <p className="slidertext" style={{color: "black"}}>We always provides our clients best services and try to
            achive their trust and satisfaction</p>
            <button className="slider-btn">Book your appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          height="700"
        />
        <Carousel.Caption>
          <h1 className="sliderhead">EXCEPTIONAL CARE FOR ALL AGES</h1>
           <p className="slidertext" style={{color: "black"}}>We always provides our clients best services and try to
            achive their trust and satisfaction</p>
            <button className="slider-btn">Book your appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;