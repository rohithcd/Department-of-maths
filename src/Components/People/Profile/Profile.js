import {useParams} from "react-router-dom"; 
import Template from "./Template.js";
import Error from "../../Reusable/Error/Error";
import {prof, data} from "./Details/Details.js";

const Profile = () => {

    const {Id} = useParams();
    const param = Id.slice(8);

    if(param === "Azyq5R38") return <Template obj={prof[0]} dat={data[0]}/>
    else if(param === "4MzRVnmS") return <Template obj={prof[1]} dat={data[1]}/>
    else if(param === "5D7f5vjz") return <Template obj={prof[2]} dat={data[2]}/>
    else if(param === "6SsAl9xE") return <Template obj={prof[3]} dat={data[3]}/>
    else if(param === "QnZUwiq6") return <Template obj={prof[4]} dat={data[4]}/>
    else if(param === "ZIzVik2u") return <Template obj={prof[5]} dat={data[5]}/>
    else if(param === "JBbkICAq") return <Template obj={prof[6]} dat={data[6]}/>
    else if(param === "DOsSFiDt") return <Template obj={prof[7]} dat={data[7]}/>
    else if(param === "16HJ4Mgh") return <Template obj={prof[8]} dat={data[8]}/>
    else if(param === "h4GJEgP9") return <Template obj={prof[9]} dat={data[9]}/>
    else if(param === "84gdKK0e") return <Template obj={prof[10]} dat={data[10]}/>
    else return <Error/>
}

export default Profile;