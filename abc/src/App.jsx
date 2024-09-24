import { useState } from 'react'
import BasicExample from './components/nav';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkVariantExample from './components/slider';
import dentist from './images/village-dental-dentists.jpg'
import Cards from './components/cards';
import Reviews from './components/reviews';
import Surgery from './components/surgery';
import visit1 from "./images/visit1.jpg"
import visit2 from "./images/visit2.jpg"
import visit3 from "./images/visit3.jpg"
import visit4 from "./images/visit4.jpg"

function mycode(){
  return(
    <>
  <BasicExample/>
  <DarkVariantExample/>

  <div className="about">
    <div className="about-border">
    <div className="about-text">
      <h1>Dentistry done right</h1>
      <p style={{
         fontSize: "20px",
  paddingTop: "3%"
      }}>Adults and kids, we welcome patients from 3-year-olds to seniors! 
        Our team is passionate about building lifetime relationships through
         positive experiences, featuring:</p>
         <ul>
    <li>Transparent Pricing</li>
    <li>Unparalleled Warranty</li>
    <li>FREE Whitening (for life!) </li>
</ul>
<p style={{
  fontStyle: "italic",
  fontSize: "20px",
  paddingTop: "3%"
}}>“Our word is our worth. We promise to do it right, timely, and for a fair price.”</p>
</div>
<div className="about-img">
<img src={dentist} height={400} />
</div>
    </div>
  </div>
  <div className="doctors">
    <h1>OUR SUPER EXPERIENCED DENTISTS</h1>
  </div>

<Cards/>
<div className="rev">
  <div className="revhead">
  <h1>KIND WORDS FROM OUR PATIENTS</h1>
  <p>☆☆☆☆☆</p>
</div>
<div className="revcard">
<Reviews/>
</div></div>

<div className="surgery">
  <h1>Comprehensive care, one convenient location</h1>
</div>
<Surgery/>

<div className="white">
  <div className="white-text">
    <h3>FREE WHITENING</h3>
    <h1>Whitening for life</h1>
    <ul>
      <li>Visit Village Dental for a new patient cleaning & exam</li>
      <li>Take home a complimentary custom whitening kit</li>
      <li>Book a cleaning every 6 months and we'll refill your whitening gel</li>
    </ul>
    {/* <ul>
    <li>Visit Village Dental for a new patient cleaning & exam</li>
    <li>Take home a complimentary custom whitening kit</li>
    <li>Book a cleaning every 6 months and we'll refill your whitening gel</li> 
    </ul> */}
     <button className='nav-btn w-b' >BOOK ONLINE</button>
  </div>
</div>

<div className="visit">
  <div className="visit-images">
  <div className="visit-img1">
    <img src={visit1} className='top' alt="" />
    <img src={visit2} className='bottom' alt="" />
  </div>
  <div className="visit-img2">
    <img src={visit3} className='left' alt="" />
    <img src={visit4} className='right' alt="" />
  </div>
  </div>
  <div className="visit-text">
    <h1>VISIT US</h1>
<h6>We’re conveniently located in the Denver Tech Center area. 
  Find us on the 4th floor of the Triad Office Park building. Plenty of free parking available.</h6>

  <h6>

5670 Greenwood Plaza Blvd., Suite 404
Greenwood Village, CO 80111</h6>
  </div>
</div>
<div className="book">
  <h1>BOOK YOUR VISIT ONLINE</h1>
  <h6>View available appointments and enjoy dentistry done right. +FREE teeth whitening for life.</h6>
  <button className='nav-btn w-b' >BOOK ONLINE</button>
</div>
<div className="last">
  <h5>All rights reserved</h5>
</div>
    </>
  )
}
export default mycode




