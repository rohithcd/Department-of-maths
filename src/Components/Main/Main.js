import React, { useState, useEffect } from "react";
import Carousel from "./Carousel/Carousel_L";
import Box from "./Box/Box";
import About from "./About/About";
import Explore from "./Explore/Explore";
import Banner from "./Banner/Banner";
import Program from "./Program/Program";

import "./Main.css";




const Main = () => {

    const [width, setWidth] = useState(0);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });        
    }, []);


    return(
        <>
                <div style={{position: "fixed", top: "20%", right: "0%", zIndex: "9999999",}}>
                   <h2>{width}</h2> 
                </div>
                <Carousel />
                <Explore />
                <About/>
                <Box />
                <Program/>
                <Banner />
          
   
        </>
    );
}

export default Main;