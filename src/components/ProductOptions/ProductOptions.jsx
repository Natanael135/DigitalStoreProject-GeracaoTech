import styled from "styled-components";

const ProductOptions = ({tamanhos, cores}) => {
    const ProductsOptions = styled.section`
    & .number-buttons{
    width: 48px;
    height: 48px;
    background-color: var(--white);
    border:1px solid var(--light-gray-2);
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;

    &:focus {
      background-color: var(--primary);
      color:var(--white);
    }
  }
  & .color-button{
    width: 31px;
    height:31px;
    border-radius:99px;
    border:2px solid rgba(255,255,255,0.9);
    outline-width: 0px;
    &:focus {
      outline-width: 1px;
      outline-style: solid;
    }
}
`

    const tamanho = tamanhos;
    const cor= cores;
    return ( 
        <ProductsOptions>
            <div>
                <h6 className="subtitle">Tamanho</h6>
                <ul>         
                    {
                        tamanho.map((numero, index)=>(
                            <li key={index} ><button className="number-buttons">{numero}</button></li>
                        ))
                    }

                </ul>
                </div>
                <div>
                <h6 className="subtitle">Cores</h6>
                <ul>
                
                    {
                        cor.map((cor, index)=>(
                            <li key={index}><button className="color-button" style={{backgroundColor:`#${cor}`,outlineColor:`#${cor}`}}></button></li> 
                        ))
                    }

                </ul>
            </div>
        </ProductsOptions>
     );
}
 
export default ProductOptions;