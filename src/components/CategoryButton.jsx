import React, { useState, useEffect, useRef } from 'react';

const CategoryButton = () => {
  // Inicializo un estado que realice la labor de toggle
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
    console.log("funciona");
    console.log(showCategories);
  };

  // Event Handle para cerrar el modal cuando se detecte un click
  const refMenu = useRef(null);

  useEffect(() => {
      const handleClickOutside = event => {
          if (refMenu.current && !refMenu.current.contains(event.target)) {
            setShowCategories(false);
          }
      };
      document.body.addEventListener('click', handleClickOutside);
      return () => {
          document.body.removeEventListener('click', handleClickOutside);
      };
  }, []);

  return (
    <>
        <button id='categoryButton' onClick={() => toggleCategories()} ref={refMenu}>
            Categorias
            {showCategories ? (  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.7 14.7q-.275-.275-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.213q.175-.062.375-.062t.388.075q.187.075.312.2l4.6 4.6q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275q-.425 0-.7-.275Z"/></svg>) : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.387-.075q-.188-.075-.313-.2l-4.6-4.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-4.6 4.6q-.15.15-.325.212q-.175.063-.375.063Z"/></svg>}
        </button>
        {showCategories && (
        <div id='catPanel'>
          <ul className='catPanel__list'>
            <li className='catPanel__item'>Categoría 1</li>
            <li className='catPanel__item'>Categoría 2</li>
            <li className='catPanel__item'>Categoría 3</li>
            <li className='catPanel__item'>Categoría 4</li>
            <li className='catPanel__item'>Categoría 5</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default CategoryButton;