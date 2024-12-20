import React from "react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard/card";

const ListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;

  @media (max-width: 768px) {
    justify-content: space-between; /* Ajusta o alinhamento para mobile */
  }
`;

// Componente ProductListing
const ProductListing = ({ products, width, gap }) => {
  // Limita o número de produtos a 8
  const limitedProducts = products.slice(0, 8);

  return (
    <ListingContainer style={{ width: width, gap: gap }}>
      {limitedProducts.map((product) => (
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
};

export default ProductListing;
