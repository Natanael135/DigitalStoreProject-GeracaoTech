import { Link } from "react-router-dom";
import colection1 from "../../assets/banner/collection-1.png"
import colection2 from "../../assets/banner/collection-2.png"
import colection3 from "../../assets/banner/collection-3.png"
import banner1 from "../../assets/banner/airjordan.png"
import Section from "../../components/Section";
import styled from "styled-components";
import "../../global.css"

import prevArrow from "../../assets/icons/arrow-left.svg"
import nextArrow from "../../assets/icons/arrow-right.svg"
import ProductCard from "../../components/ProductCard/card";
import banner from "../../assets/banner/white-sneaker-nike.png"

import ProductListing from "../../components/ProductListing/ProductListing";
import products from "../../components/products/products.json"
import FeaturedProducts from "../../components/FeaturedProducts"

import Carroseul from "../../components/Carrossel/Carroseul.jsx";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer.jsx";


const LoginButton = styled.button`
  color: white;
  background-color: #c92071;
  border: 0;
  border-radius: 8px;
  padding: 10px 20px;
  width: 200px;

  &:hover {
    background-color: #991956;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const HomeContainer = styled.main`
background-color: #F9F8FE;
& ul{
  display: flex;
  flex-flow: row wrap;
  gap:12px;
  list-style: none;
    & img{
      width: 405px;
      height: 251px;
      border-radius: 8px;
    }
}
  
  & .main-content{
    padding:30px 50px;
  }
`


const HomePage = () => {

  return ( 
    <HomeContainer>
      <Carroseul/>

      <div className="main-content">

        
        <FeaturedProducts/>

      </div>

      <ProductListing products={products} />
      <SpecialOffer/>

    </HomeContainer>
  );
}
 
export default HomePage;