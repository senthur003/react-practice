
import HeaderComponent from './headerComponent';
import FooterComponent from './footerComponent';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet /> {/* Routed content will be rendered here */}
            <FooterComponent />
        </>
    );
};

export default Layout;