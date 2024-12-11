import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import "../../global.css"
import ProductListing from "../../components/ProductListing/ProductListing";
import products from "../../components/products/products.json"
import ImageCarousel from "../../components/Carrossel/ImageCarouseul";
import Section from "../../components/Section";

const ProductViewPage  = () => {
  const {id, nome} = useParams();

  const ProdutoContainer = styled.div`
  padding:12px 80px;
  & ul{ 
    padding: 0;
   & li{
    display: inline;
    & a{
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
}
& .Product-details{
  display: flex;
}
  `

  const ProductInfos = styled.section`
  width: 420px;
  margin-left:40px;
  `
  return ( 
    <ProdutoContainer>
          <ul>
            <li><Link className="Home">Home /</Link></li>
            <li><Link> Produtos /</Link></li>
            <li><Link> Tênis /</Link></li>
            <li><Link> Nike /</Link></li>
            <li><Link> {nome}</Link></li>
          </ul>
    <section className="Product-details">
      <ImageCarousel/>
      <ProductInfos>
      <h1>{nome}</h1>
      <p>Casual | Nike | REF:38416711</p>
      <h3>R$<strong>219,</strong>00</h3>
      <h6>Descrição do produto</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos harum perferendis provident quidem non et numquam quo porro. Voluptatibus necessitatibus dolore alias modi vel repellat, qui obcaecati quam eius consectetur.</p>
      <div>
        <h6>Tamanho</h6>
        <ul>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
        </ul>
        <h6>Cores</h6>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button>Comprar</button>
      </div>
      </ProductInfos>
    </section>

    <Section title="Produtos relacionados" align="center" link="true">
      <ProductListing products={products} />
    </Section>

  </ProdutoContainer>
   );
}
 
export default ProductViewPage;