import styled from "styled-components";
import banner from "../../assets/sapatos/pngwing.com (1).png"
import thunder from "../../assets/icons/iconfinder-weather-weather-forecast-lightning-storm-energy-3859139_121230.svg"

import { useNavigate } from "react-router-dom";

const Banner2 = () => {
    const LoginButton = styled.button`
    color: white;
    background-color: #FFB31F;
    border: 0;
    border-radius: 8px;
    width:220px;
    height:48px;
    padding: 10px 20px;
    margin-top:12px;
    font-size:16px;
    font-weight: 700;
  
    &:hover {
      background-color: #eca81e;
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
      & .background{
        width: 1500px;
        height: 750px;
        position: absolute;
        top:50%;
        transform: translate(-30%, -45%) rotate(52deg);

      }
      & .img{
        width: 300px;
        height: 400px;
        object-fit: contain;
        

        
        @media (min-width: 1024px){
          position:absolute ;
          width: 100%;
          height: 100%;
          transform: translate(-8%, -1%);
          

      }
    }
  }
}
`
let navigate = useNavigate();
    return ( 
       <Banner>
            <div className="bannerContent">
                <div id="bannerImage">
                    <img className="background" src={thunder} alt="" />
                    <img className="img" src={banner} alt="" />
                </div>
                <div id="bannerInfos">
                <p className="subtitle">Promoções de até 50%</p>
                <h1 className="title">Ofertas relâmpago.⚡</h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam exercitationem doloribus </p>
                <LoginButton onClick={()=> navigate("/products")}>Ver produtos </LoginButton>
                </div>
            </div>
       </Banner>
     );
}
 
export default Banner2;