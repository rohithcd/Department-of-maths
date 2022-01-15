import "./Research.css";
import {useParams} from "react-router-dom";
import Error from "../Reusable/Error/Error";
import PhD from "./PhD/PhD";

const Research = () => {
    const {link} = useParams();


    if(link === 'PhD-awarded') return <PhD/>
    else if(link === 'placements') return null;
    else if(link === link + '/:id') return <Error/>
    
    
}

export default Research;

