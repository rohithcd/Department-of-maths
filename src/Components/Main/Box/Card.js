import React from "react";
import {Link} from "react-router-dom";
import "./Card.css";

export default function Card(info) {
  return (
    
    <div className="card">
      <Link to={info.link}>
        <img className="img" src={info.img} alt=""/>
        <p className="h41">{info.head}</p>
        <p className="p1">{info.para}</p>
      </Link>
    </div>
  );
}
