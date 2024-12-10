import { useState } from "react";
import sapato1 from "../../assets/sapatos/download (1).jpg"
import sapato2 from "../../assets/sapatos/download (2).jpg"
import sapato3 from "../../assets/sapatos/download (3).jpg"
import sapato4 from "../../assets/sapatos/download (4).jpg"
import styled from "styled-components";
import prevArrow from "../../assets/icons/arrow-left.svg"
import nextArrow from "../../assets/icons/arrow-right.svg"

const ImageCarousel = () => {
  let [ImagemIndex, SetImagem] = useState(0)
  const imagens = [sapato1, sapato2, sapato3, sapato4]

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
    position: relative;
    & button{
      border:0;
      background: transparent;
      position: absolute;
      top:50%;
      transform: translateY(-50%);
    }
    
  }
  & .displayImg{
    width:500px;
    height: 500px;
  }
  & ul{
    display: flex;
    gap: 8px;
    list-style: none;
    & li{
      border: 0;

    }
  }
  & .preview-image{
    width: 80px;
    height: 80px;
    border: 0;
    cursor: pointer;
  }
  `
  return ( 
    <CarrosselContainer>
      <div className="MainImage">

        <img className="displayImg" src={imagens[ImagemIndex]}/>
        <button onClick={prevImg}><img src={prevArrow} alt="" /></button>
        <button onClick={nextImg}><img src={nextArrow} alt="" /></button>
      </div>
      <ul>
        {
          imagens.map((sapato, index)=>(
            <li key={index}>
              <img className="preview-image" 
              src={sapato} 
              alt="" 
              onClick={()=> SetImg(index)}/>
              </li>
          ))
        }
      </ul>
    </CarrosselContainer>
   );
}

 
export default ImageCarousel;

