import Table from "../../Reusable/Table/Table";
import {rscholar_data_parttime, rscholar_data_fulltime} from "./RDetails.js"; 
import Title from "../../Reusable/Title/Title";
import Heading from "../../Reusable/Head/Heading";

const ResearchScholars = () => {
    return(
        <>
            <Title head="Research Scholars" />
            <Heading name="Full-Time"/>
            <Table heading={["Sl.No","Name", "Funding Agency", "Guide", "Area of Work"]}
                rest={rscholar_data_fulltime}/>

            <Heading name="Part-Time"/>
            <Table heading={["Sl.No","Name", "Funding Agency", "Guide", "Area of Work"]}
                rest={rscholar_data_parttime}/>
    
        </>
    );
}

export default ResearchScholars;