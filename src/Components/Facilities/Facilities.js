import {fac} from "../../Exports";
import Title from "../Reusable/Title/Title";
import {Carousel} from "react-responsive-carousel"
import "./Facilities.css";

function check(value)
{
    if(value%2 === 0)
        return 0;
    else
        return 1;
}

const Facilities = () => {
    let article = [];

    for(let i=0; i<fac.length; i++)
    {
        article.push(<Article img={fac[i].img} text={fac[i].txt} val={check(i)}/>);
    }

    return(
        <>
            <Title head="Facilities"/>
            <div className="section_facilities">
                {article}
            </div>
        </>
    );
}

const Article = (props) => {
    let arr = [];
    for(let i=0; i<props.img.length; i++)
    {
        arr.push(<Image source={props.img[i]}/>)
    }

    return(
        <>
            <div className={(props.val === 0) ? "facilities_box slider" : "facilities_box change"}>
                <div className="article_img"> 
                    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} stopOnHover={false} showThumbs={false} dynamicHeight={false}
                        showStatus={false} interval={3500} className="carousel_div">
                            {arr}
                                
                    </Carousel>
                </div> 
             
                <div className={(props.val === 0) ? "facilities_para-1 fac_common" : "facilities_para-2 fac_common"}>
                    <h2> {props.text} </h2>
                </div>
            </div>
        </>
    );
}

const Image = (props) => {
    return(
        <>
            <div className="slider-img">
                <img src={props.source} alt=""/>
            </div>
        </>
    );
}

export default Facilities;