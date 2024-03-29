import {useState, useEffect} from "react";
import Loader from "../Reusable/Loader/Loader";
import Button from "../Reusable/Button/Button";
import "./Gallery.css";


const Gallery = ({pics}) => {
    let arr = [];
    const [state, setState] = useState({n: 4, value: "Show More"});
    const [loading, setLoading] = useState(false);
    

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

export default Gallery;

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
