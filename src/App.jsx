// import { useState } from "react";
import Routing from "./components/Routing/Routing";
// import { CurrencyContext } from "./context/CurrencyContext";
// import Home from "./pages/Home";
// import Banner from "./components/Banner/Banner";
// import CoinTable from "./components/CoinTable/CoinTable";
// import Navbar from "./components/Navbar/Navbar";

function App() {

  // const [currency, setCurrency] = useState('usd');
  return (
    <>
     {/* <CurrencyContext.Provider value={{currency, setCurrency}} > */}
      <Routing />
     {/* </CurrencyContext.Provider> */}
    </>
  );
}

export default App;
