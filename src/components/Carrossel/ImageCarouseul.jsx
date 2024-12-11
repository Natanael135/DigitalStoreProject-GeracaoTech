import { useState } from "react";
import sapato from "../../assets/sapatos/White-Sneakers-PNG-Clipart 2.png"
import styled from "styled-components";
import prevArrow from "../../assets/icons/arrow-left.svg"
import nextArrow from "../../assets/icons/arrow-right.svg"

const ImageCarousel = () => {
  let [ImagemIndex, SetImagem] = useState(0)
  const imagens = [
    {
      sapato: sapato,
      background:"E2E3FF",
    },
    {
      sapato: sapato,
      background:"FFE8BC",
    },
    {
      sapato: sapato,
      background:"FFC0BC",
    },
    {
      sapato: sapato,
      background:"DEC699",
    },
    {
      sapato: sapato,
      background:"E8DFCF",
    }

  ]
  const background={
    backgroundColor:`${imagens[ImagemIndex].background}`,
  }

  function nextImg(){
    if(ImagemIndex < imagens.length-1){
      
      SetImagem(ImagemIndex+1)
      console.log(imagens.length + "e" + ImagemIndex)
    }
  }

  function prevImg(){
    if(ImagemIndex > 0 ){
      SetImagem(ImagemIndex-1)
      console.log(imagens.length + "e" + ImagemIndex)

    }
  }
  function SetImg(id){
    SetImagem(ImagemIndex = id)
  }
  
  
  
  const CarrosselContainer = styled.div`
  & .MainImage{
    width:700px;
    height:571px;
    position: relative;
    border-radius: 6px;
    & button{
      border:0;
      background: transparent;
      position: absolute;
      top:50%;
      transform: translateY(-50%);
    }
    & .prev{
      left: 12px
    }
    & .next{
      right: 12px
    }
  }
  & .displayImg{
    object-fit: contain;
    width:500px;
    height:250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  & ul{
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 20px;
    & li{
      width: 117px;
      height: 96px;
      border: 0;
      position: relative;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  & .preview-image{
    object-fit: contain;
    width: 83px;
    height: 41px;
    border: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  `

  return ( 
    <CarrosselContainer>
      <div className="MainImage" style={{backgroundColor:`#${imagens[ImagemIndex].background}`}}>
        <button className="prev" onClick={prevImg}><img  src={prevArrow} alt="" /></button>
        <img className="displayImg" src={imagens[ImagemIndex].sapato} />
        <button className="next"onClick={nextImg}><img src={nextArrow} alt="" /></button>
      </div>
      <ul>
        {
          imagens.map((sapato, index)=>(
            <li key={index} style={{backgroundColor:`#${sapato.background}`}} onClick={()=> SetImg(index)}>
              <img className="preview-image" 
              src={sapato.sapato} 
              alt="" 
              />
            </li>
          ))
        }
      </ul>
    </CarrosselContainer>
   );
}

 
export default ImageCarousel;

