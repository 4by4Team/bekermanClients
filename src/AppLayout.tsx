import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

const AppLayout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <div className="pt-16 flex-1">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default AppLayout;
