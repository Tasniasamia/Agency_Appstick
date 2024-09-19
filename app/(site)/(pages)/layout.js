import Footer from "@/app/components/site/layout/footer";
import Header from "@/app/components/site/layout/header";


const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;