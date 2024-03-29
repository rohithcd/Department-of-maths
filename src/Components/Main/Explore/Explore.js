import { useState, useRef} from "react";
import {links, ex_logo1, ex_logo2, ex_logo3} from "../../../Exports";
import d_arr from "../../../Assets/icons/down_arrow.svg";
import './Explore.css';


const Explore = ()=> {
    const [state, setState] = useState({rotate: "rotate(0deg)", isActive: false, value: "none"});

    const scrollToObj = (ref) => {
      
        window.scrollTo({
            top: (ref.current.offsetTop - 0.1),
            left:  0,
            behavior: 'smooth'
        })
    }

    const myRef = useRef(null); 
    function click(ref) 
    {
        if(state.isActive === false)
        {
            setState({rotate: "rotate(180deg)", isActive: true, value: "block"});
            scrollToObj(myRef);
        }
        else
            setState({rotate: "rotate(0deg)", isActive: false, value: "none"});
    }

    return(
        <>
            <div className="hrblock">
                    <h3 className="explr shakecls"  onClick={click}>
                        Explore More{" "}
                        <div className="rot">
                            <img src={d_arr} style={{transform: state.rotate}} className="arrow" alt="explore" />
                        </div>
                    </h3>
               
               
            </div>
            <div ref={myRef}> </div>
            <div className="new-block" style={{display: state.value}}>
                    <ul className="block_list">
                        <Block img={ex_logo1} caps="CUSAT" link={links[0]}/>
                        <Block img={ex_logo2} caps="DYUTHI" link={links[1]}/>
                        <Block img={ex_logo3} caps="LIBRARY" link={links[2]}/>
                        <Block img={ex_logo1} caps="OSADMS" link={links[3]}/>
                    </ul>
                
            </div>
        </>
    );
}

const Block = (props) => {
    return(
        <>
            <li className="block_links">
                <a href={props.link} rel="noreferrer" target="_blank">
                    <img className="myImg" src={props.img} alt="alternate texts"/>
                    <p>{props.caps}</p>
                </a>
            </li>
        </>
    );
}

export default Explore;