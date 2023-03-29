import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <button id='callToAction'>
      <Link to={"/catalogo"}>
        Catalogo 
      </Link>
    </button>
  );
};

export default CallToAction;