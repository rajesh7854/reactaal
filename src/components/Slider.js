import React from 'react'
import Searchbox from './Searchbox'
// import mySliderImage from "./images/hero-image.png"



export default function Slider() {
  // const myN = require('./images/hero-image.png');
  return (
    <>
 <div style={{ backgroundImage: `linear-gradient(rgb(42 44 44 / 94%), rgb(42 38 39 / 57%)),url(/banner-image.jpg),url(${process.env.PUBLIC_URL + '/banner-image.jpg'})` , backgroundRepeat: 'no-repeat', backgroundPosition: 'center' , backgroundSize: 'cover' }} className='container-fluid  justify-content-center align-items-center p-xl-5 p-xxl-5 p-lg-4 p-md-3  '>
 <div className='row  justify-content-center align-center p-2 p-xl-5 p-xxl-5 p-lg-4 p-md-3 m-xl-5 m-xxl-5 m-lg-4 m-md-3' >
  <div className='col  text-center  justify-content-center aling-items-center p-xl-5 p-xxl-5 p-lg-4 p-md-3 m-xl-5 m-xxl-5 m-lg-4 m-md-3'>
    <h5 className='text-light h1 text-break'>Find Your New Home.</h5>
              <p className='text-light text-break '> Search our database of over 8500 Active Adult Living™ communities. 55+, Active Lifestyle New Home, Resale Home, Manufactured Home or Rental..... </p>
              <Searchbox />
                </div>
                </div></div>
  
 
    </>
  )
}
