import "./Button.css";

const Button = (props) => {
    if(props.type === "oval")
        return(<><button id="pointer" className={props.class + " btn-custom btn_oval"}>{props.name}</button></>);
    else if(props.type === "box") 
        return(<><button id="pointer" className={props.class + " btn-custom btn_box"} onClick={props.click}>{props.name}</button></>);
}

export default Button;