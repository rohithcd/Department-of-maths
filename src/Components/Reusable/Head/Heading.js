import "./Heading.css";

const Heading = ({name}) => {

    return(
        <>
            <div className="main_head">
                <h2>{name}</h2>
            </div>
        </>
    );
}

export default Heading;