import "./Dropdown.css";

function Dropdown(props) {
  
  
    return (
      <>
        <div className="drop-div" style={{display: props.disp}}>
            <ul className={'dropdown-menu'}>
                {props.children}
            </ul>
        </div>
      </>
    );
  }
  
  export default Dropdown;
  