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
import ProductListing from "../../components/ProductListing/ProductListing";
import products from "../../components/products/products.json"
import FeaturedProducts from "../../components/FeaturedProducts"

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

  & #banner1, #banner2, #banner3{
    background-color: var(--light-gray-3);
    height:681px;
  }
  & .main-content{
    padding:30px 50px;
  }
`

const HomePage = () => {

  return ( 
    <HomeContainer>
    <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div id="banner1">
              <img src={banner1} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <div className="carousel-item">
            <div id="banner2">
              <img src="..." className="d-block w-100" alt="..."/>
            </div>
          </div>
          <div className="carousel-item">
            <div id="banner2">
              <img src="..." className="d-block w-100" alt="..."/>
            </div>
          </div>
          <div className="carousel-item">
            <div id="banner2">
              <img src="..." className="d-block w-100" alt="..."/>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span aria-hidden="true"><img src={prevArrow} alt="" /></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span  aria-hidden="true"><img src={nextArrow} alt="" /></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="main-content">

        
        <FeaturedProducts/>

      </div>

      <ProductListing products={products} />

    </HomeContainer>
  );
}
 
export default HomePage;