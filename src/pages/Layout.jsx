import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

function MainLayout() {
    return(
        <>
          <Navbar /> {/* This Navbar is the shared UI we want across pages */}
          <Outlet />  {/* The actual page which will be rendered across along with the Navbar */}
        </>
    );
}

export default MainLayout;