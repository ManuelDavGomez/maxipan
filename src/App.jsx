import React from "react";
import Foot from "./components/Footer/Foot.jsx";
import Navbar from "./components/Nav/Navbar.jsx";
import { ShopContextProvider } from "./context/Shop_context.jsx";
import Nav_routes from "./routes/nav_routes.jsx";

const App = () => {

  return (
    <>
      <ShopContextProvider>
        <Nav_routes />
        <Navbar />
        <Foot />
      </ShopContextProvider>
    </>
  );
};

export default App;
