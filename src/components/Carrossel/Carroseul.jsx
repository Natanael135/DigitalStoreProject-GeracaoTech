import styled from "styled-components";
import prevArrow from "../../assets/icons/arrow-left.svg"
import nextArrow from "../../assets/icons/arrow-right.svg"
import banner from "../../assets/banner/white-sneaker-nike.png"
import "../../global.css"

const CarroseulContainer = styled.div`
& #carouselExampleCaptions{
    height:581px;
    background-color: var(--light-gray-3);
    & #banner{
      padding: 30px 30px ;

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
          @media (min-width:1024px){
            width: 50%;
            height: 100%;

          }
        }
        & #bannerImage{
          position: relative;
          width: 80%;
          height: 50%;
          border: 1px solid red;
          @media (min-width:1024px){
            width: 50%;
            height: 100%;
          }
          & img{
            position:absolute ;
            width: 460px;
            height: 400px;
            object-fit: contain;
            transform: rotate(-19.34deg);
            
            @media (min-width: 1024px){
              right: -2%;
              top: -30%;
              width: 120%;
              height: 150%;
              @media (min-width: 1400px){
                width: 150%;
                height: 150%;
                right: -20%;
                top: -35%;
              }
          }
        }
        }
      }
    }
  }
`
const LoginButton = styled.button`
  color: white;
  background-color: #c92071;
  border: 0;
  border-radius: 8px;
  padding: 10px 20px;

  &:hover {
    background-color: #991956;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
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
            <div id="banner">
              <div className="bannerContent">
                <div id="bannerImage">
                  <img src={banner} alt="" />
                </div>
                <div id="bannerInfos">
                  <h6>Melhores ofertas personalizadas</h6>
                  <h1>Queima de estoque Nike</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam exercitationem doloribus </p>
                  <LoginButton>Entrar</LoginButton>
                </div>
              </div>

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