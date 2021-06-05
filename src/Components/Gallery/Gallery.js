import {useState} from "react";

import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } from "../../Exports";
import "./Gallery.css";


const Gallery = () => {
    let arr = [];
    const [state, setState] = useState({n: 4, value: "Show More"});
    let pics = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    function show()
    {
        if(state.n === 4)
        {
            setState({n: 10, value: "Show Less"});
        }
        else
        {
            setState({n: 4, value: "Show More"});
        }
       
    }

    for(let i=0; i<state.n; i++)
    {
        arr.push(<Photo img={pics[i]}/>);
    }
    
    return(
        <>
            <div className="section_gallery">
                { arr }
            </div>
            <button className="btn btn-align" onClick={show}>{state.value}</button>
        </>
    );
}

const Photo = (props) =>
{
    return(
        <>
            <div className="photo">
                <img src={props.img} alt="images"/>
            </div>
        </>
    );
    
}

export default Gallery;