import styled from "styled-components";
import banner from "../../assets/banner/white-sneaker-nike.png"

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
const Banner1 = () => {

    return ( 
       <>
            <div id="banner">
            <div className="bannerContent">
                <div id="bannerImage">
                <img src={banner} alt="" />
                </div>
                <div id="bannerInfos">
                <p className="banner-P">Melhores ofertas personalizadas</p>
                <h1 className="bannerTitle">Queima de estoque Nike</h1>
                <p className="bannerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam exercitationem doloribus </p>
                <LoginButton>Entrar</LoginButton>
                </div>
            </div>

            </div>
       </>
     );
}
 
export default Banner1;