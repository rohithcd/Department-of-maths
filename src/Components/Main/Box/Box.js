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
        <Card head="Department" img={b_img1} para={""} link={""} />
        <Card head="Courses" img={b_img2} para={""} link={""}  />
        <Card head="Future Events" img={b_img3} para={""} link={""} />
        <Card head="Out Reach" img={b_img4} para={""} link={"/outreach"}  />
        </div>
      </div>
    );
  }

  export default Box;
