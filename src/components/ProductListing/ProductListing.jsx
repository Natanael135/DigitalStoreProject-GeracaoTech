import React from "react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard/card";

// Estilização do contêiner
const ListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

// Componente ProductListing
const ProductListing = ({ products }) => (
  <ListingContainer>
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