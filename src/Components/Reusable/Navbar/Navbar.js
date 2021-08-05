import {useContext} from "react";
import {Link} from 'react-router-dom';
import {UserContext} from "../../../Layout";
import {logo_main1} from "../../../Exports";
import logo from "../../../Assets/icons/logo.svg";
import Ham from  "../Ham/Ham";
import Sidebar from  "../Sidebar/Sidebar";
import './Navbar.css';
import "../Ham/Ham.css";

const Navbar = () => {

    const {width, state, breakpoint, menu} = useContext(UserContext); /* Importing values from App Component */

  return(
    <> 
        <nav className={(state && width < breakpoint) ? "section_navbar lock" : "section_navbar"} >
            <div className="navbar_prime">
                <div className="navbar_title">
                    <img src={logo_main1} className="navbar-image" alt=""/>
                    <div className="nav_head">
                        <img src={logo} alt="logo" />
                    </div>
                </div>    

                <div className="navbar_menu-sec" >
                    <ul>
                        <SecMenu/>
                    </ul>
                </div>

                <Ham/>
            </div>

            <div className="navbar_menu-main">
                <ul>
                    <MenuList/>
                </ul>
            </div> 

            <Sidebar class={(state) ? "side-items" : ""}  style={{display:(state) ? "block" : "none"}}>
                <MenuList func={menu}/>
                <ul>
                    <SecMenu func={menu} id="side_li"/>
                </ul>
            </Sidebar>
        </nav> 
    </>
  ); 
}

const MenuList = ({func}) => {
    return(
        <>
            <Link to="/"><li onClick={func}>Home</li></Link>
            <Link to="/people"><li onClick={func}>People</li></Link>
            <Link to="/research"><li onClick={func}>Research</li></Link>
            <Link to="/academics"><li onClick={func}>Academics</li></Link>
            <Link to="/activities"><li onClick={func}>Activities</li></Link>
            <Link to="/facilities"><li onClick={func}>Facilities</li></Link>
        </>
    );
}

const SecMenu = ({func, id}) => {
    return(
        <>
            <li className={id} onClick={func}><Link to="/gallery">Gallery</Link></li>
            <li className={id} onClick={func}><a href="https://olympiads.hbcse.tifr.res.in/olympiads-2020-21/mathematical-olympiad/" rel="noreferrer" target="_blank">Olympiad</a></li>
            <li className={id} onClick={func}><Link to="/alumni">Alumni</Link></li>
            <li className={id} onClick={func}><Link to="/contact-us">Contact us</Link></li>
        </>
    );
}

export default Navbar;