import "./Card.css";

const Card = (props) => {
    return(
        <>
            <div className="div_card">
                <div className="pic_container">
                    <img src={props.pic} alt=""/>
                </div>
                <h4>
                    <span>{props.head}</span>
                </h4>
                <button className="btn_card">View</button>
            </div>
        </>
    );
}

export default Card;