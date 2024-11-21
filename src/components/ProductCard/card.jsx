import React from "react";
import styled from "styled-components";

// Estilização com styled-components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 292px;
`;

const Image = styled.img`
  width: 292px;
  height: 321px;
  object-fit: cover;
  border-radius: 8px;
`;

const Name = styled.h2`
  font-size: 20px;
  margin: 12px 0;
  text-align: center;
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
const ProductCard = ({ image, name, price, priceDiscount }) => (
  <Card>
    <Image src={image} alt={name} />
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
