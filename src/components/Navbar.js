import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import logo from  './images/AAL-logo-without-U.png'

export default function Navbar(props) {
    return (
        <>

         <nav className={`px-lg-2 px-xxl-5   py-xxl-2 px-sm-2 px-0 px-md-2 navbar fixed-top navbar-expand-lg navbar-light bg-light `}>
             <div className="container-fluid mx-xxl-3 mx-xl-4">
             <Link className="navbar-brand w-sm-50 w-25 w-md-50 w-lg-25 w-xxl-25 w-xl-25" to="/">               
                   <img src={logo} alt=""   className="logo align-text-top w-100 w-sm-50 w-md-25 "/>                    </Link>
                 <button className="navbar-toggler ml-auto   " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>
                 <div className="collapse navbar-collapse mr-auto justify-content-center justify-content-lg-end" id="navbarSupportedContent">
                     <ul className="navbar-nav  mx-lg-2 mx-xl-auto  mx-lg-auto mx-md-auto mx-0 mx-xxl-auto mb-2 mb-lg-0">
                         <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <Link className="nav-link fw-bolder active text-capitalize" aria-current="page" to="/">Newsletters</Link>
                         </li>
                         <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <Link className="nav-link fw-bolder text-capitalize" to="/about">Blog</Link>
                        </li>

                         <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <Link className="nav-link fw-bolder text-capitalize" to="/About">Contact Us</Link>
                         </li>
                        <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <Link className="nav-link fw-bolder text-capitalize" to="/about">About Us</Link>
                         </li>
                         <li className="nav-item mx-xl-4 mx-xxl-4 mx-lg-0">
                             <Link className="nav-link fw-bolder text-capitalize" to="/#">Advertise With Us</Link>
                         </li>
                     </ul>
                    
               
                     <button type="button" className={`btn secondary  rounded-pill text-white secondary_btn form-check my-sm-1 mx-md-0 my-sm-0 my-xxl-0  form-switch text-${props.mode==='light'?'dark':'light'}`}>Sign in</button>
                    
                   
                     {/* <div className={`form-check  mx-md-0 mx-lg-2  mx-xxl-5 mx-xl-5 form-switch text-${props.mode==='light'?'dark':'light'}`}>
                     <i className="text-white fa-solid fa-lightbulb-on">
                   <input className="form-check-input" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enable the light theme"  onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>   
                   </i>       
                    </div> */}
                 </div>
             </div>
         </nav>



</>


)
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };