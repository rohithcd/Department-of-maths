import { useState, useRef} from "react";
import logo1 from "../../../Assets/icons/cusat_logo.png";
import d_arr from "../../../Assets/icons/down_arrow.svg";
import './Explore.css';



const Explore = ()=> {
    const [state, setState] = useState({rotate: "rotate(0deg)", isActive: false, value: "none"});

    const scrollToRef = (ref) => {
      
        window.scrollTo({
            top: (ref.current.offsetTop - 0.1),
            left:  0,
            behavior: 'smooth'
        })
    }

    const myRef = useRef(null); 
    function click(ref) 
    {
       
        scrollToRef(myRef);

        if(state.isActive === false)
        {
            setState({rotate: "rotate(180deg)", isActive: true, value: "block"});
        }
        else
        {
            setState({rotate: "rotate(0deg)", isActive: false, value: "none"});
        } 
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
            <div ref={myRef}  > </div>
            <div className="new-block" style={{display: state.value}}>
                    <ul className="block_list">
                        <Block img={logo1} caps="CUSAT" link="https://cusat.ac.in"/>
                        <Block img={logo1}/>
                        <Block img={logo1}/>
                        <Block img={logo1}/>
                    </ul>
                
            </div>
        </>
    );
}

const Block = (props) => {
    return(
        <>
            <li className="block_links">
                <a href={props.link} target="_blank">
                    <img src={props.img} alt="alternate texts"/>
                    <p>{props.caps}</p>
                </a>
            </li>
        </>
    );
}

export default Explore;