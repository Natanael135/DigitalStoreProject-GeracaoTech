import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Estilização do contêiner
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 292px;
  height: 439px;
  font-family: 'Inter', sans-serif;
  margin-bottom: 2em;
  padding: 0;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 292px;
  height: 321px;
  background: #FFFFFF;
  box-shadow: 6px 16px 30px rgba(105, 98, 98, 0.05);
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 163px;
    height: 179.19px;
  }
`;

const Name = styled.h2`
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.75px;
  color: var(--dark-gray-2);
  white-space: nowrap;        /* Impede a quebra de linha */
  overflow: hidden;           /* Esconde o excesso de texto */
  text-overflow: ellipsis;    /* Adiciona '...' quando o texto é muito grande */

  @media (max-width: 768px) {
    font-size: 14px;          /* Ajusta o tamanho da fonte no mobile */
    width: 100%;              /* Garante que o nome ocupe toda a largura disponível */
    display: block;           /* Faz o nome ocupar a linha inteira */
    max-width: 100%;          /* Limita a largura do nome */
    text-overflow: ellipsis;  /* Garante o truncamento com '...' */
  }
`;

const Discount = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 6rem;
  height: 2rem;
  background-color: #e7ff86;
  border-radius: 1.81rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  z-index: 1;
`;

const SubTitle = styled.h6`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.75px;
  color: var(--light-gray);
  margin-top: 20px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: var(--dark-gray);
`;

const PriceOld = styled.span`
  color: var(--light-gray);
  font-weight: 400;
  font-size: 24px;
  text-decoration: line-through;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PriceDiscount = styled.span`
  color: #1F1F1F;
  font-weight: bold;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Componente ProductCard
const ProductCard = ({ image, name, price, priceDiscount, subTitle, percentageDiscount }) => {
  const [isMobile, setIsMobile] = useState(false);

  // UseEffect para detectar a largura da tela e definir o estado de isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Chama a função de resize inicialmente
    handleResize();

    // Adiciona o ouvinte de resize
    window.addEventListener("resize", handleResize);

    // Limpa o ouvinte de resize ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Função para truncar o nome apenas quando em telas pequenas
  const truncateName = (name) => {
    if (isMobile) {
      return name.length > 18 ? name.slice(0, 18) + "..." : name;
    }
    return name;
  };

  return (
    <Card>
      <Image src={image} alt={name} />
      {percentageDiscount && <Discount>{percentageDiscount}</Discount>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Name>{truncateName(name)}</Name>  {/* Aplica a função de truncamento no nome */}
      <PriceContainer>
        {priceDiscount ? (
          <>
            <PriceOld>{price}</PriceOld>
            <PriceDiscount>{priceDiscount}</PriceDiscount>
          </>
        ) : (
          <Price>{price}</Price>
        )}
      </PriceContainer>
    </Card>
  );
};

export default ProductCard;