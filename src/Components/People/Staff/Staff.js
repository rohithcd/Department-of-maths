import {Link} from "react-router-dom";
import Title from "../../Reusable/Title/Title";
import {staffs} from "../Profile/Details/Details.js";

const scrollToTop = () => {window.scrollTo(0,0)}

const Staff = () => {
    return (
        <>
            <div className="section_people">
                <Title head="Faculty"/>
                <div className="section_faculty">
                    <h2 className="main-head faculty-h2">Staffs</h2>
                    <div className="faculty_grid">
                        {staffs.map((staff) => {
                            return <Card img={staff.pic} name={staff.name} desig={staff.desig}/>    
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

const Card = (props) => {
    return(
        <div className="faculty_card">
            <img src={props.img} alt="Professor"/>
            <div>
                <h3>{props.name}</h3>
                <p>{props.desig}</p>
                {/* <p id="hide-para">Academic Qualifications:{props.quali}</p>
                <p id="hide-para">Publications:{props.publications}</p> */}
                {/* <p id="hide-para">{props.stud}</p>
                <p id="hide-para">{props.award}</p> */}
            </div>
            <div id="last-div">
                {/* <p id="hide-para">Area of Interest: {props.areaOfInt}</p>  */}
            </div>

            {/* <Link to={props.prof} onClick={scrollToTop}>
                <button className="btn-oval">View Profile</button>
            </Link> */}
        </div>
    );
}

export default Staff;