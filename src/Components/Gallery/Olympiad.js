import Gallery from "./Gallery"; //Component containing code for displaying the photos

/*---- Importing Images for Olympiad ----*/
import olympiad1 from "../../Assets/gallery/olympiad/olympiad_img1.jpg";
import olympiad2 from "../../Assets/gallery/olympiad/olympiad_img2.jpg";
import olympiad3 from "../../Assets/gallery/olympiad/olympiad_img3.jpg";
import olympiad4 from "../../Assets/gallery/olympiad/olympiad_img4.jpg";
import olympiad5 from "../../Assets/gallery/olympiad/olympiad_img5.jpg";
import olympiad6 from "../../Assets/gallery/olympiad/olympiad_img6.jpg";
import olympiad7 from "../../Assets/gallery/olympiad/olympiad_img7.jpg";

const Olympiad = () => {
    let pics = [olympiad1, olympiad2, olympiad3, olympiad4, olympiad5, olympiad6, olympiad7];

    return(
        <>
            <Gallery pics={pics}/>
        </>
    );
}

export default Olympiad;