import React from "react";
import styled from "styled-components";

// Estilização com styled-components
const Card = styled.div`
font-family: 'Inter', sans-serif;
margin: 0;
padding: 0;
box-sizing: border-box;
`;

const Image = styled.img`
display: flex;
width: 292px;
height: 321px;
background: #FFFFFF;
box-shadow: 6px 16px 30px rgba(105, 98, 98, 0.05);
border-radius: 4px;
background-image: url(../../img/produtosAlta/tenis.svg);
background-repeat:no-repeat;
background-position: 600% 40%;
`;

const Name = styled.h2`
font-weight: 400;
font-size: 24px;
letter-spacing: 0.75px;
color: #474747;
`;

const P = styled`
font-weight: 400;
font-size: 24px;
letter-spacing: 0.75px;
background-color: #f6aa1c;
`;

const subTitle = styled.p`
font-weight: 35px;
font-size: 24px;
letter-spacing: 0.75px;
color: #474747;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Price = styled.span`
  color: darkgray;
  font-size: 24px;
`;

const PriceOld = styled.span`
  color: lightgray;
  font-size: 24px;
  text-decoration: line-through;
`;

const PriceDiscount = styled.span`
  color: darkgray;
  font-size: 24px;
  margin-top: 4px;
`;

// Componente ProductCard
const ProductCard = ({ image, name, price, priceDiscount, subTitle, percentageDiscount }) => (
  <Card>
    <Image src={image} alt={name} />
    <percentageDiscount>{percentageDiscount}</percentageDiscount>
    <subTitle>{subTitle}</subTitle>
    <Name>{name}</Name>
    <PriceContainer>
      {priceDiscount ? (
        <>
          <PriceOld>R${price}</PriceOld>
          <PriceDiscount>R${priceDiscount}</PriceDiscount>
        </>
      ) : (
        <Price>R${price}</Price>
      )}
    </PriceContainer>
  </Card>
);

export default ProductCard;
