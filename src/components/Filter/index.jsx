import styled from 'styled-components';

const FilterOptions = styled.section`
  padding-bottom: 2rem;
`;
const Titulo = styled.div`
  color: #474747;
  font-size: 14px;
  font-weight: 700;
`;

const DivStyle = styled.div`
  color: #474747;
  font-size: 1rem;
  font-weight: 500;
  width: auto;
  display: flex;
  gap: 10px;
  padding-top: 0.3rem;
`;

const InputStyle = styled.input`
  width: 22px;
  height: 22px;
  &:checked {
    accent-color: #c92071;
  }
`;

function Filter({ title, inputType, option }) {
  const options = {
    marca: ['Adiddas', 'Calenciada', 'K-Swiss', 'Nike', 'Puma'],
    categoria: ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'],
    gênero: ['Masculino', 'Feminino', 'Unisex'],
    estado: ['Novo', 'Usado'],
  };

  return (
    <FilterOptions>
      <Titulo>{title}</Titulo>
      {options[option]?.map((texto, index) => (
        <DivStyle key={index}>
          <InputStyle
            className="inputFiltro"
            type={inputType}
            name={`Type${inputType}`}
            id={`${option}-${index}`}
            value={texto}
          />
          <label htmlFor={`${option}-${index}`}>{texto}</label>
        </DivStyle>
      ))}
    </FilterOptions>
  );
}

export default Filter;
