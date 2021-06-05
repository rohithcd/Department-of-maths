import "./Facilities.css";
import {fa_img1, txt} from "../../Exports";

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
    let pics = [fa_img1, fa_img1, fa_img1, fa_img1, fa_img1, fa_img1];

    for(let i=0; i<6; i++)
    {
        arr.push(<Article img={pics[i]} text={txt[i]} val={check(i)}/>);
    }
    return(
        <>
            <div className="section_facilities">
                {arr}
            </div>
        </>
    );
}

const Article = (props) => {
    return(
        <>
            <div className={(props.val === 0) ? "facilities_box " : "facilities_box change"}>
                <img src={props.img} alt=""/>
                <div className={(props.val === 0) ? "facilities_para-1" : "facilities_para-2"}>
                    <h2> {props.text} </h2>
                </div>
            </div>
        </>
    );
}



export default Facilities;