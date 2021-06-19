import {bg_pro} from "../../../Exports";
import "./Program.css";


const Program = () => {
    return(
        <>
            <div className="section_program">
                <h2>Programs Offered</h2>
                <div className="program_box">
                    <div className="program_text">
                        <ul className="program_list">
                            <li><h3 className="list_head">Integrated M.Sc</h3></li>
                            <li><h3 className="list_head">M.Sc. in Mathematics</h3></li>
                            <li><h3 className="list_head">Ph.D. in Mathematics</h3></li>
                            <li><h3 className="list_head">M.Phil in Mathematics</h3></li>
                        </ul>
                    </div>
                    <div className="program_image">
                        <img src={bg_pro} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Program;