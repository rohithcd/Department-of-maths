import {Link} from "react-router-dom";
import Button from "../Button/Button";
import "./Error.css";

const Error = () => {
    return (
        <>
            <div className="section_error">
                <div className="error_main"> 
                    <div className="error_prime">
                        <h1>404</h1>
                    </div>
                    <div className="error_txt">
                        <h2>SITE UNDER CONSTRUCTION!!</h2>
                        <p>{/*Sorry, the page you are looking for doesn't exist.*/}</p>
                        <Link to="/"><Button type="box" class="btn-ctr" name="GO TO HOME"/></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Error;