import {Link} from "react-router-dom";
import "./Card.css";

const Card = (props) => {
    return(
        <>
            <div className="div_card">
                <div className="pic_container">
                    <img src={props.pic} alt=""/>
                </div>
                <h4><span>{props.head}</span></h4>
                <Link to={props.link}>
                    <button className="btn_card">View</button>
                </Link>
            </div>
        </>
    );
}

export default Card;