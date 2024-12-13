import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import "../../global.css"
import ProductListing from "../../components/ProductListing/ProductListing";

import Section from "../../components/Section";

import RatingStars from "../../components/RatingStars";
import Gallery from "../../components/Carrossel/Gallery";
import whitestar from "../../assets/icons/Star 1.Svg"

const ProductViewPage  = () => {

const ProdutoContainer = styled.div`
  background-color: var(--light-gray-3);
  padding:12px 80px;
  & ul{ 
    padding: 0;
    display:flex;
    gap: 8px;
    list-style: none;
     & li a{
      text-decoration: none;
      color:var(--dark-gray-2);
      font-weight:500;
      font-size:14px;
    }
    & .Home{
      color:var(--dark-gray-1);
      font-weight: 700;
    }
  }

  & .Product-details{
    display: flex;
  }

  & .product-title{
    font-size: 32px;
    font-weight: 700;
    color:var(--dark-gray);

  }

  & .product-category{
    font-weight: 500;
    font-size:12px;
    color:var(--dark-gray-3);
  }

  & .subtitle{
    font-weight: 700;
    font-size:14px;
    color:var(--light-gray);
  }
  & .description-text{
    font-weight: 500;
    font-size:14px;
    color:var(--dark-gray-2);
  }
  & .number-buttons{
    width: 48px;
    height: 48px;
    background-color: var(--white);
    border:1px solid var(--light-gray-2);
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;

    &:focus{
      background-color: var(--primary);
      color:var(--white);
    }
  }
  & .color-button{
    width: 31px;
    height:31px;
    border-radius:99px;
    border:2px solid white;
    outline-width: 0px;
    &:focus{
      outline-width: 1px;
      outline-style: solid;
    }
}
  & .buy-button{
    width:220px;
    height: 48px;
    background-color:#FFB31F ;
    border: 0;
    border-radius: 8px;
    color:var(--white);
    font-size: 16px;
    font-weight: 700;
  }
  `

  const ProductInfos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 420px;
  height: 571px;
  margin-left:40px;
  & .RatingStars{
    display:flex;
    align-items: center;
    gap: 16px;
  }
  & .rating-note{
    background-color:#FFB31F;
    color:#FFFFFF;
    border-radius:4px;
    width: 63px;
    height: 23px;
    font-size:14px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 4px;
  }
  & .rating-avaliation{
    font-size: 14px;
    font-weight: 500;
    color: var(--light-gray);
  }
  & .description-text{
    font-size: 14px;
    font-weight: 500;
    color: var(--dark-gray-2);
  }
  & .price{
    font-size:16px;
    font-weight: 400;
    & span{
      font-size:32px;
      font-weight: 900;
    }
  }
  & .Discount{
    font-size: 16px;
    font-weight: 400;
    color:var(--light-gray-2);
    text-decoration: line-through;
    margin-left: 8px;
  }
  `

  const produto= {
      nome:"Tênis Nike Revolution 6 Next Nature Masculino",
      categoria:"Casual",
      marca:"Nike",
      referencia:87094321,
      nota:3.5,
      avaliacoes:70,
      preco:"219,00",
      desconto:1899.00,
      descricao:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde ratione tempore voluptatum enim voluptatibus,",
      tamanhos:[39,40,41,42,43],
      cores:["6FEEFF","FF6969","5E5E5E","6D70B7"],
    }


  return ( 
    <ProdutoContainer>
          <ul>
            <li><Link className="Home">Home /</Link></li>
            <li><Link> Produtos /</Link></li>
            <li><Link> Tênis /</Link></li>
            <li><Link> Nike /</Link></li>
            <li><Link> {produto.nome}</Link></li>
          </ul>
    <section className="Product-details">
      <Gallery radius="4px" width="700px" height="571px" showthumbs={true}/>

          <ProductInfos>
            <div>
              <h1 className="product-title">{produto.nome}</h1>
              <p className="product-category">{produto.categoria} | {produto.marca} | REF:{produto.referencia}</p>
              <div className="RatingStars">
                <RatingStars rating={produto.nota} />
                <span className="rating-note">{produto.nota }<img src={whitestar} alt="" /></span>
                <span className="rating-avaliation">( {produto.avaliacoes} avaliações )</span>
              </div>
            </div>
            <div>
              <span className="price">R$<span>{produto.preco}</span></span>
              <span className="Discount">R$219,00</span>
            </div>
            <div>
              <h6 className="subtitle">Descrição do produto</h6>
              <p className="description-text">{produto.descricao}</p>
            </div>
            <div>
              <div>
                <h6 className="subtitle">Tamanho</h6>
                <ul>         
                  {produto.tamanhos.map((tamanho)=>(
                    <li><button className="number-buttons">{tamanho}</button></li>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="subtitle">Cores</h6>
                <ul>
                {produto.cores.map((cor)=>(
                    <li><button className="color-button" style={{backgroundColor:`#${cor}`,outlineColor:`#${cor}`}}></button></li>                   
                  ))}
                </ul>
              </div>
              <button className="buy-button">Comprar</button>
            </div>
          </ProductInfos>
    </section>

    <Section title="Produtos relacionados" align="center" link="true">
      {/* <ProductListing products={products} /> */}
    </Section>

  </ProdutoContainer>
   );
}
 
export default ProductViewPage;