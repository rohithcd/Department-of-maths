import "./Courses.css";
import "../../Reusable/Button/Button.css";
import Button from  "../../Reusable/Button/Button.js";
import bulletin from "./bulletin.pdf";
import teachers from "./teachers.pdf";
import syllabus from "./Msc_syllabus.pdf";
import imsc from "./Imsc_syllabus.pdf";
import bulletin_20_21 from "./bulletin_20_21.pdf";
import po from "./program-outcomes.pdf"

import Heading from "../../Reusable/Head/Heading";

const Courses = () => {
    return (
        <>
            <section id="section-courses">
            <div className="table_programs">
                <Heading name="Programs"/>
                <table className="content-table">
                    <thead>
                        <tr>
                            <td>Name of Programs</td>
                            <td>Syllabus revision</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Integrated M.Sc</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>M.Sc. in Mathematics</td>
                            <td>1. 2012 Admission onwards*  <br/> 2. 2016 Admission onwards <br/>3. 2020 Admission <br/> 4. 2021 Admission onwards</td>
                        </tr>
                        <tr>
                            <td>Ph.D. in Mathematics</td>
                        </tr>
                        <tr>
                            <td>M.Phil in Mathematics</td>
                            <td>Discontinued from 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <Download name="Program Outcomes" link={po}/>
            <Download name="Imsc Syllabus (Approved by University)" link={imsc}/>
            <Download name="Msc Syllabus (Approved by University)" link={syllabus}/>
            <Download name="UGC Regulation for Appointment of Teachers" link={teachers}/>
            <Download name="Course Structure" link={bulletin}/>
            <Download name="Academic Bulletin 2020 - 2021" link={bulletin_20_21}/>
            
            </section>
        </>
    );
}

const Download = ({link, name}) => {
    return (
        <>
            <div className="main-courses">
                <h4>{name}</h4>
                <a href={link} className="btn-custom btn_box courses-a" download>Download</a>
            </div>
        </>
    )
}
export default Courses;

