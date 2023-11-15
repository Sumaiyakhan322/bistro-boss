import { Outlet,useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Main = () => {
    const location=useLocation()
    const noHeaderFooterLogin=location.pathname.includes('login')
    const noHeaderFooterRegister=location.pathname.includes('register')
    
    return (
        <div>
           {(noHeaderFooterLogin  || noHeaderFooterRegister) || <Navbar></Navbar>}
            <Outlet></Outlet>
           {(noHeaderFooterLogin  || noHeaderFooterRegister) || <Footer></Footer>}
        </div>
    );
};

export default Main;