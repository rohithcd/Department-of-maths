import Gallery from "./Gallery"; //Component containing code for displaying the photos

/*---- Importing Images for Olympiad ----*/
import events1 from "../../Assets/gallery/events/events1.JPG";
import events2 from "../../Assets/gallery/events/events2.JPG";
import events3 from "../../Assets/gallery/events/events3.JPG";
import events4 from "../../Assets/gallery/events/events4.JPG";
import events5 from "../../Assets/gallery/events/events5.JPG";
import events6 from "../../Assets/gallery/events/events6.JPG";
import events7 from "../../Assets/gallery/events/events7.JPG";

const Olympiad = () => {
    let pics = [events1, events2, events3, events4, events5, events6, events7];

    return(
        <>
            <Gallery pics={pics}/>
        </>
    );
}

export default Olympiad;