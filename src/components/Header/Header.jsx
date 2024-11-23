import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MiniCart from '../../assets/icons/mini-cart.svg';
import SearchIcon from '../../assets/icons/search.svg';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .logo img {
    @media (min-width: 768px) {
      width: 253px;
      height: 44px;
    }
    width: 138px;
    height: 24px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
`;

const TopHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const MenuIcon = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: #1F1F1F;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100%;
  background-color: #fafafa;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px 20px;
  transition: left 0.3s ease-in-out;
  z-index: 1000;

  a {
    text-decoration: none;
    color: #474747;
    font-weight: 400;
    margin: 10px 0;

    &:hover {
      color: #c92071;
      text-decoration: underline solid #c92071;
      text-underline-offset: 5px;
      text-decoration-thickness: 3px;
      border-radius: 1.5px;
      width: fit-content;
    }
  }

  .sidebar-bottom {
    margin-left: 0;
  
    display: flex;
    flex-direction: row-reverse;
    gap: 5px;
    align-items: center;
    margin-inline-end: auto;
    margin-block-start: auto;
  }

  .sidebar-bottom a {
    display: block;
    text-decoration: none;
  }
  &:hover {
    border-bottom: none;
  }
`;

const CloseIcon = styled.div`
  font-size: 1.5rem;
  color: #474747;
  cursor: pointer;
  align-self: flex-end;
`;

const LinksContainer = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
        justify-content: center;
        gap: 20px;
        align-self: baseline;
        padding: 40px 20px 29px 20px;

    a {
      text-decoration: none;
      color: #474747;
      font-weight: 400;
      font-size: 16px;

      &:hover {
        font-weight: bold;
        color: #c92071;
        text-decoration: underline solid #c92071;
        text-underline-offset: 5px;
        text-decoration-thickness: 3px;
        border-radius: 1.5px;
      }
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  border-radius: 8px;
  flex: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  height: 40px;
  border: 0;
  background: transparent;
  padding: 0 10px;
`;

const SearchButton = styled.button`
  background-color: lightgray;
  border: 0;
  width: 50px;
  cursor: pointer;
`;

const CartIcon = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  .cart-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    background-color: #ee4266;
    color: white;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    display: block; /* Exibir o ícone no mobile */
  }
`;

const SignUpLink = styled(Link)`
  text-decoration: underline;
  color: #474747;

  &:hover {
    color: #991956;
    margin-bottom: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

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

const HeaderButtons = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export default function Header() {
  const [selectedLink, setSelectedLink] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <TopHeader>
          <MenuIcon onClick={toggleSidebar}>
            <FaBars />
          </MenuIcon>
          <Link to="/">
            <Logo tag="Header" />
          </Link>
          <SearchBar>
            <SearchInput type="text" placeholder="Pesquisar produto..." />
            <SearchButton>
              <img src={SearchIcon} alt="Botão Pesquisar" />
            </SearchButton>
          </SearchBar>
          <CartIcon href="">
            <img src={MiniCart} alt="mini-cart" />
            <div className="cart-badge">1</div>
          </CartIcon>

          <HeaderButtons>
            <SignUpLink to="/Cadastro">Cadastre-se</SignUpLink>
            <Link to="/Login">
              <LoginButton>Entrar</LoginButton>
            </Link>
          </HeaderButtons>
        </TopHeader>

        <LinksContainer>
          <Link
            to="/"
            className={selectedLink === "Home" ? "selected" : ""}
            onClick={() => setSelectedLink("Home")}
          >
            Home
          </Link>
          <Link
            to="/ProductListingPage"
            className={selectedLink === "Produtos" ? "selected" : ""}
            onClick={() => setSelectedLink("Produtos")}
          >
            Produtos
          </Link>
          <Link
            to="/ProductViewPage"
            className={selectedLink === "Categorias" ? "selected" : ""}
            onClick={() => setSelectedLink("Categorias")}
          >
            Categorias
          </Link>
          <Link
            to="/"
            className={selectedLink === "Pedidos" ? "selected" : ""}
            onClick={() => setSelectedLink("Pedidos")}
          >
            Meus Pedidos
          </Link>
        </LinksContainer>
      </HeaderContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <CloseIcon onClick={closeSidebar}>
          <FaTimes />
        </CloseIcon>
        <p>Páginas</p>
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <Link to="/ProductListingPage" onClick={closeSidebar}>Produtos</Link>
        <Link to="/ProductViewPage" onClick={closeSidebar}>Categorias</Link>
        <Link to="/" onClick={closeSidebar}>Meus Pedidos</Link>
        <div className="sidebar-bottom">
          <SignUpLink to="/Cadastro" onClick={closeSidebar}>Cadastre-se</SignUpLink>
          <Link to="/Login" onClick={closeSidebar}>
            <LoginButton>Entrar</LoginButton>
          </Link>
        </div>
      </Sidebar>
    </HeaderWrapper>
  );
}
