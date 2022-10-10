import Gallery from "./Gallery"; //Component containing code for displaying the photos

/*---- Importing Images for Olympiad ----*/
import events1 from "../../Assets/gallery/events/events1.jpg";
import events2 from "../../Assets/gallery/events/events2.jpg";
import events3 from "../../Assets/gallery/events/events3.jpg";
import events4 from "../../Assets/gallery/events/events4.jpg";
import events5 from "../../Assets/gallery/events/events5.jpg";
import events6 from "../../Assets/gallery/events/events6.jpg";
import events7 from "../../Assets/gallery/events/events7.jpg";

const Olympiad = () => {
    let pics = [events1, events2, events3, events4, events5, events6, events7];

    return(
        <>
            <Gallery pics={pics}/>
        </>
    );
}

export default Olympiad;