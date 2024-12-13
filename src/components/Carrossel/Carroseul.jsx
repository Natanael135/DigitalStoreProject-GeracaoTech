import styled from "styled-components";
import prevArrow from "../../assets/icons/arrow-left.svg"
import nextArrow from "../../assets/icons/arrow-right.svg"

import "../../global.css"
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";


const CarrosseulContainer = styled.section`
position: relative;
background-color: var(--light-gray-3);
& .carousel-slide{
  padding: 0;
  margin: 0;
}
& .carousel-indicators{
  position:absolute;
}
& .carousel-item{
  height:571px;
  padding: 0 80px ;
}
& #button{
  width:8%;
  margin: 0;
  padding: 0;
}
`
const Carroseul = ({width, height}) => {
    return ( 
      <CarrosseulContainer>
          <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner" style={{width:`${width}`, height:`${height}`}}>
            <div class="carousel-item active">
              <Banner1/>
            </div>
            <div class="carousel-item">
              <Banner2/>
            </div>
            <div class="carousel-item">
              <Banner3/>
            </div>
            <div class="carousel-item">
              <Banner4/>
            </div>
          </div>
          <button id="button" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span aria-hidden="true"><img src={prevArrow} alt="" /></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button id="button" class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span  aria-hidden="true"><img src={nextArrow} alt="" /></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </CarrosseulContainer>
     );
}
 
export default Carroseul;