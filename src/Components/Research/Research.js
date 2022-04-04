import "./Research.css";
import {useParams} from "react-router-dom";
import Error from "../Reusable/Error/Error";
import PhD from "./PhD/PhD";
import Visitors from "./Visitors/Visitors";
import Placement from "./placements/placements";

const Research = () => {
    const {link} = useParams();


    if(link === 'PhD-awarded') return <PhD/>
    else if(link === 'placements') return <Placement/>;
    else if(link === 'visitors') return <Visitors />
    else if(link === link + '/:id') return <Error/>
    
    
}

export default Research;

