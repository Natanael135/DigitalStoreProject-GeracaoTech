import styled from "styled-components";
import "../../global.css"
import ProductOptions from "../ProductOptions/ProductOptions";
import RatingStars from "../../components/RatingStars";
import star from "../../assets/icons/Star-1.svg";

const BuyBox = ({nome, categoria, marca, referencia,nota, avaliacoes, preco, desconto, descricao, children}) => {
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
      // const produto= {
      //   nome:"Tênis Nike Revolution 6 Next Nature Masculino",
      //   categoria:"Casual",
      //   marca:"Nike",
      //   referencia:87094321,
      //   nota:3.5,
      //   avaliacoes:70,
      //   preco:"219,00",
      //   desconto:1899.00,
      //   descricao:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde ratione tempore voluptatum enim voluptatibus,",
      //   tamanhos:[39,40,41,42,43],
      //   cores:["6FEEFF","FF6969","5E5E5E","6D70B7"],
      // }

    return ( 
        <ProductInfos>
            <div>
                <h1 className="product-title">{nome}</h1>
                <p className="product-category">{categoria} | {marca} | REF:{referencia}</p>
                <div className="RatingStars">
                <RatingStars rating={nota} />
                <span className="rating-note">{nota }<img src={star} alt="" /></span>
                <span className="rating-avaliation">( {avaliacoes} avaliações )</span>
                </div>
            </div>
            <div>
                <span className="price">R$<span>{preco}</span></span>
                <span className="Discount">{desconto}</span>
            </div>
            <div>
                <h6 className="subtitle">Descrição do produto</h6>
                <p className="description-text">{descricao}</p>
            </div>
            <div>
                {children}
                <button className="buy-button">Comprar</button>
            </div>
        </ProductInfos>
     );
}
 
export default BuyBox;