import {useRef, useContext, useState} from "react";
import {UserContext} from "../../../Layout";
import {Link} from "react-router-dom";
import Ham from  "../../Reusable/Ham/Ham";
import Sidebar from  "../../Reusable/Sidebar/Sidebar";
import Button from "../../Reusable/Button/Button";
import Table from "../../Reusable/Table/Table";
import "./Template.css";

const scroll = (ref) => window.scrollTo({left: 0, top: ref.current.offsetTop, behavior: 'smooth'});

function object(prop) 
{
    let arr = [];
    let arr2 = [];
    for(let i=0; i<prop.length; i++)
    {
        if(prop[i] !== 0)
        {
            arr.push(<li>{prop[i]}</li>);
        }
        else if(prop[i] === 0)
        {
            let j = i+1;
            while(prop[j] !== -1)
            {
                arr2.push(<li>{prop[j]}</li>);
                j++;
            }
            arr.push(<ul>{arr2.map(item => item)}</ul>);
            arr2.splice(0, arr2.length);
            i=j;
        }
    }
    return arr;
}


const Template = (props) => {
    const details = props.obj; /*Array passed from Parant - Profile */
    const texts = props.dat;
    const display = props.disp; 
    
    const {menu} = useContext(UserContext);

    const edu_quali = useRef(null), member = useRef(null), publications = useRef(null), projects = useRef(null);
    const phd = useRef(null), conference = useRef(null), talks = useRef(null), board = useRef(null);

    let arr1 = object(texts.edu), arr2 = object(texts.mem), arr3 = object(texts.talks), arr4 = object(texts.conf), arr5 = object(texts.proj), arr6=object(texts.board), arr7 = object(texts.pub);

    let refer = ["Publon", "Scopus", "Google Scholar"];
    let arr14 = [];
    for(let i=0; i<3; i++)
    {
        if(texts.links[i] == null)
            continue;
        else
            arr14.push(<Links head={refer[i]} anchor={texts.links[i]}/>);
    }

    const [drop, setDrop] = useState(true);

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
                                    <li id="pointer" onClick={() => scroll(phd)}>Teaching</li>
                                    <li id="pointer" onClick={() => scroll(conference)}>Programmes Organised</li>
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

                        <div className="child_sec-2" style={{overflow: "hidden"}}>
                            <h4>BRIEF BIO</h4>
                            <p className={(details.bio.length <= 100) ? " " : "child_bio"}>{details.bio}</p>
                        </div>

                        <Sidebar>
                            <Link to="/" onClick={menu}><li>Home</li></Link>
                            <li id="pointer" onClick={() => {scroll(edu_quali); menu();}}>Educational Qualifications</li>
                            <li id="pointer" onClick={() => {scroll(member); menu();}}>Membership</li>
                            <li id="pointer"onClick={() => setDrop(!drop)}>Research</li>
                            <div className={(drop) ? "side_hide" : "side_drop"}>
                                <ul>
                                    <li id="pointer" className="drop_li" onClick={() => {scroll(publications); menu();}}>Publications</li>
                                    <li id="pointer" className="drop_li" onClick={() => {scroll(projects); menu();}}>Projects</li>
                                    <li id="pointer" className="drop_li" onClick={() => {scroll(phd); menu();}}>PhD Guidance</li>
                                    <li id="pointer" className="drop_li" onClick={() => {scroll(conference); menu();}}>Programmes Organised</li>
                                    <li id="pointer" className="drop_li" onClick={() => {scroll(talks); menu();}}>Invited Talks</li>
                                    <li id="pointer" className="drop_li" onClick={() => {scroll(board); menu();}}>Editorial Board Member</li>
                                </ul>
                            </div>
                        </Sidebar>
                   
                        <div className="child_sec-3">
                            <h4>RESEARCH INTERESTS</h4>
                            <p>{details.aoi}</p>
                        </div>
                    </div>
                    <Section refer={edu_quali} head={"Educational Qualifications"} arr={arr1} view={(display[0] === "edu") ? "none":"block"}/>
                    <Section refer={member} head={"Memberships"} arr={arr2} view={(display[1] === "mem") ? "none":"block"}/>
                    <Section refer={publications} head={"Publications"} arr={arr7} view={(display[2] === "pub") ? "none":"block"}/>
                    <Section refer={projects} head={"Teaching"} arr={arr5} view={(display[3] === "teach") ? "none":"block"}/>
                    <Section refer={projects} head={"Projects"} arr={arr5} view={(display[4] === "proj") ? "none":"block"}/>
                    <Table title="Student Achievements" heading={["Sl. No.", "Name of Scholar",	"Title of Thesis"]} rest={texts.phd} view={(display[5] === "achieve") ? "none":"block"}/>
                    <Section refer={conference} head={"Programmes Organized"} arr={arr4} view={(display[6] === "program") ? "none":"block"}/>
                    <Section refer={talks} head={"Invited Talks"} arr={arr3} view={(display[7] === "talks") ? "none":"block"}/>
                    <Section refer={board} head={"Editorial Board Member"} arr={arr6} view={(display[8] === "edit") ? "none":"block"}/>
                </div>
            </div>
        </>
    );
}

export default Template;

const Section = ({arr, refer, head, view}) => {
    return(
        <div ref={refer} className="prof_text_temp" style={{display: view}}>
            <h2>{head}</h2>
            <div>
                <ol>
                    {arr}
                </ol>
            </div>
        </div>
    );
}

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