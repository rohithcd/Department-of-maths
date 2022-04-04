import "./Courses.css";
import "../../Reusable/Button/Button.css";
import Button from  "../../Reusable/Button/Button.js";
import bulletin from "./bulletin.pdf";
import teachers from "./teachers.pdf";
import syllabus from "./Msc_syllabus.pdf";
import Table from "../../Reusable/Table/Table.js";


const Courses = () => {
    return (
        <>
            <div className="table_programs">
                <h2>Programs</h2>
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

