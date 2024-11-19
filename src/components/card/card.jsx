import React from 'react';
import styled from 'styled-components';

// Styled Components
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
`;

const CardPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 8px 12px;
  border-radius: 4px;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente de lista de cards
const CardList = ({ items }) => {
  return (
    <CardContainer>
      {items.map((item) => (
        <Card key={item.id}>
          <CardTitle>{item.title}</CardTitle>
          <CardPrice>{item.price}</CardPrice>
          <CardLink href={item.link}>Saiba mais</CardLink>
        </Card>
      ))}
    </CardContainer>
  );
};