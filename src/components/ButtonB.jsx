import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonB = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (href) => {
    window.location.href = href;
  };

  return (
    <>
      <Burger onClick={toggleMenu} menuOpen={menuOpen}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </Burger>

      <MenuItems menuOpen={menuOpen}>
        <MenuItem href='#me' onClick={() => navigateTo("#me")}>Quien Soy</MenuItem>
        <MenuItem href='#sk' onClick={() => navigateTo("#sk")}>Habilidades</MenuItem>
        <MenuItem href='#cv' onClick={() => navigateTo("#cv")}>CV</MenuItem>
        <MenuItem href='#cont' onClick={() => navigateTo("#cont")}>Contacto</MenuItem>
      </MenuItems>
    </>
  );
};

export default ButtonB;


const Burger = styled.div`

  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  margin: 15px;
  transform: ${props => (props.menuOpen ? 'rotate(45deg)' : 'none')};

  &:hover {
    opacity: 0.7;
  }
`;

const BurgerLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
`;

const MenuItems = styled.div`
  display: ${props => (props.menuOpen ? 'flex' : 'none')};
  color: white;
  position: absolute;
  top: 60px;
  
  right: 24px; 
  flex-direction: column;
  background-color:  #063f5f;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
`;

const MenuItem = styled.p`
  margin: 5px;
  cursor: pointer;

  &:hover {
    color: white; /* Cambia el color al pasar el ratón sobre un elemento del menú */
  }
`;