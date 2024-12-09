import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import "../../global.css"
import ProductListing from "../../components/ProductListing/ProductListing";
import products from "../../components/products/products.json"
import ImageCarousel from "../../components/Carrossel/ImageCarouseul";
import Section from "../../components/Section";
import star from "../../assets/icons/Path@2x.svg"
import RatingStars from "../../components/RatingStars";
const ProductViewPage  = () => {
  const {id, nome} = useParams();

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

    &:active{
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
    &:active{
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
  `

  const produto= {
      nome:"Tênis Nike Revolution 6 Next Nature Masculino",
      categoria:"Casual",
      marca:"Nike",
      referencia:87094321,
      nota:3.5,
      avaliacoes:70,
      preco:2000.00,
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
      <ImageCarousel/>

          <ProductInfos>
            <div>
              <h1 className="product-title">{produto.nome}</h1>
              <p className="product-category">{produto.categoria} | {produto.marca} | REF:{produto.referencia}</p>
              <div className="RatingStars">
                <RatingStars rating={produto.nota} />
                <span>{produto.nota}</span>
                <span>`({produto.avaliacoes} avaliações )`</span>
              </div>
            </div>
            <h3>R$<strong>219,</strong>00</h3>
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