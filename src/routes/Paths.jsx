import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "../layout/LayoutPage";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage" ;
import BuyBox from "../components/BuyBox/BuyBox";
import ProductOptions from "../components/ProductOptions/ProductOptions";


const Paths = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/Products" element={<ProductListingPage/>}/>
          <Route path="/product/:id" element={<ProductViewPage/>}/>
          <Route path="/teste" element={<ProductOptions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
   );
}
 
export default Paths;