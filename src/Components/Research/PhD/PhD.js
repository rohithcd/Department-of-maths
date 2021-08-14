import Table from "../../Reusable/Table/Table";
import {phd_awarded} from "../../../Exports"; 

const PhD = () => {
    return (
        <>
            <Table title="PhD Awarded" heading={["Sl.no", "Name of Scholar PhD Scholar", "Name of the guide/s", "Title of Thesis", "Year of award of PhD"]}
                rest={phd_awarded}/>
        </>
    );
}

export default PhD;