import {Link} from "react-router-dom";
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
                        <h2>PAGE NOT FOUND!!</h2>
                        <p>Sorry, the page you are looking for doesn't exist.</p>
                        <Link to="/"><button className="btn btn-ctr">GO TO HOME</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Error;