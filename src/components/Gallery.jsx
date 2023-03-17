import React from 'react';
import img1 from '../assets/img/gallery-img-1.jpg';
import img2 from '../assets/img/gallery-img-2.jpg';
import img3 from '../assets/img/gallery-img-3.jpg';
import img4 from '../assets/img/gallery-img-4.jpg';


const Gallery = () => {


  return (
    <div id='gallery'>

    <div id='left'>
      <img id='img-1' src={img1} alt="Imagen de muebles & iluminacion Spazzio" />
    </div>

    <div id='right'>
        <div id='row1'>
            <img id='img-2' src={img2} alt="Imagen de muebles & iluminacion Spazzio" />
        </div>
        <div id='row2'>
            <img id='img-3' src={img3} alt="Imagen de muebles & iluminacion Spazzio" />
            <img id='img-4' src={img4} alt="Imagen de muebles & iluminacion Spazzio" />
        </div>
    </div>

  </div>
  );
};

export default Gallery;