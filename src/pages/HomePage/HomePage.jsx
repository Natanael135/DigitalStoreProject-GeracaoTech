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
import svg from "../../assets/icons/Ellipse 11.svg"
import specialOfferImg from "../../assets/banner/Laye 1.png"
import Carroseul from "../../components/Carrossel/Carroseul.jsx";


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
const SpecialOffer = styled.section`
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border:1px solid red;
@media (min-width: 1024px){
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
& #specialOffer-overlay{
  position: relative;
  border:1px solid red;
  width: 280px;
  height: 280px;
@media (min-width: 1024px){
  width: 466px;
  height: 466px;
}

   & #background-svg{
    border:1px solid red;
    width: 280px;
    height: 280px;
    @media (min-width: 1024px){
    width: 466px;
    height: 466px;
  }
    position: absolute;
  }

  & #overlay-shoes{
    border:1px solid red;
    top: 50%;
    width : 301px;
    height:173px;
    position:absolute;
    transform: translate(-6%, -50%);
    @media (min-width:1024px){
      width : 573px;
      height:330px;
      
    }
  }
 }
 & #specialOffer-text{
  width: 360px;
  height: 340px;
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  align-content: center;
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
      <SpecialOffer>
        <div id="specialOffer-overlay">
        <img id="background-svg" src={svg} alt="" />
        <div>
          <img id="overlay-shoes" src={specialOfferImg} alt="" />
        </div>
        </div>
        <div id="specialOffer-text">
          <p>Oferta especial</p>
          <h1>Air Jordan edição de colecionador</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum amet laboriosam autem ullam omnis deleniti voluptatem sit fugit odit quasi minima possimus ut sunt, ducimus atque pariatur vero facilis.</p>
          <LoginButton>Ver Oferta</LoginButton>
        </div>
      </SpecialOffer>

    </HomeContainer>
  );
}
 
export default HomePage;