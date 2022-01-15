import "./Academics.css";
import {useParams} from "react-router-dom";
import Error from "../Reusable/Error/Error";
import Courses from "./Sub/Courses";

/*import Table from "../Reusable/Table/Table";
import Error from "../Reusable/Error/Error";
import { stud_achieve, placements, stud_sport } from "../../Exports";*/

const Academics = () => {
    const {link} = useParams();

    if(link === 'courses') return <Courses/>
    else if(link === link + '/:id') return <Error/>

    return (
        <>
            
            {/*<Table title="Student Achievements" heading={["Sl. No.", "Name of Research fellow",	"Year of enrolment", "Duration of fellowship",	"Type of  the fellowship",	"Granting agency",	"Qualifying exam if any (NET, GATE,  etc.)"]}
            rest={stud_achieve}
            />
            <Table title="Student Achievement in sports and culture" heading={["Year", "Name of the award/ medal", "Team / Individual",	"Inter-university / state / National / International",	"Name of the event", "Name of the student"]}
            rest={stud_sport}
            />
            <Table title="Placements" heading={["Year",	"Name of student placed  and contact details",	"Name of the  employer with contact details"]}
            rest={placements}
    />*/}
            
        </>
    );
}

export default Academics;