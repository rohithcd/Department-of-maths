import "./Button.css";

const Button = (props) => {
    if(props.type === "oval")
        return(<><button id="pointer" className={props.class + " btn btn_oval"}>{props.name}</button></>);
    else if(props.type === "box") 
        return(<><button id="pointer" className={props.class + " btn btn_box"}>{props.name}</button></>);
}

export default Button;