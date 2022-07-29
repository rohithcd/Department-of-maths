import Table from "../../Reusable/Table/Table";
import {rscholar_data_parttime, rscholar_data_fulltime} from "./RDetails.js"; 
import Title from "../../Reusable/Title/Title";

const ResearchScholars = () => {
    return(
        <>
            <Title head="Research Scholars" />
            <h2>Part Time</h2>
            <Table heading={["Sl.No","Name", "Funding Agency", "Guide", "Area of Work"]}
                rest={rscholar_data_parttime}/>
                
            <h2>Full Time</h2>
            <Table heading={["Sl.No","Name", "Funding Agency", "Guide", "Area of Work"]}
                rest={rscholar_data_fulltime}/>
        </>
    );
}

export default ResearchScholars;