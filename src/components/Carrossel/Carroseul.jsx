import styled from "styled-components";
import prevArrow from "../../assets/icons/arrow-left.svg"
import nextArrow from "../../assets/icons/arrow-right.svg"

import "../../global.css"
import Banner1 from "./Banner1";

const CarroseulContainer = styled.div`
& #carouselExampleCaptions{
    height:581px;
    margin-bottom:36px ;
    background-color: var(--light-gray-3);
    @media (min-width:1024px){
      margin-bottom:0px ;
    }
  }
`

const Banner = styled.div`
#banner{
  @media (min-width:1024px){
    padding: 80px 30px ;

  }
  

  & .bannerContent{
    margin: auto;
    width: 85%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row-reverse wrap;
    @media (min-width: 1024px){
      height: 398px;
    }
    & #bannerInfos{
      width: 80%;
      height: 50%;
      padding:30px;
      @media (min-width:1024px){
        width: 50%;
        height: 100%;

      }
    }
    & #bannerImage{
      position: relative;
      width: 80%;
      height: 260px;
      border: 1px solid red;
      @media (min-width:1024px){
        width: 50%;
        height: 100%;
      }
      & img{
        width: 300px;
        height: 400px;
        object-fit: contain;
        transform: translate(-8%, -24%) rotate(-19.34deg);

        
        @media (min-width: 1024px){
          position:absolute ;
          width: 120%;
          height: 150%;
          transform: translate(-16%, -24%) rotate(-19.34deg);
          
          @media (min-width: 1400px){
            width: 150%;
            height: 150%;
            transform: translate(-24%, -24%) rotate(-19.34deg);

          }
      }
    }
    }
  }
}`
const Carroseul = () => {
    return ( 
        <CarroseulContainer>
        <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Banner>
              <Banner1/>
            </Banner>
          </div>
          <div className="carousel-item">
            <div id="banner">
              <img src="..." className="d-block w-100" alt="..."/>
            </div>
          </div>
          <div className="carousel-item">
            <div id="banner">
              <img src="..." className="d-block w-100" alt="..."/>
            </div>
          </div>
          <div className="carousel-item">
            <div id="banner">
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
        </CarroseulContainer>
     );
}
 
export default Carroseul;