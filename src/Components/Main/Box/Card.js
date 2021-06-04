import React from "react";
import "./Card.css";

export default function Card(info) {
  return (
    <div className="card">
      <img className="img" src={info.img} />
      <p className="h41">{info.head}</p>
      <p className="p1">{info.para}</p>
    </div>
  );
}
