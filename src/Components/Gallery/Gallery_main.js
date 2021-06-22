import "./Gallery_main.css";
import {slide2} from "../../Exports";
import Card from "../Reusable/Card/Card";

const Gallery_main = () => {
    return(
        <>
               <div className="gallery-main_bg">
                    <h1>Gallery</h1>
                </div>
                
           
            <div className="section_gallery-main">
            <Card pic={slide2} head={"CAMPUS"} link="/gallery/campus"/>
            <Card pic={slide2} head={"FACULTY"} link="/gallery/faculties"/>
    </div> 
        </>
    );
}

export default Gallery_main