import {useState} from "react";
import logo1 from "../../../Assets/icons/cusat_logo.png";
import d_arr from "../../../Assets/icons/down_arrow.svg";
import './Explore.css';



const Explore = ()=> {
    const [state, setState] = useState({rotate: "rotate(0deg)", isActive: false, value: "none"});
    
    function click() 
    {
        if(state.isActive === false)
        {
            setState({rotate: "rotate(180deg)", isActive: true, value: "flex"});
        }
        else
        {
            setState({rotate: "rotate(0deg)", isActive: false, value: "none"});
        } 
    }

    return(
        <>
            <div className="hrblock" >
                <h3 className="explr shakecls" onClick={click}>
                    Explore More{" "}
                    <div className="rot">
                        <img src={d_arr} style={{transform: state.rotate}} className="arrow" alt="explore" />
                    </div>
                </h3>
            </div>
            <div className="new-block" style={{display: state.value}}>
              {/*  <div cassName="flex"> */} 
                    <Block img={logo1} caps="CUSAT"/>
                    <Block img={logo1} caps="CUSAT"/>
                    <Block img={logo1} caps="CUSAT"/>
                    <Block img={logo1} caps="CUSAT"/>
               {/* </div>  */}
                
            </div>
        </>
    );
}

const Block = (props) => {
    return(
        <>
            <div className="block_links">
                <img src={props.img} alt="alternate texts"/>
                <figcaption>{props.caps}</figcaption>
            </div>
        </>
    );
}

export default Explore;