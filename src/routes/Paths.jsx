import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "../layout/LayoutPage";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage";
import ImageCarousel from "../components/Carrossel/ImageCarouseul";
import Gallery from "../components/Carrossel/Gallery";

const Paths = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/ProductListingPage" element={<ProductListingPage/>}/>
          <Route path="/Produto-detalhes" element={<ProductViewPage/>}/>
          <Route path="/Produto-detalhes/:id/:nome" element={<ProductViewPage/>}/>
          <Route path="/teste" element={<Gallery radius="4px" width="100%" height="681px"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
   );
}
 
export default Paths;