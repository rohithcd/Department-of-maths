import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { slide1, slide2, slide3, slide_min1, slide_min2, slide_min3} from "../../../Exports";

import "./Carousel_L.css";

const Carousel_L = () => {
  let img1i;
  let img2i;
  let img3i;

  if (window.innerWidth < 520) 
  {
    img1i = slide_min1;
    img2i = slide_min2;
    img3i = slide_min3;
  } 
  else 
  {
    img1i = slide1;
    img2i = slide2;
    img3i = slide3;
  }

  return (
    <div className="carousal_box">
      <Carousel className="carousal"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={false}
        showThumbs={false}
        dynamicHeight={false}
        showStatus={false}
        interval={3500}
      >
        <div className="cente">
          <img className="imgsize" src={img1i}  alt="" />
          <div className="writing">
            <h1>WELCOME TO DEPT OF MATHEMATICS CUSAT</h1>
            <p>Explore the department of mathematics and know about us! </p>
          </div>
        </div>

        <div>
          <img className="imgsize" src={img2i} alt=""/>
          <div className="writing">
            <h1>Vision</h1>
            <p>
            To develop intellectually rigorous future generation of <br/> students and research scholars by providing exhaustive knowledge in all areas of Mathematical Sciences and to generate logical thinking to solve complex problems
            </p>
          </div>
        </div>

        <div>
          <img className="imgsize" src={img3i}  alt=""/>
          <div className="writing">
            <h1>Mission</h1>
            <p>To impart a quality education in Mathematics and to inculcate the spirit of <br/> research through innovative teaching - research methodologies.</p>
          </div>
        </div>
        
      </Carousel>
    </div>
  );
}

export default Carousel_L;
