import React from 'react';

const HamburgerMenu = ({ openMenu, setOpenMenu }) => {

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    };


  return (
    <div id="nav-icon3" onClick={() => handleOpenMenu()} className={openMenu? 'open' : 'closed'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  );
};

export default HamburgerMenu