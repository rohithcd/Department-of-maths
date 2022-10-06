import {Link} from "react-router-dom";
import "./Card.css";

const Card = (props) => {
    return(
        <>
            {/* <div className="div_card">
                <div className="pic_container">
                    <img src={props.pic} alt=""/>
                </div>
                <h4><span>{props.head}</span></h4>
                <Link to={props.link}>
                    <button className="btn_card">View</button>
                </Link>
            </div> */}

      <div className="grid-item">
        <div className="card">
          <img className="card-img" src={props.pic} alt="Rome" />
          <div className="card-content">
            <h1 className="card-header">{props.head}</h1>
            {/* <p class="card-text">
              Includes images of the campus.
            </p> */}
            <Link to={props.link}><button class="card-btn">Visit <span>&rarr;</span></button></Link>
            
          </div>
        </div>
      </div>

        </>
    );
}

export default Card;