import { Link } from "react-router-dom";
import logo from "../../../Assets/icons/logo.svg";
import "./Footer.css";

const scrollToTop = () => {window.scrollTo(0,0)}

const Footer = () => {
    return (
        <>
            <div className="section_footer">
                <div className="container_f">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="vox_f">
                    <div className="hox_f1">
                        <Link to="/" onClick={scrollToTop} className="item_f1" id="pointer">Home</Link>
                        <Link to="/people/faculty" onClick={scrollToTop} className="item_f1" id="pointer">People</Link>
                        <Link to="/research" onClick={scrollToTop} className="item_f1" id="pointer">Research</Link>
                        <Link to="/people" onClick={scrollToTop} className="item_f1" id="pointer">Academics</Link>
                        <Link to="/activities/courses" onClick={scrollToTop} className="item_f1" id="pointer">Activities</Link>
                        <Link to="/facilities" onClick={scrollToTop} className="item_f1" id="pointer">Facilities</Link>
                    </div>

                    <div className="hox_f1 f2">
                        <Link to="/gallery" onClick={scrollToTop} className="item_f2" id="pointer">Gallery</Link>
                        <Link to="/" className="item_f2" id="pointer">Olympiad</Link>
                        <Link to="/alumni" onClick={scrollToTop} className="item_f2" id="pointer">Alumni</Link>
                        <Link to="/contact-us" onClick={scrollToTop} className="item_f2" id="pointer">Contact-us</Link>
                    </div>
                </div>
                </div>
                <p className="copyright">Copyright &copy; 2022 Department Of Mathematics. All rights reserved.</p>
            </div>
        </>

    );
}

export default Footer;