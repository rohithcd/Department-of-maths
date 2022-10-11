import {Link} from "react-router-dom";
import Title from "../../Reusable/Title/Title";

/*---- Importing Pictures of Staff (For Staff.js) ----*/
import bindu_pic from "../../../Assets/people/staff/bindu.jpg";
import sheeba_pic from "../../../Assets/people/staff/sheeba.jpg";
import sony_pic from "../../../Assets/people/staff/sony.jpg";
import udayakumar_pic from "../../../Assets/people/staff/udayakumar.jpg";
import abhilash_pic from "../../../Assets/people/staff/abhilash.jpg";

/*---- Staff List ----*/
let staffs = [
    {name: "Sheeba VK", pic: sheeba_pic, desig: "Section Officer"},
    {name: "Dr. Abhilash R", pic: abhilash_pic, desig: "Junior Librarian"},
    {name: "Bindu M C", pic: bindu_pic, desig: "Assistant"},
    {name: "Sony C V", pic: sony_pic, desig: "Computer Assistant"},
    {name: "Udayakumar K G", pic: udayakumar_pic, desig: "Office Attendant"}
];

const Staff = () => {
    return (
        <>
            <div className="section_people">
                <Title head="STAFFS"/>
                <div className="section_faculty">
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
            <img src={props.img} alt="Image"/>
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