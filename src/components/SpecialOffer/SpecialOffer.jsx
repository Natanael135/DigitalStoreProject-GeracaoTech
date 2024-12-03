import styled from "styled-components"
import svg from "../../assets/icons/Ellipse 11.svg"
import specialOfferImg from "../../assets/banner/Laye 1.png"

const SpecialOffer =()=>{

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

const SpecialOffer = styled.section`
    width: 100%;
    background-color: #FFFFFF;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px){
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    }
    & #specialOffer-overlay{
    position: relative;
    padding: 24px;
    width: 280px;
    height: 280px;
    @media (min-width: 1024px){
    width: 466px;
    height: 466px;
    }

   & #background-svg{

    width: 240px;
    height: 240px;
    position: absolute;
    @media (min-width: 1024px){
    width: 400px;
    height: 400px;
  }
  }

  & #overlay-shoes{

    top: 50%;
    width : 301px;
    height:173px;
    position:absolute;
    transform: translate(-12%, -50%);
    @media (min-width:1024px){
      transform: translate(-20%, -50%);
      width : 553px;
      height:310px;
      
    }
  }
 }
 & #specialOffer-text{
  width: 480px;
  height: 340px;
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  align-content: center;
 }
 & .offerText{
  font-weight: 700;
  font-size: 14px;
  color: var(--primary);
 }
& .offerTitle{
  font-weight: 700;
  font-size: 48px;
  color: var(--dark-gray-2);
}
& .offer-P{
  font-weight: 400;
  font-size: 16px;
  color: var(--dark-gray-2);
}
`
return (
    <SpecialOffer>
    <div id="specialOffer-overlay">
    <img id="background-svg" src={svg} alt="" />
    <div>
      <img id="overlay-shoes" src={specialOfferImg} alt="" />
    </div>
    </div>
    <div id="specialOffer-text">
      <p className="offerText">Oferta especial</p>
      <h1 className="offerTitle">Air Jordan edição de colecionador</h1>
      <p className="offer-P">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum amet laboriosam autem ullam omnis deleniti voluptatem sit fugit odit quasi minima possimus ut sunt, ducimus atque pariatur vero facilis.</p>
      <LoginButton>Ver Oferta</LoginButton>
    </div>
  </SpecialOffer>
)
}
export default SpecialOffer
