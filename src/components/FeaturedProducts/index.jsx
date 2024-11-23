import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"; // Importando NavLink para navegação
import blusa from "../../assets/blusa-destaque.png";
import tenis from "../../assets/tenis-destaque.png";
import fone from "../../assets/fone-destaque.png";
import blusaIcon from "../../assets/icons/blusa-icon.svg";
import calcaIcon from "../../assets/icons/calca-icon.svg";
import boneIcon from "../../assets/icons/bone-icon.svg";
import foneIcon from "../../assets/icons/fone-icon.svg";
import tenisIcon from "../../assets/icons/sapato-icon.svg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f1f1f;
  letter-spacing: 0.046875rem;
  margin: 20px 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

const Card = styled.article`
  background-color: #dbe3f2;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 4px;
  position: relative;

  @media (min-width: 768px) {
    max-width: 25.31rem;
    height: 15.68rem;
  }
`;

const CardInfo = styled.div`
  width: 100%;
  max-width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  flex-grow: 1;
  overflow: hidden;
`;

const Offer = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem; 
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
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Button = styled.a`
  display: inline-block;
  width: 100%;
  max-width: 9.56rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: #c92071;
  transition: 0.3s ease;

  &:hover {
    background-color: #c92071;
    color: #ffffff;
  }
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 10rem;
  object-fit: contain;
  flex-shrink: 0;
`;

const FeaturedSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const FeaturedTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 120px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
  &:hover{
    color: #c92071;
    transform: scale(1.02);
    filter: invert(18%) sepia(78%) saturate(5533%) hue-rotate(323deg) brightness(96%) contrast(99%);
  }
`;

const IconText = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const items = [
  {
    id: 1,
    offer: "30% OFF",
    title: "Novo drop Supreme",
    image: blusa,
    alt: "blusa com estampa",
  },
  {
    id: 2,
    offer: "30% OFF",
    title: "Coleção Adidas",
    image: tenis,
    alt: "tênis Adidas",
  },
  {
    id: 3,
    offer: "30% OFF",
    title: "Novo Beats Bass",
    image: fone,
    alt: "fone Beats Bass",
  },
];

function FeaturedProducts() {
  return (
    <Section>
      <Title>Coleções em destaque</Title>
      <CardContainer>
        {items.map((item) => (
          <Card key={item.id}>
            <Offer>{item.offer}</Offer>
            <CardInfo>
              <CardTitle>{item.title}</CardTitle>
              <Button href="#">Comprar</Button>
            </CardInfo>
            <CardImage src={item.image} alt={item.alt} />
          </Card>
        ))}
      </CardContainer>

      {/* Navegação semântica com styled-components */}
      <FeaturedSection>
        <FeaturedTitle>Itens em destaque</FeaturedTitle>
        <IconContainer>
          <IconItem>
            <Icon src={blusaIcon} alt="Blusa" />
            <IconText>Blusa</IconText>
          </IconItem>
          <IconItem>
            <Icon src={calcaIcon} alt="Calça" />
            <IconText>Calça</IconText>
          </IconItem>
          <IconItem>
            <Icon src={boneIcon} alt="Boné" />
            <IconText>Boné</IconText>
          </IconItem>
          <IconItem>
            <Icon src={foneIcon} alt="Fone" />
            <IconText>Fone</IconText>
          </IconItem>
          <IconItem>
            <Icon src={tenisIcon} alt="Tênis" />
            <IconText>Tênis</IconText>
          </IconItem>
        </IconContainer>
      </FeaturedSection>
    </Section>
  );
}

export default FeaturedProducts;
