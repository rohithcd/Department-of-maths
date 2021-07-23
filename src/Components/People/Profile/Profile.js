import "./Profile.css";
import {useRef} from "react";
import {Link} from "react-router-dom";
import {profile_pic1} from "../../../Exports.js";
import {aparna_quali_1, aparna_quali_2, aparna_achieve, aparna_membership, aparna_invited, aparna_articles, aparna_conference,
aparna_teaching, aparna_research, aparna_fund} from "./Details/Aparna.js";

const scroll = (ref) => window.scrollTo({left: 0, top: ref.current.offsetTop, behavior: 'smooth'});   

const Profile = () => {
    const edu_quali = useRef(null);
    const member = useRef(null);
    const publications = useRef(null);
    const projects = useRef(null);
    const phd = useRef(null);
    const conference = useRef(null);
    const talks = useRef(null);
    const board = useRef(null);

    let obj = {
        aparna: [aparna_quali_1, aparna_quali_2, aparna_achieve, aparna_membership, aparna_invited, aparna_articles, aparna_conference, aparna_teaching, aparna_research, aparna_fund]
    }

    let arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [], arr10 = [], arr11 = [], arr12 = [];
    let quali1 = obj.aparna[0], quali2 = obj.aparna[1], achieve = obj.aparna[2], mem = obj.aparna[3], invite = obj.aparna[4], articles = obj.aparna[5], confer = obj.aparna[6],
                teach = obj.aparna[7], research = obj.aparna[8], fund = obj.aparna[9];
    for(let i=0; i<quali1.length; i++)
    {
        arr1.push(<li>{quali1[i]}</li>);
    }

    for(let i=0; i<quali2.length; i++)
    {
        arr2.push(<li>{quali2[i]}</li>);
    }

    for(let i=0; i<achieve.length; i++)
    {
        arr3.push(<li>{achieve[i]}</li>);
    }

    for(let i=0; i<mem.length; i++)
    {
        arr4.push(<li>{mem[i]}</li>);
    }

    for(let i=0; i<invite.length; i++)
    {
        arr5.push(<li>{invite[i]}</li>);
    }

    for(let i=0; i<24; i++)
    {
        arr6.push(<li>{articles[i]}</li>);
    }

    for(let i=24; i<28; i++)
    {
        arr7.push(<li>{articles[i]}</li>);
    }

    for(let i=28; i<29; i++)
    {
        arr8.push(<li>{articles[i]}</li>);
    }

    for(let i=0; i<confer.length; i++)
    {
        arr9.push(<li>{confer[i]}</li>);
    }

    for(let i=0; i<teach.length; i++)
    {
        arr10.push(<li>{teach[i]}</li>);
    }

    for(let i=0; i<research.length; i++)
    {
        arr11.push(<li>{research[i]}</li>);
    }

    for(let i=0; i<fund.length; i++)
    {
        arr12.push(<li>{fund[i]}</li>);
    }

    return(
        <>
            <div className="section_profile">
                <div className="profile_head">
                    <nav className="profile_nav">
                        <Link to="/"><p>Home</p></Link>
                        <p id="pointer" onClick={() => scroll(edu_quali)}>Educational Qualifications</p>
                        <p id="pointer" onClick={() => scroll(member)}>Memberships</p>
                        <span className="research-link">
                            <label>Research</label>
                            <span className="drop-menu">
                                <ul>
                                    <li id="pointer"  onClick={() => scroll(publications)}>Publications</li>
                                    <li id="pointer" onClick={() => scroll(projects)}>Projects</li>
                                    <li id="pointer" onClick={() => scroll(phd)}>PhD guidance</li>
                                    <li id="pointer" onClick={() => scroll(conference)}>Conferences Organised</li>
                                    <li id="pointer" onClick={() => scroll(talks)}>Invited Talks</li>
                                    <li id="pointer" onClick={() => scroll(board)}>Editorial Board Member</li>
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
                            <h5>Assistant Professor</h5>
                            <h6>Department of Mathematics</h6>
                            <h6>CUSAT</h6>
                        </div>
                    </div>
                    
                </div>
                <div className="profile_text">
                   <div className="profile_section-1">
                        <div className="child_sec-1">
                            <h4>RESEARCH PROFILES</h4>
                            <div className="prof_container">
                                <span>
                                    <h5>Publons</h5>
                                    <a href="https://publons.com/dashboard/summary/" className="btn">View</a>
                                </span>
                                <span>
                                    <h5>Scopus</h5>
                                    <a href="https://www.scopus.com/authid/detail.uri?authorId=55310792000" className="btn">View</a>
                                </span>
                                <span>
                                    <h5>Google Scholar</h5>
                                    <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=ApsNUl0AAAAJ&gmla=AJsN-F6tQ-kBuj3lOsmSOUv_C-xsJCMACZWtxGTn50xkesLAOlRzGhDDhihF3DT2UOTdPvV9tvtHsVmW1qFwT5OSFEXfFU6wZ5wEkOjuaHdP6TBWV4rUMXU" className="btn">View</a>
                                </span>
                            </div>
                        </div>

                        <div className="child_sec-2">
                            <h4>BRIEF BIO</h4>
                            <p>Assistant Professor in Department of Mathematics, CUSAT from January, 2021</p>
                        </div>
                   
                        <div className="child_sec-3">
                            <h4>RESEARCH INTERESTS</h4>
                            <p>Algebra, Graph Theory</p>
                        </div>
                    </div>
                    <div ref={edu_quali} className="prof_text_temp">
                        <h2>EDUCATIONAL QUALIFICATIONS</h2>
                        <div>
                            <ol type={"1"}>
                                {arr1}
                                <ul>
                                    {arr2}
                                </ul>
                            </ol>
                        </div>
                    </div>
                    <div className="prof_text_temp">
                        <h2>AWARDS/RECOGNITIONS AND ACHIEVEMENTS</h2>
                        <ol>
                            {arr3}                  
                        </ol>
                    </div>
                    <div ref={member} className="prof_text_temp">
                        <h2>MEMBERSHIPS IN PROFESSIONAL ORGANISATIONS</h2>
                        <ol>
                            {arr4}                      
                        </ol>
                    </div>
                    <div ref={talks} className="prof_text_temp">
                        <h2>INVITED TALKS IN INTERNATIONAL CONFERENCES</h2>
                            <ol>
                                {arr5}
                            </ol>
                    </div>
                    <div ref={publications} className="prof_text_temp">
                        <h2> ARTICLES PUBLISHED IN NATIONAL AND INTERNATIONAL JOURNALS </h2>
                        <h4 className="bullet-h4">International Journals – 24</h4>
                        <ol>
                            {arr6}
                        </ol>
                        <h4 className="bullet-h4">Proceedings of International Conferences – 4</h4>
                        <ol>
                            {arr7}
                        </ol>
                            <h4 className="bullet-h4">National Journals – 1</h4>
                        <ol>
                            {arr8}
                        </ol>
                    </div>
                    <div ref={conference} className="prof_text_temp">
                        <h2>CONFERENCES/ WORKSHOPS/ SYMPOSIA ORGANIZED</h2>
                        <ol>
                            {arr9}
                        </ol>
                    </div>
                    <div className="prof_text_temp">
                        <h2>PROFESSIONAL EXPERIENCE – TEACHING</h2>
                        <ol>
                            {arr10}
                        </ol>
                    </div>

                    <div ref={projects} className="prof_text_temp">
                        <h2>RESEARCH PROJECTS</h2>
                        <ol>
                            {arr11}
                        </ol>
                    </div>

                    <div className="prof_text_temp">
                        <h2>EXTERNAL FUNDED STUDENT PROJECTS</h2>
                        <ol>
                            {arr12}
                        </ol>
                    </div>

                    <div className="prof_text_temp">
                        <h2>OTHER ACADEMIC ACTIVITIES</h2>
                        <ol>
                            <li>Reviewer for</li>
                            <ul>
                                <li>Mathematical Reviews</li>
                                <li>Zentralblatt Math</li>
                                <li>Bulletin of Mathematical Sciences and Applications.</li>
                            </ul>
                            <li>Editorial Board Member for</li>
                            <ul>
                                <li>Contemporary Studies in Discrete Mathematics</li>
                            </ul>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;