
import Logo from '../Logo/Logo'
import cart from "../../assets/icons/mini-cart.svg"
import styled from "styled-components";
import "../../global.css"
import search from "../../assets/icons/search.svg"

const Header = () => {
  {
    /*
    import { useState } from "react";
import { useNavigate } from "react-router-dom";

    const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      if (searchTerm.trim()) {
        navigate(`/product?filter=${encodeURIComponent(searchTerm)}`);
        setSearchTerm("");
      }
    }
  };*/ 
  }
  


const HeaderContainer = styled.header`
  width: 100%;
  height:20vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #FFFFFF;
  gap:8px;
  & .inputfield{
    position: relative; 

    & .search-input {
      width: 709px;
      height: 3rem;
      font-size: 14px;
      padding: 4px 14px;
      background-color: var(--light-gray-3);
      border: 0;
      border-radius: 8px;
      color:var(--dark-gray-3);
    }

    & .search-button {
    width: 24px;
    height: 24px;
    cursor: pointer;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translateY(-50%);
    }
    
}

 & .entrar {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  background-color: var(--primary);
  border-radius: 4px;
  color: var(--white);
  font-size: 14px;
  font-weight: bold;
}
& .cadastro{
    color: var(--dark-gray-2);
    &:hover{
        text-decoration: underline;
    }
}

`


  return (
    <HeaderContainer>
      <Logo tag="Header"/>
      <div className="inputfield">
        <input
          className="search-input"
          id="produto"
          type="text"
          placeholder="Pesquisar Produto..."

        />
        {/* <button className="search-button" onClick={handleSearch}>
        </button> */}
        <span className="search-button"  ><img src={search} alt="search-icon" /></span>
      </div>
      <a href="#" className="cadastro">Cadastre-se</a>
      <a href="#" className="entrar">Entrar</a>
      <div className="cart">
        <img src={cart} alt="Carrinho de compras" />
      </div>
    </HeaderContainer>
  );
};

export default Header;