import {about} from "../../../Exports";
import Contact from "../Contact/Contact";
import "./About.css";

const About = () => {

    let arr = [];

    for(let i=0; i<about.length; i++)
    {
        arr.push(<p>{about[i]}</p>);
    }
    
    return (
        <>
            <div className="section_about">
                <div className="about_main">
                    <div className="about_text">
                        <div className="about_head">
                            <h2>About</h2>
                        </div>
                        {arr}
                    </div>
                    <Contact/>
                </div>
            </div>
        </>
    );
}

export default About;