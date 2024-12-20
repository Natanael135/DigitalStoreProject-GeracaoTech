import React from "react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard/card";

const ListingContainer = styled.div`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%; /* 4 cards lado a lado no desktop */
  padding: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards lado a lado no mobile */
  }
`;

// Componente ProductListing
const ProductListing = ({ products, width, gap }) => (



  <ListingContainer style={{width: width, gap: gap}}>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        priceDiscount={product.priceDiscount}
        subTitle={product.subTitle}
        percentageDiscount={product.percentageDiscount}
      />
    ))}
  </ListingContainer>
);

export default ProductListing;
