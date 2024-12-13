import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "../layout/LayoutPage";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage" ;


const Paths = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/ProductListingPage" element={<ProductListingPage/>}/>
          <Route path="/product/:id" element={<ProductViewPage/>}/>
          {/* <Route path="/teste" element={<ImageCarousel  radius="4px" width="100%" height="681px"/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>

    </>
   );
}
 
export default Paths;