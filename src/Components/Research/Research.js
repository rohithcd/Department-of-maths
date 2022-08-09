import "./Research.css";
import {useParams} from "react-router-dom";
import Error from "../Reusable/Error/Error";
import PhD from "./PhD/PhD";
import Visitors from "./Visitors/Visitors";
import Placement from "./placements/placements";
import Publications from "./Publications/Publications";
import Achievements from "../Students/Achievements/Achievements";
import ResearchAreas from "./ResearchAreas/ResearchAreas";
import WorkConf from "./WorkConf/WorkConf";
import ResearchAwarded from "./ResearchAwarded/ResearchAwarded";

const Research = () => {
    const {link} = useParams();

    if(link === 'PhD-awarded') return <PhD/>;
    else if(link === 'research-areas') return <ResearchAreas/>;
    else if(link === 'placements') return <Placement/>;
    else if(link === 'publications') return <Publications/>;
    else if(link === 'visitors') return <Visitors/>;
    else if(link === 'achievements') return <Achievements/>;
    else if(link === 'work-conf') return <WorkConf/>;
    else if(link === 'research-awarded') return <ResearchAwarded/>;
    else if(link === link + '/:id') return <Error/>;
    
}

export default Research;

