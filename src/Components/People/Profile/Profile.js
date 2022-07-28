import {useParams} from "react-router-dom"; 
import Template from "./Template.js";
import Error from "../../Reusable/Error/Error";
import {Professors, AsstProfessors, AssocProfessors, data} from "./Details/Details.js";

const Profile = () => {

    const {Id} = useParams();
    const param = Id.slice(8);

    if(param === "Azyq5R38") return <Template obj={Professors[1]} dat={data[0]} disp={["edu", "mem", null, "teach", "proj", "achieve", "program", "talks", "edit"]}/> /* P.G Romeo */
    else if(param === "4MzRVnmS") return <Template obj={Professors[0]} dat={data[1]} disp={["edu", "mem", "pub", "teach", "proj", "achieve", "program", "talks", "edit"]}/> /* Sasi Gopalan */
    else if(param === "5D7f5vjz") return <Template obj={Professors[2]} dat={data[2]} disp={["edu", "mem", "pub", "teach", "proj", "achieve", "program", "talks", "edit"]}/> /* Ambat Vijayakumar */
    else if(param === "Bb5G5mjy") return <Template obj={Professors[3]} dat={data[11]} disp={["edu", "mem", "pub", "teach", "proj", "achieve", "program", "talks", "edit"]}/> /* MNN Namboothiri */
    else if(param === "6SsAl9xE") return <Template obj={AssocProfessors[0]} dat={data[3]} disp={["edu", "mem", null, "teach", "proj", "achieve", "program", "talks", "edit"]}/> /* Shery Fernanadez */
    else if(param === "ZIzVik2u") return <Template obj={AssocProfessors[1]} dat={data[5]} disp={[null, null, null, null, null, null, null, null, null]}/> /* Aparna */
    else if(param === "QnZUwiq6") return <Template obj={AsstProfessors[0]} dat={data[4]} disp={[null, "mem", null, null, null, "achieve", null, null, "edit"]}/> /* Ambily */
    else if(param === "JBbkICAq") return <Template obj={AsstProfessors[1]} dat={data[6]} disp={[null, "mem", null, "teach", null, "achieve", "program", "talks", "edit"]}/> /* Kiran */
    else if(param === "DOsSFiDt") return <Template obj={AsstProfessors[2]} dat={data[7]} disp={[null, "mem", "pub", "teach", "proj", "achieve", null, null, "edit"]}/> /* Noufal */
    else if(param === "16HJ4Mgh") return <Template obj={AsstProfessors[3]} dat={data[8]} disp={[null, "mem", null, "teach", "proj", "achieve", "program", null, "edit"]}/> /* Shankar P */
    else if(param === "h4GJEgP9") return <Template obj={AsstProfessors[4]} dat={data[9]} disp={["edu", "mem", null, "teach", "proj", "achieve", "program", "talks", "edit"]}/> /* Tanushree Pandit*/
    else if(param === "84gdKK0e") return <Template obj={AsstProfessors[5]} dat={data[10]} disp={["edu", "mem", null, "teach", "proj", "achieve", "program", "talks", "edit"]}/> /* Tathagatha Banarjee */
    else return <Error/>
}

export default Profile;