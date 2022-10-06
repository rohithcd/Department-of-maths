import {bg_pro} from "../../../Exports";
import "./Program.css";
import {Link} from "react-router-dom";
import Heading from "../../Reusable/Head/Heading.js";

const Program = () => {
    return(
        <>
            <section className="section_program">
                <Heading name="Programs Offered" />
                <div className="program_box">
                    <div className="program_text">
                        <ul className="program_list">
                            <li><h3 className="list_head"><Link to="/academics/courses">Integrated M.Sc</Link></h3></li>
                            <li><h3 className="list_head"><Link to="/academics/courses">M.Sc. in Mathematics</Link></h3></li>
                            <li><h3 className="list_head">Ph.D. in Mathematics</h3></li>
                            <li><h3 className="list_head">M.Phil in Mathematics</h3></li>
                        </ul>
                    </div>
                    <div className="program_image">
                        <img src={bg_pro} alt=""/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Program;