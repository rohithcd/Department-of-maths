import React from "react";
import Carousel from "./Carousel/Carousel_L";
import Box from "./Box/Box";
import About from "./About/About";
import Explore from "./Explore/Explore";
import Banner from "./Banner/Banner";
import Program from "./Program/Program";

import "./Main.css";

const Main = () => {
    return(
        <>
            <Carousel />
            <Explore/>
            <About/>
            <Box />
            <Program/>
            <Banner />
        </>
    );
}

export default Main;