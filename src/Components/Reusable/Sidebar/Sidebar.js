import {useContext} from "react";
import {UserContext} from "../../../Layout";
import "./Sidebar.css";

const Sidebar = (props) => {
    const {state} = useContext(UserContext);

    return(
        <>
            <div className="sidebar_main" style={{overflowY: "scroll", display: (state) ? "block" : "none"}}>
                <ul className={(state) ? "side-items" : ""}>
                    {props.children}
                </ul>
            </div>
        </>
    );
}

export default Sidebar;