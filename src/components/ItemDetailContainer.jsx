import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();

  return (
    <div>ItemDetailContainer</div>
  );
};

export default ItemDetailContainer;