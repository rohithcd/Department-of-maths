import Navbar from "./Components/Reusable//Navbar/Navbar";
import Footer from "./Components/Reusable/Footer/Footer"; 


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
