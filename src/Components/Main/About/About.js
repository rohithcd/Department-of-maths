import {about} from "../../../Exports";
import {useEffect} from "react";
import "./About.css";
import Contact from "../Contact/Contact";
import Banner from "../Banner/Banner";


function scrollTo()
{
    window.scrollTo({
        top: 370,
        left: 0,
        behavior: 'smooth'
    })
}

const About = () => {

    useEffect(() => {
        console.log(Banner.banRef)
    }, []);
    let arr = [];

    for(let i=0; i<about.length; i++)
    {
        arr.push(<p>{about[i]}</p>);
    }
    
    return(
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
            <button className="btn about-btn" onClick={scrollTo}>Read More</button>
            
        </div>
        
        </>
    );
}

export default About;