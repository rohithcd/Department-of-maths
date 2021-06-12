import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"; 


const Layout  = ({children}) => {

    return(
            <>
                <Navbar/>
                    <div>
                        {children}
                    </div>
                <Footer/>
            </>
 
    );

 
} 


export default Layout;
