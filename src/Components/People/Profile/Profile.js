import Template from "./Template.js";
import React from "react";
import {useParams} from "react-router-dom"; 
import Error from "../../Reusable/Error/Error";
import {profile_pic1, p_img1, p_img2, p_img3, p_img4, p_img5, p_img6, p_img7, p_img9, p_img10, p_img11} from "../../../Exports.js";
import pdf from "../../../Assets/people/CV/Bio-Aparna.pdf";

const Profile = () => {

    const {Id} = useParams();
    const param = Id.slice(8);

    let prof = [
        {name: "Dr P. G. Romeo", job: "Professor", pic: p_img1},
        {name: "Dr. Sasi Gopalan", job: "Professor", pic:p_img2},
        {name: "Prof. Ambat Vijayakumar", job: "Emeritus Professor", pic:p_img3},
        {name: "Dr. Shery Fernandez", job: "Associate Professor", pic:p_img4},
        {name: "Dr. Ambily A A", job: "Assistant Professor", pic:p_img5},
        {name: "Dr. V. B. Kiran Kumar", job: "Assistant Professor", pic:p_img6},
        {name: "Dr. A. Noufal", job: "Assistant Professor", pic:p_img7},
        {name: "Dr. Aparna Lakshmanan S", job: "Assistant Professor", pic: profile_pic1, doc: pdf},
        {name: "Dr. Shankar P", job: "Assistant Professor", pic:p_img9},
        {name: "Dr. Tanushree Pandit", job: "Assistant Professor", pic:p_img10},
        {name: "Dr. Tathagata Banerjee", job: "Assistant Professor", pic:p_img11}    
    ];

    if(param === "Azyq5R38")
    {
        return <Template obj={prof[0]}/>
    }
    else if(param === "4MzRVnmS")
    {
        return <Template obj={prof[1]}/>
    }
    else if(param === "5D7f5vjz")
    {
        return <Template obj={prof[2]}/>
    }
    else if(param === "6SsAl9xE")
    {
        return <Template obj={prof[3]}/>
    }
    else if(param === "QnZUwiq6")
    {
        return <Template obj={prof[4]}/>
    }
    else if(param === "ZIzVik2u")
    {
        return <Template obj={prof[5]}/>
    }
    else if(param === "JBbkICAq")
    {
        return <Template obj={prof[6]}/>
    }
    else if(param === "DOsSFiDt")
    {
        return <Template obj={prof[7]}/>
    }
    else if(param === "16HJ4Mgh")
    {
        return <Template obj={prof[8]}/>
    }
    else if(param === "h4GJEgP9")
    {
        return <Template obj={prof[9]}/>
    }
    else if(param === "84gdKK0e")
    {
        return <Template obj={prof[10]}/>
    }
    else
    {
        return <Error/>
    }
}

export default Profile;