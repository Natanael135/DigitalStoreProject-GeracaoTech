import React from "react";
import styled from "styled-components";

// Estilização com styled-components
const Card = styled.div`
  width: 292px;
  height: 439px;
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
  background-repeat: no-repeat;
  background-position: 600% 40%;
`;

const Name = styled.h2`
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.75px;
  color: #474747;
`;

const Discount = styled.div`
  width: 96px;
  height: 32px;
  color: #474747;
  display: flex;
  justify-content: start;
  text-align: center;
  align-items: start;
  font-size: 1rem;
  font-weight: bold;
  background-color: #E7FF86;
  padding: 5 15 5 15;
  border-radius: 29px;
  gap: 10px;
  box-sizing: border-box;
`;

const SubTitle = styled.h6`
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.75px;
  color: #474747;
  margin: 10px 0;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  color: #1F1F1F;
  font-size: 24px;
`;

const PriceOld = styled.span`
  color: lightgray;
  font-size: 24px;
  text-decoration: line-through;
`;

const PriceDiscount = styled.span`
  color: #1F1F1F;
  font-weight: bold;
  font-size: 24px;
  margin-top: 4px;
`;

// Componente ProductCard
const ProductCard = ({ image, name, price, priceDiscount, subTitle, percentageDiscount }) => (
  <Card>
    <Image src={image} alt={name} />
    {percentageDiscount && <Discount>{percentageDiscount}</Discount>}
    {subTitle && <SubTitle>{subTitle}</SubTitle>}
    <Name>{name}</Name>
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

export default ProductCard;