import Program from "../../Main/Program/Program";
import "./Courses.css";
import "../../Reusable/Button/Button.css";
import Button from  "../../Reusable/Button/Button.js";
import bulletin from "./bulletin.pdf";
import teachers from "./teachers.pdf";
import syllabus from "./Msc_syllabus.pdf";


const Courses = () => {
    return (
        <>
            <Program/>
            <Download name="Msc Syllabus(Approved by University)" link={syllabus}/>
            <Download name="Teachers appointed" link={teachers}/>
            <Download name="Course Structure" link={bulletin}/>
            
        </>
    );
}

const Download = ({link, name}) => {
    return (
        <>
            <div className="main-courses">
                <h4>{name}</h4>
                <a href={link} className="btn btn_box courses-a" download>Download</a>
            </div>
        </>
    )
}
export default Courses;