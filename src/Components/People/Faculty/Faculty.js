import "./Faculty.css";
import {Link} from "react-router-dom";
import Title from "../../Reusable/Title/Title";
import {p_img1, p_img2, p_img3, p_img4, p_img5, p_img6, p_img7, p_img8, p_img9, p_img10, p_img11,
     names, ranks, qualifications, areaOfInterest, pub, phd, award, profile} from "../../../Exports.js";

let pics = [p_img1, p_img2, p_img3, p_img4, p_img5, p_img6, p_img7, p_img8, p_img9, p_img10, p_img11];
const scrollToTop = () => {
    window.scrollTo(0,0)
}

const Faculty = () => {
    var arr = [];
    for(var i=0; i<pics.length; i++)
    {
        arr.push(
            <Card 
                img={pics[i]} name={names[i]} rank={ranks[i]} quali={qualifications[i]}
                publications={pub[i]} areaOfInt={areaOfInterest[i]} stud={phd[i]} award={award[i]}
                prof={profile[i]}
            />
        );
    }
    return (
        <>
        <div className="section_people">
            <Title head="Faculty"/>
            <div className="section_faculty">
                <div className="faculty_grid">
                    {arr}
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
                <p>{props.rank}</p>
                <p id="hide-para">Academic Qualifications: {props.quali}</p>
                <p id="hide-para">Publications: {props.publications}</p>
                <p id="hide-para">{props.stud}</p>
                <p id="hide-para">{props.award}</p>
            </div>
            <div id="last-div">
                <p id="hide-para">Area of Interest: {props.areaOfInt}</p>
                
            </div>
            <Link to={props.prof} onClick={scrollToTop}>
                <button className="btn-oval">
                    View Profile
                </button>
            </Link>
        </div>
    );
}

export default Faculty;

