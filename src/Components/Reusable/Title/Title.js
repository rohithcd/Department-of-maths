import "./Title.css";

const Title = (props) =>{
    return(
        <>
            <div className="title_bg">
                <h1>{props.head}</h1>
            </div>
        </>
    );
}

export default Title;