import {Link} from "react-router-dom";
import Title from "../../Reusable/Title/Title";
import {pub, phd, award, profile, qualifications} from "../../../Exports.js";
import {prof} from "../Profile/Details/Details.js";
import "./Faculty.css";

const scrollToTop = () => {window.scrollTo(0,0)}

function cardfix(start, end) {
    var arr = [];
    const profil = prof;
    for(var i=start; i<end; i++)
    {
        arr.push(
            <Card 
                img={profil[i].pic[0]} name={profil[i].name} rank={profil[i].job} quali={qualifications[i]}
                publications={pub[i]} areaOfInt={profil[i].aoi} stud={phd[i]} award={award[i]}
                prof={profile[i]}
            />
        );
    }

    return arr;
}

const Faculty = () => {
    let professor = cardfix(0, 3);
    let associate_prof = cardfix(3, 4);
    let asst_professor = cardfix(4, prof.length);

    return (
        <>
            <div className="section_people">
                <Title head="Faculty"/>
                <div className="section_faculty">
                    <h2>Professor</h2>
                    <div className="faculty_grid">
                        {professor}
                    </div>
                    <h2>Associate Professor</h2>
                    <div className="faculty_grid">
                        {associate_prof}
                    </div>
                    <h2>Assistant Professor</h2>
                    <div className="faculty_grid">
                        {asst_professor}
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

