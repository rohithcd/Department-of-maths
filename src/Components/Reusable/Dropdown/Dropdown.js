import "./Dropdown.css";
import {Link} from "react-router-dom";

function Dropdown(props) {
  
  
    return (
      <>
        <div className="drop-div">
        <ul
          className={'dropdown-menu'}
        >
          {props.list.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="dropdown-link"
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        </div>
      </>
    );
  }
  
  export default Dropdown;
  