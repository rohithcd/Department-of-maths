import {useParams} from "react-router-dom"; 
import Template from "./Template.js";
import Error from "../../Reusable/Error/Error";
import {prof, data} from "./Details/Details.js";

const Profile = () => {

    const {Id} = useParams();
    const param = Id.slice(8);

    if(param === "Azyq5R38") return <Template obj={prof[0]} dat={data[0]} disp={["edu", "mem", null, "teach", "proj", "achieve", "program", "talks", "edit"]}/>
    else if(param === "4MzRVnmS") return <Template obj={prof[1]} dat={data[1]} disp={["edu", "mem", "pub", "teach", "proj", "achieve", "program", "talks", "edit"]}/>
    else if(param === "5D7f5vjz") return <Template obj={prof[2]} dat={data[2]} disp={["edu", "mem", "pub", "teach", "proj", "achieve", "program", "talks", "edit"]}/>
    else if(param === "6SsAl9xE") return <Template obj={prof[3]} dat={data[3]} disp={["edu", "mem", null, "teach", "proj", "achieve", "program", "talks", "edit"]}/>
    else if(param === "QnZUwiq6") return <Template obj={prof[4]} dat={data[4]} disp={[null, "mem", null, null, null, "achieve", null, null, "edit"]}/>
    else if(param === "ZIzVik2u") return <Template obj={prof[5]} dat={data[5]} disp={[null, null, null, null, null, null, null, null, null]}/>
    else if(param === "JBbkICAq") return <Template obj={prof[6]} dat={data[6]} disp={[null, "mem", null, "teach", null, "achieve", "program", "talks", "edit"]}/>
    else if(param === "DOsSFiDt") return <Template obj={prof[7]} dat={data[7]} disp={["edu", "mem", "pub", "teach", "proj", "achieve", "program", "talks", "edit"]}/>
    else if(param === "16HJ4Mgh") return <Template obj={prof[8]} dat={data[8]} disp={["edu", "mem", "pub", "teach", "proj", "achieve", "program", "talks", "edit"]}/>
    else if(param === "h4GJEgP9") return <Template obj={prof[9]} dat={data[9]} disp={["edu", "mem", null, "teach", "proj", "achieve", "program", "talks", "edit"]}/>
    else if(param === "84gdKK0e") return <Template obj={prof[10]} dat={data[10]} disp={["edu", "mem", null, "teach", "proj", "achieve", "program", "talks", "edit"]}/>
    else return <Error/>
}

export default Profile;