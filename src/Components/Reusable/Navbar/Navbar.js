import {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import {UserContext} from "../../../Layout";
import {logo_main1, HomeLogo, PeopleLogo, ResearchLogo, AcademicsLogo, ActivitiesLogo, FacilitiesLogo} from "../../../Exports";
import logo from "../../../Assets/icons/logo.svg";
import Ham from  "../Ham/Ham";
import Sidebar from  "../Sidebar/Sidebar";
import Dropdown from "../Dropdown/Dropdown";
import {Arrow} from "../../../Exports";
import './Navbar.css';
import "../Ham/Ham.css";

const droplist = [
    {name: "PhD Awarded", link: "/phd-awarded"},
    {name: "Placements", link: "/placements"}
];

const Navbar = () => {

    const {width, state, breakpoint, menu} = useContext(UserContext); /* Importing values from App Component */
    const [drop, setDrop] = useState({more: false, research: false});


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
                    <MenuList bool={drop.research} setter={() => {return null}} hover={setDrop}/>
                </ul>
            </div> 

            <Sidebar class={(state) ? "side-items" : ""}  style={{display:(state) ? "block" : "none"}}>
                <MenuList func={menu} bool={drop.research} setter={setDrop} hover={() => {return null}}/>
                <li id="pointer" onClick={() => setDrop({more: !drop.more})}><FacilitiesLogo/>More<Arrow pos={drop.more ? "rotate(-180deg)": "rotate(0deg)"}/></li>
                <Dropdown disp={drop.more ? "block": "none"}>
                    <SecMenu func={menu} id="side_li"/>
                </Dropdown>
            </Sidebar>
        </nav> 
    </>
  ); 
}

const MenuList = ({func, bool, setter, hover}) => {
    return(
        <>
            <Link to="/"><li onClick={func}><HomeLogo/>Home</li></Link>
            <Link to="/people"><li onClick={func}><PeopleLogo/>People</li></Link>
            <li id="pointer" className="down-list" onMouseLeave={() => hover({research: false})} onMouseEnter={() => hover({research: true})} onClick={() => setter({research: !bool})} style={{flexDirection: bool ? "column" : "row"}}>
                <span className="side-flex">
                    <ResearchLogo/>Research<Arrow pos={bool ? "rotate(-180deg)": "rotate(0deg)"}/>
                </span>
            <Dropdown disp={bool ? "block": "none"}>
                {droplist.map((item, index) => {
                    return (
                    <li key={index}>
                        <Link className="dropdown-link" to={item.link}>{item.name}</Link>
                    </li>
                    );
                })}
            </Dropdown>
            </li>
            <Link to="/academics"><li onClick={func}><AcademicsLogo/>Academics</li></Link>
            <Link to="/activities"><li onClick={func}><ActivitiesLogo/>Activities</li></Link>
            <Link to="/facilities"><li onClick={func}><FacilitiesLogo/>Facilities</li></Link>
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