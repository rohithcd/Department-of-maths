import Table from "../../Reusable/Table/Table";
import {phd_awarded} from "../../../Exports"; 
import Title from "../../Reusable/Title/Title";

const PhD = () => {
    return (
        <>
        <Title head="PhD Awarded" />
            <Table heading={["Sl.no", "Name of Scholar PhD Scholar", "Name of the guide/s", "Title of Thesis", "Year of award of PhD"]}
                rest={phd_awarded}/>
        </>
    );
}

export default PhD;