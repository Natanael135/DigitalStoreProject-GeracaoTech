
import Section from "../../components/Section";
import styled from "styled-components";
import "../../global.css"



import ProductListing from "../../components/ProductListing/ProductListing";
import products from "../../components/products/products.json"
import FeaturedProducts from "../../components/FeaturedProducts"


import SpecialOffer from "../../components/SpecialOffer/SpecialOffer.jsx";
import Gallery from "../../components/Carrossel/Gallery.jsx";



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
  & .products{
    margin: 0 20px;
  }
`


const HomePage = () => {

  return ( 
    <HomeContainer>

        <Gallery  width="100%" height="681px" />
      <div className="main-content">

        
        

          <FeaturedProducts/>
        

        <Section title="Produtos em alta" link="true">
          <ProductListing products={products} />  
        </Section>
      </div>

      <SpecialOffer/>

    </HomeContainer>
  );
}
 
export default HomePage;