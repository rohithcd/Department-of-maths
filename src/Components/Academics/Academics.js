import "./Academics.css";
import Table from "../Reusable/Table/Table";
import { stud_achieve, placements, phd_awarded, stud_sport } from "../../Exports";

const Academics = () => {
    return (
        <>
            <Table title="Student Achievements" heading={["Sl. No.", "Name of Research fellow",	"Year of enrolment", "Duration of fellowship",	"Type of  the fellowship",	"Granting agency",	"Qualifying exam if any (NET, GATE,  etc.)"]}
            rest={stud_achieve}
            />
            <Table title="Student Achievement in sports and culture" heading={["Year", "Name of the award/ medal", "Team / Individual",	"Inter-university / state / National / International",	"Name of the event", "Name of the student"]}
            rest={stud_sport}
            />
            <Table title="Placements" heading={["Year",	"Name of student placed  and contact details",	"Name of the  employer with contact details"]}
            rest={placements}
            />
            <Table title="PhD Awarded" heading={["Sl.no", "Name of Scholar PhD Scholar", "Name of the guide/s", "Title of Thesis", "Year of award of PhD"]}
            rest={phd_awarded}
            />
        </>
    );
}

export default Academics;