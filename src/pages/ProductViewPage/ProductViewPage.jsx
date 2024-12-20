import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../global.css";
import ProductListing from "../../components/ProductListing/ProductListing";

import Section from "../../components/Section";
import products from "../../components/products/products.json";

import Gallery from "../../components/Carrossel/Gallery";
import BuyBox from "../../components/BuyBox/BuyBox";
import ProductOptions from "../../components/ProductOptions/ProductOptions";

const ProdutoContainer = styled.div`
  background-color: var(--light-gray-3);
  padding: 12px 80px;

  & ul {
    padding: 0;
    display: flex;
    gap: 8px;
    list-style: none;

    & li a {
      text-decoration: none;
      color: var(--dark-gray-2);
      font-weight: 500;
      font-size: 14px;
    }
    & .Home {
      color: var(--dark-gray-1);
      font-weight: 700;
    }
  }

  & .Product-details {
    display: flex;
  }

  & .product-title {
    font-size: 32px;
    font-weight: 700;
    color: var(--dark-gray);
  }

  & .product-category {
    font-weight: 500;
    font-size: 12px;
    color: var(--dark-gray-3);
  }

  & .subtitle {
    font-weight: 700;
    font-size: 14px;
    color: var(--light-gray);
  }
  & .description-text {
    font-weight: 500;
    font-size: 14px;
    color: var(--dark-gray-2);
  }

  & .buy-button {
    width: 220px;
    height: 48px;
    background-color: #ffb31f;
    border: 0;
    border-radius: 8px;
    color: var(--white);
    font-size: 16px;
    font-weight: 700;
  }
`;

const StyledSection = styled(Section)`
  & > div {
    display: grid;
    grid-template-rows: repeat(4, 1fr); /* 4 cards no desktop */
    gap: 24px;

    @media (max-width: 768px) {
      grid-template-rows: repeat(2, 1fr); /* 2 cards no mobile */
      gap: 16px;
    }
  }
`;

const ProductViewPage = () => {
  const produto = {
    nome: "Tênis Nike Revolution 6 Next Nature Masculino",
    categoria: "Casual",
    marca: "Nike",
    referencia: 87094321,
    nota: 3.5,
    avaliacoes: 70,
    preco: "219,00",
    desconto: "219,00",
    descricao:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde ratione tempore voluptatum enim voluptatibus,",
    tamanhos: [39, 40, 41, 42, 43],
    cores: ["6FEEFF", "FF6969", "5E5E5E", "6D70B7"],
  };

  const link = {
    text: "Ver todos",
    href: "/products",
  };

  // Limite de 4 produtos para exibir no desktop e 2 no mobile
  const limitedProducts = products.slice(0, 4);

  return (
    <ProdutoContainer>
      <ul>
        <li>
          <Link className="Home">Home /</Link>
        </li>
        <li>
          <Link> Produtos /</Link>
        </li>
        <li>
          <Link> Tênis /</Link>
        </li>
        <li>
          <Link> Nike /</Link>
        </li>
        <li>
          <Link> {produto.nome}</Link>
        </li>
      </ul>
      <section className="Product-details">
        <Gallery radius="4px" width="700px" height="571px" showthumbs={true} />
        <BuyBox
          nome={produto.nome}
          categoria={produto.categoria}
          marca={produto.marca}
          referencia={produto.referencia}
          nota={produto.nota}
          avaliacoes={produto.avaliacoes}
          preco={produto.preco}
          desconto={produto.desconto}
          descricao={produto.descricao}
        >
          <ProductOptions tamanhos={produto.tamanhos} cores={produto.cores} />
        </BuyBox>
      </section>

      <StyledSection title="Produtos relacionados" link={link}>
        
          <ProductListing products={limitedProducts} />
        
      </StyledSection>
    </ProdutoContainer>
  );
};

export default ProductViewPage;
