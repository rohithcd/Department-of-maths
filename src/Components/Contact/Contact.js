import "./Contact.css";
import Button from "../Reusable/Button/Button";
import {slide2, email, phone} from "../../Exports";
/*import { Map, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%'
  };
*/
const Contact = () => {


    return(
        <>
            <div className="section_contacts">
                <figure>
                    <h2>CONTACT-US</h2>
                    <img src={slide2} alt=""/>
                </figure>
               
                <div className="contact_card-div">
                    <Card source={phone} text={"04842577518, 04842862461"} bt_name={"CALL US"}/>
                    <Card source={email} text={"✉mathscusat@gmail.com"} bt_name={"EMAIL US"}/>
                </div>

                {/*<Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
    />*/}
            </div>
        </>
    );
}

const Card = ({source, text, bt_name}) => {
    return(
        <>
            <div className="contact-card">
                <img src={source} alt=""/>
                <div>
                    <p>Department of Mathematics </p>
                    <p>Cochin University of Science And Technology </p>
                    <p>PIN - 682022, Ernakulam, Kerala </p>
                    <p>{text}</p>
                </div>
                <Button class="btn cont-btn" type="box" name={bt_name}/>
            </div>
        </>
    );
}

export default Contact;

/*export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'
  })(MapContainer); */