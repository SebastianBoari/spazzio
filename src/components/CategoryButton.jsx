import React, { useState } from 'react';


const CategoryButton = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
    console.log("funciona");
    console.log(showCategories);
  };



  return (
    <>
        <button id='categoryButton' onClick={() => toggleCategories()}>
            Categorias
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.387-.075q-.188-.075-.313-.2l-4.6-4.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-4.6 4.6q-.15.15-.325.212q-.175.063-.375.063Z"/></svg>
        </button>
        {showCategories && (
        <ul id='catPanel'>
          <li className='catPanel__item'>Categoría 1</li>
          <li className='catPanel__item'>Categoría 2</li>
          <li className='catPanel__item'>Categoría 3</li>
          <li className='catPanel__item'>Categoría 4</li>
          <li className='catPanel__item'>Categoría 5</li>
        </ul>
      )}
    </>
  );
};

export default CategoryButton;