import {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import {UserContext} from "../../../Layout";
import {logo_main1, HomeLogo, PeopleLogo, ResearchLogo, AcademicsLogo, ActivitiesLogo, FacilitiesLogo, StudentsLogo} from "../../../Exports";
import logo from "../../../Assets/icons/logo.svg";
import Ham from  "../Ham/Ham";
import Sidebar from  "../Sidebar/Sidebar";
import Dropdown from "../Dropdown/Dropdown";
import {Arrow} from "../../../Exports";
import './Navbar.css';
import "../Ham/Ham.css";

const droplist = {
    people: [
        {name: "Faculty", link: "/people/faculty"},
        {name: "Retired Faculty", link: "/people/retired-faculty"},
        {name: "Research Scholars", link: "/people/research-scholars"},
        {name: "Staff", link: "/people/staff"}
    ],

    research: [
        {name: "Research Areas", link: "/research/ressearch-areas"},
        {name: "Publications", link: "/research/publications"},
        {name: "PhD Awarded", link: "/research/PhD-awarded"},
        {name: "Visitors", link:"/research/visitors"}
    ],

    academics: [
        {name: "Courses", link: "/academics/courses"}
    ],

    students: [
        {name: "Placements", link: "/research/placements"}
    ],

    activities: [
        {name: "Regional Mathematic Olympiad", link: "/activities/reg-math-olympiad"},
        {name: "Scholarship Exams", link: "/research/scholar-exams"},
        {name: "Training Programs", link: "/research/training-programs"},
        {name: "Workshops/Conferences", link: "/research/work-conf"}
    ]
}

// const droplist = [

// ];

// const dropAca = [
//     ,
// ];

// const dropStu = [
//     {name: "Placements", link: "/research/placements"},
// ];

const Navbar = () => {

    const {width, state, breakpoint, menu} = useContext(UserContext); /* Importing values from App Component */
    const [drop, setDrop] = useState({people: false, more: false, research: false, academics: false, activities:false, students: false});


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
                    <MenuList bool={drop.research} bool0={drop.people} bool1={drop.academics} bool2={drop.students} bool3={drop.activities} setter={() => {return null}} hover={setDrop}/>
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

const MenuList = ({func, bool, setter, hover, bool0, bool1, bool2, bool3}) => {
    return(
        <>
            <Link to="/"><li onClick={func}><HomeLogo/>Home</li></Link>
            <Link to="/people" onClick={func}>
                <li id="pointer" className="down-list" onMouseLeave={() => hover({people: false})} onMouseEnter={() => hover({people: true})} onClick={() => {setter({people: !bool})}} style={{flexDirection: bool ? "column" : "row"}}>
                    <span className="side-flex">
                        <PeopleLogo/>People<Arrow pos={bool0 ? "rotate(-180deg)": "rotate(0deg)"}/>
                    </span>
                <Dropdown disp={bool0 ? "block": "none"}>
                    {droplist.people.map((item, index) => {
                        return (
                        <li onClick={func} key={index}>
                            <Link className="dropdown-link" to={item.link}>{item.name}</Link>
                        </li>
                        );
                    })}
                </Dropdown>
                </li>
            </Link>

            <li id="pointer" className="down-list" onMouseLeave={() => hover({research: false})} onMouseEnter={() => hover({research: true})} onClick={() => setter({research: !bool})} style={{flexDirection: bool ? "column" : "row"}}>
                <span className="side-flex">
                    <ResearchLogo/>Research<Arrow pos={bool ? "rotate(-180deg)": "rotate(0deg)"}/>
                </span>
            <Dropdown disp={bool ? "block": "none"}>
                {droplist.research.map((item, index) => {
                    return (
                    <li onClick={func} key={index}>
                        <Link className="dropdown-link" to={item.link}>{item.name}</Link>
                    </li>
                    );
                })}
            </Dropdown>
            </li>

            <li id="pointer" className="down-list" onMouseLeave={() => hover({academics: false})} onMouseEnter={() => hover({academics: true})} onClick={() => setter({academics: !bool1})} style={{flexDirection: bool1 ? "column" : "row"}}>
                <span className="side-flex">
                    <AcademicsLogo/>Academics<Arrow pos={bool1 ? "rotate(-180deg)": "rotate(0deg)"}/>
                </span>
            <Dropdown disp={bool1 ? "block": "none"}>
                {droplist.academics.map((item, index) => {
                    return (
                    <li onClick={func} key={index}>
                        <Link className="dropdown-link" to={item.link}>{item.name}</Link>
                    </li>
                    );
                })}
            </Dropdown>
            </li>
            {/*<Link to="/academics"><li onClick={func}><AcademicsLogo/>Academics</li></Link>*/}
            <Link to="/activities" onClick={func}>
                <li id="pointer" className="down-list" onMouseLeave={() => hover({activities: false})} onMouseEnter={() => hover({activities: true})} onClick={() => setter({activities: !bool3})} style={{flexDirection: bool3 ? "column" : "row"}}>
                    <span className="side-flex">
                        <ActivitiesLogo/>Activities<Arrow pos={bool3 ? "rotate(-180deg)": "rotate(0deg)"}/>
                    </span>
                <Dropdown disp={bool3 ? "block": "none"}>
                    {droplist.activities.map((item, index) => {
                        return (
                        <li onClick={func} key={index}>
                            <Link className="dropdown-link" to={item.link}>{item.name}</Link>
                        </li>
                        );
                    })}
                </Dropdown>
                </li>
            </Link>

            <li id="pointer" className="down-list" onMouseLeave={() => hover({students: false})} onMouseEnter={() => hover({students: true})} onClick={() => setter({students: !bool2})} style={{flexDirection: bool2 ? "column" : "row"}}>
                <span className="side-flex">
                    <StudentsLogo/>Students<Arrow pos={bool2 ? "rotate(-180deg)": "rotate(0deg)"}/>
                </span>
            <Dropdown disp={bool2 ? "block": "none"}>
                {droplist.students.map((item, index) => {
                    return (
                    <li onClick={func} key={index}>
                        <Link className="dropdown-link" to={item.link}>{item.name}</Link>
                    </li>
                    );
                })}
            </Dropdown>
            </li>


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