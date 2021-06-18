import {Link} from "react-router-dom";
import "./Gallery_main.css";
import {slide2} from "../../Exports";

const Gallery_main = () => {
    return(
        <>
                <div className="gallery-main_bg">
                    <h1>Gallery</h1>
                </div>
            <div className="section_gallery-main">
                <Link to="/gallery/campus">
                    <div className="gallery-main_card">
                        <img src={slide2} alt=""/>
                        <h3>CAMPUS</h3>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Gallery_main