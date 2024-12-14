import styled from "styled-components";
import banner from "../../assets/banner/white-sneaker-nike.png"
import svg from "../../assets/icons/Ornament 11.png"
import "../../global.css"
import { useNavigate } from "react-router-dom";

const LoginButton = styled.button`
  color: white;
  background-color: #c92071;
  border: 0;
  border-radius: 8px;
  width:220px;
  height:48px;
  padding: 10px 20px;

  &:hover {
    background-color: #991956;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;


const Banner = styled.div`
  width: 100%;
  height: 571px;

  & .bannerContent{

    margin-top: 14px;
    width: 100%;
    height: 571px;
    display: flex;
    flex-flow:row-reverse wrap;
    @media (min-width: 1024px){
      height: 398px;
    }
    & #bannerInfos{
      width: 80%;
      height: 50%;
      padding: 80px 30px;
      @media (min-width:1024px){
        width: 50%;
        height: 571px;

      }
     & .title{
      font-size: 64px;
      font-weight: 700;
      color:var(--dark-gray);
      line-height:66px;
      }
      & .subtitle{
        color:#FFB31F;
        font-size: 16px;
        font-weight:700 ;
        margin:2px;
      }
      & .text{
        font-size:18px;
        font-weight: 400;
        color: var(--dark-gray-2);
      }
    }
    & #bannerImage{
      position: relative;
      width: 80%;
      height: 260px;
      @media (min-width:1024px){
        width: 50%;
        height: 571px;
      }
      & .img{
        width: 300px;
        height: 400px;
        object-fit: contain;
        transform: translate(-8%, -24%) rotate(-19.34deg);

        
        @media (min-width: 1024px){
          position:absolute ;
          width: 110%;
          height: 150%;
          transform: translate(-16%, -15%) rotate(-19.34deg);
          
          @media (min-width: 1400px){
            width: 125%;
            height: 125%;
            transform: translate(-24%, -24%) rotate(-19.34deg);

          }
      }
    }
    & .svg{
      position:absolute ;
      width: 120px;
      height: 120px;
      top:15%;
      right:-5%;
    }
  }
}
`
const Banner1 = () => {
  let navigate = useNavigate();
    return ( 
       <Banner>
            <div className="bannerContent">
                <div id="bannerImage">
                <img className="svg" src={svg} alt="" />
                <img className="img" src={banner} alt="" />
                </div>
                <div id="bannerInfos">
                <p className="subtitle">Melhores ofertas personalizadas</p>
                <h1 className="title">Queima de estoque Nike🔥</h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam exercitationem doloribus </p>
                <LoginButton onClick={()=> navigate("/products")}>Ver Ofertas</LoginButton>
                </div>
            </div>
       </Banner>
     );
}
 
export default Banner1;