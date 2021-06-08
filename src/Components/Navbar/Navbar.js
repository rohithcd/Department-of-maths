import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';
import {logo_main1} from "../../Exports";
import logo from "../../Assets/icons/logo.svg";


const Navbar = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 980;
  const [value, setValue] = useState({isActive: false});
  function menu()
  {
      if(value.isActive === false)
      {
          setValue({isActive: true});
      }
      else
      {
        setValue({isActive: false});
      }
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);


  return(
    <> 
      <nav className={(value.isActive && width < breakpoint) ? "section_navbar lock" : "section_navbar"} >
        <div className="navbar_prime">
          <div className="navbar_title">
            <img src={logo_main1} className="navbar-image" alt=""/>
            <div className="nav_head">
              <img src={logo} alt="logo" />
            </div>
          </div>    

          <div className="navbar_menu-sec" >
            <ul>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/olympiad">Olympiad</Link></li>
              <li><Link to="/alumni">Alumni</Link></li>
              <li><Link to="/contact-us">Contact us</Link></li>
            </ul>
          </div>

          <div className="ham_container common" onClick={menu}>
            <span className={(value.isActive && width < breakpoint) ? "cross common" : "ham common" }>&nbsp;</span>
          </div>
        </div>

       <div className="navbar_menu-main">
          <ul>
            <Link to="/"><li >Home</li></Link>
            <Link to="/people"><li >People</li></Link>
            <Link to="/research"><li >Research</li></Link>
            <Link to="/academics"><li >Academics</li></Link>
            <Link to="/activities"><li >Activities</li></Link>
            <Link to="/facilities"><li >Facilities</li></Link>
          </ul>
        </div> 

          <div className="navbar_menu-side"  style={{display:(value.isActive) ? "block" : "none"}}>
            <ul className={(value.isActive) ? "nav_side-items" : ""}>
              <Link to="/"><li onClick={menu}>Home</li></Link>
              <Link to="/people"><li onClick={menu}>People</li></Link>
              <Link to="/research"><li onClick={menu}>Research</li></Link>
              <Link to="/academics"><li onClick={menu}>Academics</li></Link>
              <Link to="/activities"><li onClick={menu}>Activities</li></Link>
              <Link to="/facilities"><li onClick={menu}>Facilities</li></Link>
            </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;