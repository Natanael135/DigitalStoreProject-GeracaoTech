import { useState } from 'react';
import styled from 'styled-components';
import Filter from '../../components/Filter';
import FilterIconImg from '../../assets/icons/filter.svg'; // Importando o ícone do filtro
import CloseIconImg from '../../assets/icons/close.svg'; // Importando o ícone de fechar
import ProductListing from '../../components/ProductListing/ProductListing';
import products from '../../components/products/products.json';

const ProductListingContainer = styled.main`
  background-color: #f9f8fe;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  gap: 30px;
  min-width: 320px;
  padding: 2rem;
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
    transform: ${props =>
      props.showMobileFilter ? 'translateX(0)' : 'translateX(-100%)'};
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

const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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

const ProductListingPage = () => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };

  const closeMobileFilter = () => {
    setShowMobileFilter(false);
  };

  return (
    <>
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

          <CardContainer>
            <ProductListing products={products} width="980px" gap="18px"/>
          </CardContainer>
        </Block>
      </ProductListingContainer>
    </>
  );
};

export default ProductListingPage;
