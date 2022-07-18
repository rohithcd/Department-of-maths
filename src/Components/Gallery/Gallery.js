import {useState, useEffect} from "react";
import Loader from "../Reusable/Loader/Loader";
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13} from "../../Exports";
import Button from "../Reusable/Button/Button";
import "./Gallery.css";


const Gallery = () => {
    let arr = [];
    const [state, setState] = useState({n: 4, value: "Show More"});
    const [loading, setLoading] = useState(false);
    let pics = [img8, img9, img10, img11, img12, img13, img1, img2, img3, img4, img5, img6, img7];

    useEffect(() => {
        setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500); 
    }, []);

    function show()
    {
        if(state.n === 4)
            setState({n: pics.length, value: "Show Less"});
        else
            setState({n: 4, value: "Show More"});
    }

    for(let i=0; i<state.n; i++)
    {
        arr.push(<Photo img={pics[i]}/>);
    }
    
    return(
        <>
            {(loading) ?  (<Loader/> ): (
            <>
                <div className="section_gallery">
                    { arr }
                </div>
                <Button type="box" class="btn-align" name={state.value} click={show}/>
            </>
            )}
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