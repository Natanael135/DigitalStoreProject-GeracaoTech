import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "../layout/LayoutPage";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage";
import ImageCarousel from "../components/Carrossel/ImageCarouseul";

const Paths = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/ProductListingPage" element={<ProductListingPage/>}/>
          <Route path="/ProductViewPage" element={<ProductViewPage/>}/>
          <Route path="/Produto-detalhes/:id/:nome" element={<ProductViewPage/>}/>
          <Route path="/teste" element={<ImageCarousel/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
   );
}
 
export default Paths;