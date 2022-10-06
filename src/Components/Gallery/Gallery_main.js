import "./Gallery_main.css";
import {slide2} from "../../Exports";
import Card from "../Reusable/Card/Card";
import Title from "../Reusable/Title/Title";

//Importing Olympiad Images

const Gallery_main = () => {
    return(
        <>
            <Title head="Gallery"/> 
            <div className="section_gallery-main">
                <Card pic={slide2} head={"CAMPUS"} link="/gallery/campus"/>
                <Card pic={slide2} head={"OLYMPIAD"} link="/gallery/olympiad"/>
                <Card pic={slide2} head={"EVENTS"} link="/gallery/events"/>
            </div> 
        </>
    );
}

export default Gallery_main