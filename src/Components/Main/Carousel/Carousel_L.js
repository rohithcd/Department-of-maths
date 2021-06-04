import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {slide1, slide2, slide3, slide_min1, slide_min2, slide_min3} from "../../../Exports";

import "./Carousel_L.css";

export default function Carousel_L() {
  var img1i;
  var img2i;
  var img3i;
  if (window.innerWidth < 480) {
    img1i = slide_min1;
    img2i = slide_min2;
    img3i = slide_min3;
  } else {
    img1i = slide1;
    img2i = slide2;
    img3i = slide3;
  }

  return (
    <div className="carousal_box">
      <Carousel
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
        stopOnHover={true}
        showThumbs={false}
        dynamicHeight={true}
        showStatus={false}
      >
        <div className="cente">
          <img className="imgsize" src={img1i} />
          <div className="writing">
            <h1>WELCOME TO MATHS DEPARTMENT CUSAT</h1>
            <p>Explore the Maths department and know about us! </p>
          </div>
        </div>
        <div>
          <img className="imgsize" src={img2i} />
          <div className="writing">
            <h1>MORE THAN JUST STUDYING</h1>
            <p>
              Its about widening you knowledge and absorbing the truth about
              life.
            </p>
          </div>
        </div>
        <div>
          <img className="imgsize" src={img3i} />
          <div className="writing">
            <h1>CUSAT</h1>
            <p>Know more about our university </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
