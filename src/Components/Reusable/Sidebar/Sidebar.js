import "./Sidebar.css";

const Sidebar = (props) => {
    return(
        <>
            <div className="sidebar_main" style={props.style}>
                <ul className={props.class}>
                    {props.children}
                </ul>
            </div>
        </>
    );
}

export default Sidebar;