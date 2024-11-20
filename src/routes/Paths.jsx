import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "../layout/LayoutPage";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage";

const Paths = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/ProductList" element={<ProductListingPage/>}/>
          <Route path="/DetalhesProdutos" element={<ProductViewPage/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>

    </>
   );
}
 
export default Paths;