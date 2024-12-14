import styled from "styled-components";
import banner from "../../assets/sapatos/pngwing.com (2).png"


import { useNavigate } from "react-router-dom";

const Banner2 = () => {
    const LoginButton = styled.button`
    color: white;
    background-color: #7ab8d4;
    border: 0;
    border-radius: 8px;
    width:220px;
    height:48px;
    padding: 10px 20px;
    margin-top:12px;
    font-size:16px;
    font-weight: 700;
  
    &:hover {
      background-color: #699eb6;
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
        color:#7ab8d4;
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
        

        
        @media (min-width: 1024px){
          position:absolute ;
          width: 700px;
          height: 700px;
          transform: translate(-14%, -8%) rotate(-5deg);
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
                    <img className="img" src={banner} alt="" />
                </div>
                <div id="bannerInfos">
                <p className="subtitle">Promoções de até 50%</p>
                <h1 className="title">Ofertas especiais de Natal.⛄</h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam exercitationem doloribus </p>
                <LoginButton onClick={()=> navigate("/products")}>Ver produtos </LoginButton>
                </div>
            </div>
       </Banner>
     );
}
 
export default Banner2;