import Table from "../../Reusable/Table/Table";
import {placements_data} from "../../../Exports"; 
import Title from "../../Reusable/Title/Title";

const Placement = () => {
    return(
        <>
            <Title head="Placements" />
            <Table heading={["Sl.no", "Year", "Name of student placed and contact details", "Program graduated from", "Name of the  employer with contact details", "Pay package at appointment"]}
                rest={placements_data}/>

        </>
    );
}

export default Placement;