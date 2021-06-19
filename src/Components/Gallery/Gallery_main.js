import {Link} from "react-router-dom";
import "./Gallery_main.css";
import {slide2} from "../../Exports";
import Card from "../Card/Card";

const Gallery_main = () => {
    return(
        <>
               <div className="gallery-main_bg">
                    <h1>Gallery</h1>
                </div>
                
           
            <div className="section_gallery-main">
            <Card pic={slide2} head={"CAMPUS"}/>
                {/* 
                <Link to="/gallery/campus">
                    <div className="gallery-main_card">
                        <img src={slide2} alt=""/>
                        <h3>CAMPUS</h3>
                    </div>
                </Link> */}
    </div> 
        </>
    );
}

export default Gallery_main