import "./Ham.css";
import {UserContext} from "../../../Layout";
import {useContext} from "react";

const Ham = () => {
    const {width, state, breakpoint, menu} = useContext(UserContext);

    return(
        <>
            <div className="ham_container" onClick={menu}>
                <span className={(state && width < breakpoint) ? "cross" : "ham" }>&nbsp;</span>
            </div>
        </>
    );
}

export default Ham;
