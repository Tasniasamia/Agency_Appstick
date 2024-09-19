import Header from "@/app/components/site/layout/header";


const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Layout;