import {useRef, useContext} from "react";
import {UserContext} from "../../../Layout";
import {Link} from "react-router-dom";
import Ham from  "../../Reusable/Ham/Ham";
import Sidebar from  "../../Reusable/Sidebar/Sidebar";
import Button from "../../Reusable/Button/Button";
import "./Template.css";

const scroll = (ref) => window.scrollTo({left: 0, top: ref.current.offsetTop, behavior: 'smooth'});
    
function object(prop) 
    {
        let arr = [], arr2 = [];
        for(let i=0; i<prop.length; i++)
        {
            if(prop[i] !== 0)
            {
                arr.push(<li>{prop[i]}</li>);
            }
    
            if(prop[i] === 0)
            {
                let j = i+1;
                while(prop[j] !== -1)
                {
                    arr2.push(<li>{prop[j]}</li>);
                    j++;
                }
                arr.push(<ul>{arr2}</ul>)
                i=j+1;
            }
        }
        return arr;
    }

const Template = (props) => {
    const details = props.obj; /*Array passed from Parant - Profile */
    const texts = props.dat;
    
    const {menu} = useContext(UserContext);

    const edu_quali = useRef(null), member = useRef(null), publications = useRef(null), projects = useRef(null);
    const phd = useRef(null), conference = useRef(null), talks = useRef(null), board = useRef(null);

    let arr1 = object(texts.edu), arr2 = object(texts.mem), arr3 = object(texts.talks),
    arr4 = object(texts.conf), arr5 = object(texts.proj);
            


    let refer = ["Publon", "Scopus", "Google Scholar"];
    let arr14 = [];
    for(let i=0; i<3; i++)
    {
        if(texts.links[i] == null)
            continue;
        else
            arr14.push(<Links head={refer[i]} anchor={texts.links[i]}/>);
    }

    return(
        <>
            <div className="section_profile">
                <div className="profile_head">
                    <nav className="profile_nav">
                        <Link to="/"><p>Home</p></Link>
                        <p id="pointer" onClick={() => scroll(edu_quali)}>Educational Qualifications</p>
                        <p id="pointer" onClick={() => scroll(member)}>Membership</p>
                        <span className="research-link">
                            <label>Research</label>
                            <span className="drop-menu">
                                <ul>
                                    <li id="pointer" onClick={() => scroll(publications)}>Publications</li>
                                    <li id="pointer" onClick={() => scroll(projects)}>Projects</li>
                                    <li id="pointer" onClick={() => scroll(phd)}>PhD guidance</li>
                                    <li id="pointer" onClick={() => scroll(conference)}>Conferences Organised</li>
                                    <li id="pointer" onClick={() => scroll(talks)}>Invited Talks</li>
                                    <li id="pointer" onClick={() => scroll(board)}>Editorial Board Member</li>
                                </ul>
                            </span>
                        </span>

                    </nav>
                    <div className="ham_box">
                        <Ham/>
                    </div>
                   
                    <div className="head_div">
                   
                        <div className="photo_container">
                            <figure className="profile_photo">
                                <img src={details.pic[1] || details.pic[0]} alt=""/>
                            </figure>
                        </div>
                        <div className="head_text">
                            <h2>{details.name}</h2>
                            <h5>{details.job}</h5>
                            <p>Department of Mathematics</p>
                            <p>CUSAT</p>
                        </div>

                        
                    </div>
                    <a href={details.doc} download><Button type="oval" class="btn-prof" name="Download CV"/></a>
                    
                </div>
                <div className="profile_text">
                    <div className="profile_section-1">
                        <div className="child_sec-1">
                            <h4>RESEARCH PROFILES</h4>
                            <div className="prof_container">
                                {arr14}
                            </div>
                        </div>

                        <div className="child_sec-2">
                            <h4>BRIEF BIO</h4>
                            <p>{details.bio}</p>
                        </div>

                        <Sidebar class="">
                            <Link to="/" onClick={menu}><li>Home</li></Link>
                            <li id="pointer" onClick={() => {scroll(edu_quali); menu();}}>Educational Qualifications</li>
                            <li id="pointer" onClick={() => {scroll(member); menu();}}>Membership</li>
                            <li>Research</li>
                        </Sidebar>
                   
                        <div className="child_sec-3">
                            <h4>RESEARCH INTERESTS</h4>
                            <p>{details.aoi}</p>
                        </div>
                    </div>
                    <Section refer={edu_quali} head={"EDUCATIONAL QUALIFICATIONS"} arr={arr1}/>
                    <Section refer={member} head={"MEMBERSHIPS IN PROFESSIONAL ORGANISATIONS"} arr={arr2}/>
                    <Section  head={"AWARDS/RECOGNITIONS AND ACHIEVEMENTS"} />
                    <Section refer={talks} head={"INVITED TALKS IN INTERNATIONAL CONFERENCES"} arr={arr3}/>

                    <div ref={publications} className="prof_text_temp">
                        <h2> ARTICLES PUBLISHED IN NATIONAL AND INTERNATIONAL JOURNALS </h2>
                        <h4 className="bullet-h4">International Journals – 24</h4>
                        <ol>
                            {}
                        </ol>
                        <h4 className="bullet-h4">Proceedings of International Conferences – 4</h4>
                        <ol>
                            {}
                        </ol>
                            <h4 className="bullet-h4">National Journals – 1</h4>
                        <ol>
                            {}
                        </ol>
                    </div>
                    
                    <Section refer={conference} head={"CONFERENCES/ WORKSHOPS/ SYMPOSIA ORGANIZED"} arr={arr4}/>
                    <Section  head={"PROFESSIONAL EXPERIENCE – TEACHING"} />
                    <Section refer={projects} head={"RESEARCH PROJECTS"} arr={arr5}/>
                    <Section  head={"EXTERNAL FUNDED STUDENT PROJECTS"} />
                </div>
            </div>
        </>
    );
}

export default Template;


const Section = ({arr, refer, head}) => {
    return(
        <div  ref={refer} className="prof_text_temp">
            <h2>{head}</h2>
            <div>
                <ol>
                    {arr}
                </ol>
            </div>
        </div>
    );
}

/*const Sec = (props) => {
    return(
        <div ref={props.refer} className="prof_text_temp">
            <h2>{props.head}</h2>
            <ol>
                {props.children}
            </ol>
        </div>
    );
} */

const Links = (props) => {
    return(
        <>
            <span>
                <h5>{props.head}</h5>
                <a href={props.anchor} className="btn btn_box">View</a>
            </span>
        </>
    );
}