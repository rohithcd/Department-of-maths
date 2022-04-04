import "./Activities.css";
import {res_txt} from "../../Exports";


import res_img1 from "../../Assets/research/ICRTGC_1.jpg";
import res_img2 from "../../Assets/research/ICRTGC_2.jpg";
import res_img3 from "../../Assets/research/ICRTGC_3.jpg";
import res_img4 from "../../Assets/research/ICRTGC_4.jpg";


const Activities = () => {
    let arr = [];
    for(let i=2; i<res_txt.length-1; i++){arr.push(<li>{res_txt[i]}</li>)}

    return(
        <>
        
        <div className="section_research">
        <h2>International Conference on Recent Trends in Graph Theory and Combinatorics, India, April 26-29, 2018</h2>
            <div className="prof_text_temp research_div">
            <div className="research_text">
                <p>{res_txt[0]}</p>
                <p>{res_txt[1]}</p>
                <ol>
                    {arr}
                </ol>
                <p>{res_txt[res_txt.length-1]}</p>
            </div>
            <div className="card_opt">
                <h2>News & Events</h2>
            </div>
            </div>

            <div className="research_pics">
                <img src={res_img1} alt=""/>
                <img src={res_img2} alt=""/>
                <img src={res_img3} alt=""/>
                <img src={res_img4} alt=""/>
            </div>
        </div>
        </>
    );
}

export default Activities;