import Title from "../../Reusable/Title/Title";
import intMsc from "../../../Assets/academics/timetable/Syllabus-IntMSc.pdf";
import MSc_sem1 from "../../../Assets/academics/timetable/Syllabus-MSc_sem1.pdf";
import MSc_sem2 from "../../../Assets/academics/timetable/Syllabus-MSc_sem2.pdf";

const Timetable = () => {
    return (
        <>
            {/* <Title head="Timetable" /> */}
            <Download name="Integrated MSc - Semester 1 (2022 - 24 batch)" link={MSc_sem1}/>
            <Download name="Integrated MSc - Semester 2 (2022)" link={MSc_sem2}/>
            <Download name="Integrated MSc - Semester 5 (2022)" link={intMsc}/>
        </>
    );
}

export default Timetable;


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