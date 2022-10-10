import Gallery from "./Gallery"; //Component containing code for displaying the photos

/*----Importing Images for Campus ----*/
// import img1 from "../../Assets/gallery/img1.jpg";
// import img2 from "../../Assets/gallery/img2.jpg";
// import img3 from "../../Assets/gallery/img3.jpg";
// import img4 from "../../Assets/gallery/img4.jpg";
// import img5 from "../../Assets/gallery/img5.jpg";
// import img6 from "../../Assets/gallery/img6.jpg";
// import img7 from "../../Assets/gallery/img7.jpg";
import img8 from "../../Assets/main/slides_img1.jpg"; 
import img9 from "../../Assets/main/slides_img2.jpg";
import img10 from "../../Assets/main/slides_img3.jpg";
import img11 from "../../Assets/gallery/dep1.JPG";
import img12 from "../../Assets/gallery/dep4.JPG";
import img13 from "../../Assets/gallery/dep7.JPG";



const Campus = () => {
    let pics = [img8, img9, img10, img11, img12, img13];

    return(
        <>
            <Gallery pics={pics}/>
        </>
    );
}

export default Campus;
