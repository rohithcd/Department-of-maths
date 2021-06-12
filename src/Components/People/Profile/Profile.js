import "./Profile.css";
import {Link} from "react-router-dom";
import {profile_pic1} from "../../../Exports.js";


const Profile = () => {
    return(
        <>
            <div className="section_profile">
                <div className="profile_head">
                    <nav className="profile_nav">
                        <Link to="/"><p>Home</p></Link>
                        <Link to="/people"><p>Educational Qualifications</p></Link>
                        <Link to="/people"><p>Memberships</p></Link>
                        <span className="research-link">
                            <label>Research</label>
                            <span className="drop-menu">
                                <ul>
                                    <li>Publications</li>
                                    <li>Projects</li>
                                    <li>pHD guidance</li>
                                    <li>Conferences Organised</li>
                                    <li>invite Talks</li>
                                    <li>Editorial Board Member</li>
                                </ul>
                            </span>
                        </span>
                    </nav>
                    <div className="head_div">
                        <div className="photo_container">
                            <figure className="profile_photo">
                                <img src={profile_pic1} alt=""/>
                            </figure>
                        </div>
                        <div classNme="head_text">
                            <h2>Dr Aparna Lakshmanan</h2>
                            <h5>Asst Professor</h5>
                            <h6>Department of Mathematics</h6>
                            <h6>CUSAT</h6>
                        </div>
                    </div>
                    
                </div>
                <div className="profile_text">

                </div>

            </div>
        </>
    );
}

export default Profile;