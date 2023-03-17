import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <button id='callToAction'>
      <Link to={'/catalogo'}>
        Catalogo 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11.3 19.3q-.275-.275-.288-.7q-.012-.425.263-.7l4.9-4.9H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.175l-4.9-4.9q-.275-.275-.263-.7q.013-.425.288-.7q.275-.275.7-.275q.425 0 .7.275l6.6 6.6q.15.125.213.312q.062.188.062.388t-.062.375q-.063.175-.213.325l-6.6 6.6q-.275.275-.7.275q-.425 0-.7-.275Z"/></svg>
      </Link>
    </button>
  );
};

export default CallToAction;