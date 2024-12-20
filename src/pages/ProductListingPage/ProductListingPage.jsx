import { useState } from 'react';
import styled from 'styled-components';
import Filter from '../../components/Filter';
import FilterIconImg from '../../assets/icons/filter.svg';
import CloseIconImg from '../../assets/icons/close.svg';
import products from '../../components/products/products.json';
import ProductCard from "../../components/ProductCard/card";

// Estilos principais
const ProductListingContainer = styled.main`
  background-color: #f9f8fe;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 30px;
  min-width: 320px;
`;

const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const OrderButtonContainer = styled.div`
  width: 332px;
  height: 60px;
  font-size: 1rem;
  font-weight: 700;
  color: #474747;
  background-color: #f9f8fe;
  border: 1px solid #474747;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
`;

const Label = styled.label`
  text-align: left;
  font-size: 1rem;
`;

const Select = styled.select`
  background-color: #f9f8fe;
  border: none;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: left;
  width: 50%;
  height: 100%;
`;

const FilterContainer = styled.aside`
  background-color: #ffffff;
  border: 1px solid #666666;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 2rem;
  width: 308px;
  height: 720px;

  @media (max-width: 768px) {
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 20;
    transform: ${(props) => (props.showMobileFilter ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const FilterTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #474747;
`;

const Divider = styled.hr`
  width: 248px;
  height: 1px;
  border: none;
  background-color: #cccccc;
`;

const ListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (min-width: 968px) {
    /* Exibe 3 cards por linha no desktop */
    > div {
      flex: 1 1 calc(33.33% - 20px);
    }
  }

  @media (max-width: 768px) {
    /* Exibe 2 cards por linha em telas de tamanhos menores */
    > div {
      flex: 1 1 calc(50% - 20px);
    }
  }

  @media (max-width: 375px) {
    /* Exibe 1 card por linha no mobile */
    > div {
      flex: 1 1 calc(50% - 20px);
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 20rem;
  font-family: 'Inter', sans-serif;
  margin: 0px -5px 10px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 360px) {
    width: 8.87em;
    height: auto;
    margin-left: 5px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 12.5rem;
    height: 15em;
    background: #FFFFFF;
    box-shadow: 6px 16px 30px rgba(105, 98, 98, 0.05);
    border-radius: 4px;

    @media (max-width: 768px) {
    width: 163px;
    height: 179.19px;
  }

  @media (max-width: 360px) {
    width: 8.2em;
    height: auto;
    margin-left: 5px;
  }
  }
`;

const Name = styled.h2`
  font-size: 1em;
  letter-spacing: 0.75px;
  color: var(--dark-gray-2);
  white-space: nowrap; /* Impede a quebra de linha */
  width: 100%; /* Garante que o nome ocupe a largura disponível */
  text-align: start;

  @media (max-width: 768px) {
    font-size: 0.875em; /* Ajusta o tamanho no mobile */
    text-overflow: ellipsis; /* Adiciona '...' para textos longos */
    overflow: hidden; /* Garante que o texto não ultrapasse o container */
  }
`;

const Discount = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 6rem;
  height: 2rem;
  background-color: #e7ff86;
  border-radius: 1.81rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  z-index: 1;
`;

const SubTitle = styled.h3`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.75px;
  color: var(--light-gray);
  margin-top: 20px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const PriceOld = styled.span`
  color: var(--light-gray);
  font-weight: 400;
  font-size: 20px;
  text-decoration: line-through;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PriceDiscount = styled.span`
  color: #1F1F1F;
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: var(--dark-gray);
`;

const FilterIcon = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
  }

  img {
    width: 60px;
    height: 60px;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  display: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 1rem;

  img {
    width: 20px;
    height: 20px;
    display: flex;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;


const truncateName = (name, maxLength = 18) => {
  if (name.length > maxLength) {
    return `${name.substring(0, maxLength)}...`;
  }
  return name;
};

// Página de listagem de produtos
const ProductListingPage = () => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };

  const closeMobileFilter = () => {
    setShowMobileFilter(false);
  };

  return (
    <ProductListingContainer>
      <Block>
        <p>
          <strong>Resultados para Tênis -</strong> 389 produtos
        </p>
        <OrderButtonContainer>
          <Label htmlFor="selecaoPrecos">Ordenar por:</Label>
          <Select name="selecao" id="selecaoPrecos">
            <option value="1">Menor preço</option>
            <option value="2">Maior preço</option>
            <option value="3">Mais vendidos</option>
            <option value="4">Melhores avaliações</option>
          </Select>
        </OrderButtonContainer>
      </Block>

      <Block>
        <FilterIcon onClick={toggleMobileFilter}>
          <img src={FilterIconImg} alt="Filtro" />
        </FilterIcon>

        <FilterContainer showMobileFilter={showMobileFilter}>
          <CloseButton onClick={closeMobileFilter}>
            <img src={CloseIconImg} alt="Fechar" />
          </CloseButton>

          <FilterTitle>Filtrar por</FilterTitle>
          <Divider />
          <Filter title="Marca" inputType="checkbox" option="marca" />
          <Filter title="Categoria" inputType="checkbox" option="categoria" />
          <Filter title="Gênero" inputType="checkbox" option="gênero" />
          <Filter title="Estado" inputType="radio" option="estado" />
        </FilterContainer>
        <ListingContainer>
  {products.slice(0, 15).map((product) => (
    <Card key={product.id}>
      {product.percentageDiscount && (
        <Discount>{product.percentageDiscount}</Discount>
      )}
      <img src={product.image} alt={product.name} />
      {product.subTitle && <SubTitle>{product.subTitle}</SubTitle>}
      <Name>{truncateName(product.name)}</Name>
      <PriceContainer>
        {product.priceDiscount ? (
          <>
            <PriceOld>{product.price}</PriceOld>
            <PriceDiscount>{product.priceDiscount}</PriceDiscount>
          </>
        ) : (
          <Price>{product.price}</Price>
        )}
      </PriceContainer>
    </Card>
  ))}
</ListingContainer>
      </Block>
    </ProductListingContainer>
  );
};

export default ProductListingPage;
