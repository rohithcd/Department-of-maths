import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/icons/logo.svg";
import "./Footer.css";


export default function footer() {
  function check() {}
  return (
    <div>
      <div className="blue">
        <div className="container_f">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="vox_f">
            <div className="hox_f1">
              <Link to="/" className="item_f1">
                Department
              </Link>
              <Link to="/" className="item_f1">
                Research
              </Link>
              <Link to="/" className="item_f1">
                Olympiad
              </Link>
              <Link to="/" className="item_f1">
                People
              </Link>
            </div>

            <div className="hox_f1">
              <Link to="/" className="item_f2">
                News
              </Link>
              <Link to="/" className="item_f2">
                Library
              </Link>
              <Link to="/" className="item_f2">
                Faculty
              </Link>
              <Link to="/" className="item_f2">
                Facilities
              </Link>
              <Link to="/" className="item_f2">
                Alumni
              </Link>
            </div>
          </div>
        </div>
        <p className="copyright">
          Copyright © 2020 Department Of Mathematics. All rights reserved.
        </p>
      </div>
    </div>
  );
}
