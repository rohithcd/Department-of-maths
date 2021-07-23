import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/icons/logo.svg";
import "./Footer.css";

const scrollToTop = () => 
{
    window.scrollTo(0,0)
}


export default function footer() {
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
                Home
              </Link>
              <Link to="/" className="item_f1">
                People
              </Link>
              <Link to="/" className="item_f1">
                Research
              </Link>
              <Link to="/people" onClick={scrollToTop} className="item_f1">
                Academics
              </Link>
              <Link to="/people" onClick={scrollToTop} className="item_f1">
                Activities
              </Link>
              <Link to="/people" onClick={scrollToTop} className="item_f1">
                Facilities
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
              <Link to="/facilities" onClick={scrollToTop} className="item_f2">
                Facilities
              </Link>
              <Link to="/alumni" onClick={scrollToTop} className="item_f2">
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
