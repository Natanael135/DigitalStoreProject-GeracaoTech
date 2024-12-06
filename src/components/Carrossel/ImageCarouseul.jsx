import React, { useState } from 'react';
import Slider from 'react-slick';
import "./slick.css"
import tenis1 from "../../assets/sapatos/download (5).jpg"
import tenis2 from "../../assets/sapatos/download (6).jpg"
import tenis3 from "../../assets/sapatos/download (8).jpg"

function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    // Array com as URLs das imagens
    tenis1,
    tenis2,
    tenis3,
    // ...
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="preview-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Prévia ${index + 1}`}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => slider.slickGoTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;