import {fa_img1, fa_img3, txt} from "../../Exports";
import Title from "../Reusable/Title/Title";
import "./Facilities.css";

function check(value)
{
    if(value%2 === 0)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}

const Facilities = () => {
    let arr = [];
    let pics = [fa_img3, fa_img1, fa_img1, fa_img1, fa_img1, fa_img1];

    for(let i=0; i<pics.length; i++)
    {
       arr.push(<Article img={pics[i]} text={txt[i]} val={check(i)}/>); 
    } 

    return(
        <>
            <Title head="Facilities"/>
            <div className="section_facilities">
                {arr}
            </div>
        </>
    );
}

const Article = (props) => {
    return(
        <>
            <div className={(props.val === 0) ? "facilities_box slider" : "facilities_box change"}>
                <div className="article_img"> 
                    <img src={props.img} alt=""/>
                </div> 
             
                <div className={(props.val === 0) ? "facilities_para-1 fac_common" : "facilities_para-2 fac_common"}>
                    <h2> {props.text} </h2>
                </div>
            </div>
        </>
    );
}



export default Facilities;