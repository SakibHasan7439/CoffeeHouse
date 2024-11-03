import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] py-12">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;