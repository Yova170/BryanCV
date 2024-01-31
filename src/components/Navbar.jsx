import React from 'react';
import styled from 'styled-components';
import ButtonB from './ButtonB';

function Navbar() {
  return (
    <>
      <NavContainer>
        <h2>
          Bryan <span>Martinez</span>
        </h2>
        <div className='link'>
          <a href='#me'> Sobre Mi </a>
          <a href='#sk'> Habilidades </a>
          <a href='#cv'> CV </a>
          <a href='#cont'> Contacto </a>
        </div>
        <div className='buttonb'>
          <ButtonB />
        </div>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  margin-right: 1rem;
  margin-left: -10px;
  background-color: #063f5f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;

  h2 {
    font-weight: 400;
    color: white;
    span {
      font-weight: 700;
    }
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .link {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    a {
      color: black;
      font-size: 2rem;
    }

    @media (min-width: 768px) {
      position: initial;
      margin: 0;

      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .buttonb {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
