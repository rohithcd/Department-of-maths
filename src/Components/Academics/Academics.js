import "./Academics.css";
import {useParams} from "react-router-dom";
import Error from "../Reusable/Error/Error";
import Courses from "./Sub/Courses";
import Timetable from "./Timetable/Timetable";

const Academics = () => {

    const {link} = useParams();

    if(link === 'courses') return <Courses/>;
    else if(link === 'time-table') return <Timetable/>;
    else if(link === link + '/:id') return <Error/>;
    
}

export default Academics;