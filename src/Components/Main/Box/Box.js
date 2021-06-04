import React from "react";
import Card from "./Card";
import {b_img1, b_img2, b_img3, b_img4} from "../../../Exports";
import "./Box.css";

const Box = () => {
  return (
    <div className="section_box">
      <h2>News & Events</h2>
      <hr/>
      <div className="boxes">
        <Card head="Department" img={b_img1} para={""} />
        <Card head="Courses" img={b_img2} para={""} />
        <Card head="Areas Of Research" img={b_img3} para={""} />
        <Card head="Out Reach" img={b_img4} para={""} />
      </div>
    </div>
  );
}

export default Box;
