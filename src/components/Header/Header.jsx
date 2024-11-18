import Logo from "../Logo/Logo.jsx";
import cart from "../../assets/icons/mini-cart.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      if (searchTerm.trim()) {
        navigate(`/product?filter=${encodeURIComponent(searchTerm)}`);
        setSearchTerm("");
      }
    }
  };

  return (
    <header className="header">
      <Logo />
      <div>
        <input
          className="search-input"
          id="produto"
          type="text"
          placeholder="Pesquisar Produto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button className="search-button" onClick={handleSearch}>
          <i className="fa fa-search" />
        </button>
      </div>
      <a href="#" className="cadastro">Cadastre-se</a>
      <a href="#" className="entrar">Entrar</a>
      <div className="cart">
        <img src={cart} alt="Carrinho de compras" />
      </div>
    </header>
  );
};

export default Header;
