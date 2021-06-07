import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {img8, slide1, slide2, slide_min1, slide_min2, slide_min3} from "../../../Exports";

import "./Carousel_L.css";

const Carousel_L = () => {
  let img1i;
  let img2i;
  let img3i;

  if (window.innerWidth < 480) 
  {
    img1i = slide_min1;
    img2i = slide_min2;
    img3i = slide_min3;
  } 
  else 
  {
    img1i = img8;
    img2i = slide2;
    img3i = slide1;
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
            <h1>MORE THAN JUST STUDYING</h1>
            <p>
              Its about widening you knowledge and absorbing the truth about
              life.
            </p>
          </div>
        </div>

        <div>
          <img className="imgsize" src={img3i}  alt=""/>
          <div className="writing">
            <h1>CUSAT</h1>
            <p>Know more about our university </p>
          </div>
        </div>
        
      </Carousel>
    </div>
  );
}

export default Carousel_L;
