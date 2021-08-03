import {useParams} from "react-router-dom"; 
import Template from "./Template.js";
import Error from "../../Reusable/Error/Error";
import {prof} from "./Details/Details.js";

const Profile = () => {

    const {Id} = useParams();
    const param = Id.slice(8);

    if(param === "Azyq5R38") return <Template obj={prof[0]}/>
    else if(param === "4MzRVnmS") return <Template obj={prof[1]}/>
    else if(param === "5D7f5vjz") return <Template obj={prof[2]}/>
    else if(param === "6SsAl9xE") return <Template obj={prof[3]}/>
    else if(param === "QnZUwiq6") return <Template obj={prof[4]}/>
    else if(param === "ZIzVik2u") return <Template obj={prof[5]}/>
    else if(param === "JBbkICAq") return <Template obj={prof[6]}/>
    else if(param === "DOsSFiDt") return <Template obj={prof[7]}/>
    else if(param === "16HJ4Mgh") return <Template obj={prof[8]}/>
    else if(param === "h4GJEgP9") return <Template obj={prof[9]}/>
    else if(param === "84gdKK0e") return <Template obj={prof[10]}/>
    else return <Error/>
}

export default Profile;