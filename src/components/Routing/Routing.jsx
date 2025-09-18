import { Route, Routes } from "react-router-dom";
import MainLayout from "../../pages/Layout";
import { lazy, Suspense } from "react";
// import { Facebook } from 'react-content-loader';
import PageLoader from '../PageLoader/PageLoader';

const Home = lazy(() => import('../../pages/Home'));
const CoinDetails = lazy(()=> import('../../pages/CoinDetails')); 

function Routing(){
    return(
      <Routes>
        <Route path="/" element={ <MainLayout />}>
          
          <Route index element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
            
            } />

          <Route path="/details/:coinId" element={
            
            <Suspense fallback={<PageLoader />}>
              <CoinDetails />
            </Suspense>
            
            } />

        </Route>
      </Routes>
    );

}

export default Routing;