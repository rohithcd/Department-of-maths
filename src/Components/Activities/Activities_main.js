// import "./Activities_main.css";
import "./Activities.css";

import Title from "../Reusable/Title/Title";

const ActivitiesMain = () => {
    return(
        <>
        <Title head="Activities"/>
        <div className="visitors-list activities-sub">

            <ul>
                <li>Training Programmes for school going students  - 4 </li>
                <li>Enrichment Programmes for UG and PG students</li>
                <li>Training Programmes enhancing Career Opportunities for PG students</li>
                <li>International Conferences - 2</li>
                <li>Coordinated Regional Mathematical Olympiad, NBHM scholarship test, Simon – Mario International Competitive Examination</li>
            </ul>
        </div>
        </>
    );
}

export default ActivitiesMain;

