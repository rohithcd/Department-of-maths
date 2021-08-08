import React, {useState, useEffect} from "react";
import Navbar from "./Components/Reusable//Navbar/Navbar";
import Footer from "./Components/Reusable/Footer/Footer"; 

export const UserContext = React.createContext();

const Layout  = ({children}) => {
    const breakpoint = 980;
    const [width, setWidth] = useState(window.innerWidth);
    const [state, setState] = useState(false);
    const menu = () => {setState(!state)}

    useEffect(() => {
        window.addEventListener("resize", () => {setWidth(window.innerWidth)});
        
    }, []); 

    if(width <= 980 && state === true) {document.body.style.overflowY = "hidden"}
    else {document.body.style.overflowY = "auto"}
    
    return(
        <>
            <UserContext.Provider value={{width, state, breakpoint, menu}}>
                <Navbar/>
                    <div>
                        {children}
                    </div>
                <Footer/>
            </UserContext.Provider>      
        </>
 
    );
} 

export default Layout;
