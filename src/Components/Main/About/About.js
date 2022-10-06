import {about} from "../../../Exports";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Heading from "../../Reusable/Head/Heading.js";
import "./About.css";

const About = () => {

    let arr = [];

    for(let i=0; i<about.length; i++) { arr.push(<p>{about[i]}</p>); }
    
    return (
        <>
            <section id="main-about">
                <Heading name="About" />
                <div className="text">
                    {arr}
                </div>
            </section>
        </>
    );
}

export default About;