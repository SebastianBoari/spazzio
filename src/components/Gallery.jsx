import React from 'react';
import img1 from '../assets/img/gallery-img-1.jpg';
import img2 from '../assets/img/gallery-img-2.jpg';
import img3 from '../assets/img/gallery-img-3.jpg';
import img4 from '../assets/img/gallery-img-4.jpg';


const Gallery = () => {
  

  return (
    <div id='gallery'>

      <img id='img1' src={img1} alt="Imagen de muebles & iluminacion Spazzio" />
      <img id='img2' src={img2} alt="Imagen de muebles & iluminacion Spazzio" />
      <img id='img3' src={img3} alt="Imagen de muebles & iluminacion Spazzio" />
      <img id='img4' src={img4} alt="Imagen de muebles & iluminacion Spazzio" />

    </div>
  );
};

export default Gallery;