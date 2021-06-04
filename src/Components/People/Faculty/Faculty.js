import "./Faculty.css";
import {p_img1, p_img2, p_img3, p_img4, p_img5, p_img6, p_img7, p_img8, p_img9, p_img10, p_img11,
     names, ranks, qualifications, areaOfInterest, pub, phd, award} from "../../../Exports.js";

let pics = [p_img1, p_img2, p_img3, p_img4, p_img5, p_img6, p_img7, p_img8, p_img9, p_img10, p_img11];


const Faculty = () => {
    var arr = [];
    for(var i=0; i<11; i++)
    {
        arr.push(
            <Card 
                img={pics[i]} name={names[i]} rank={ranks[i]} quali={qualifications[i]}
                publications={pub[i]} areaOfInt={areaOfInterest[i]} stud={phd[i]} award={award[i]}
            />
        );
    }
    return (
        <>
            <div className="section_faculty">
                <h1>Faculty</h1>
                <div className="faculty_grid">
                    {arr}
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
                <h4>{props.name}</h4>
                <p>{props.rank}</p>
                <p>Academic Qualifications: {props.quali}</p>
                <p>Publications: {props.publications}</p>
                <p>{props.stud}</p>
                <p>{props.award}</p>
            </div>
            <div id="last-div">
                <p>Area of Interest:{props.areaOfInt}</p>
                
            </div>
        </div>
    );
}

export default Faculty;