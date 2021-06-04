import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return(
    <>
      <nav className="section_navbar">
       
        <div className="navbar_prime">
          <div className="navbar_title">
            <h2>Department of</h2>
            <h1>Mathematics</h1>
          </div>    

          <div className="navbar_menu-sec">
            <ul>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/olympiad">Olympiad</Link></li>
              <li><Link to="/alumni">Alumni</Link></li>
              <li><Link to="/contact-us">Contact us</Link></li>
    
            </ul>
          </div>
        </div>

       <div className="navbar_menu-main">
          <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/people"><li>People</li></Link>
          <Link to="/research"><li>Research</li></Link>
          <Link to="/academics"><li>Academics</li></Link>
          <Link to="/activities"><li>Activities</li></Link>
          <Link to="/facilities"><li>Facilities</li></Link>
          </ul>
  </div> 
      </nav>
    </>
  );
}

export default Navbar;