import {Link} from "react-router-dom";
import Title from "../../Reusable/Title/Title";
import {pub, phd, award, profile, qualifications} from "../../../Exports.js";
import {prof} from "../Profile/Details/Details.js";
import "./Faculty.css";

const scrollToTop = () => {window.scrollTo(0,0)}

const Faculty = () => {
    var arr = [];
    const profil = prof;
    for(var i=0; i<profil.length; i++)
    {
        arr.push(
            <Card 
                img={profil[i].pic[0]} name={profil[i].name} rank={profil[i].job} quali={qualifications[i]}
                publications={pub[i]} areaOfInt={profil[i].aoi} stud={phd[i]} award={award[i]}
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
                <p id="hide-para">Academic Qualifications:{props.quali}</p>
                <p id="hide-para">Publications:{props.publications}</p>
                <p id="hide-para">{props.stud}</p>
                <p id="hide-para">{props.award}</p>
            </div>
            <div id="last-div">
                <p id="hide-para">Area of Interest: {props.areaOfInt}</p> 
            </div>

            <Link to={props.prof} onClick={scrollToTop}>
                <button className="btn-oval">View Profile</button>
            </Link>
        </div>
    );
}

export default Faculty;

