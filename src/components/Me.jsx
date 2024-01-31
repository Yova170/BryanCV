import React from 'react';
import styled from 'styled-components'


import imagen2 from './me.png';


function Me(){
 
    return (
        <>
        
            <MeContainer id="me">
                <ImageContainer>
                    <img src={imagen2} alt="Imagen 2"  />
                </ImageContainer>
               

                <div body>
                    <h1 className="me" > Sobre Mi </h1>
                    <h1 className="me-1" >Mi nombre es Bryan Matinez y resido en Chiriquí, Panamá. Tengo 23 años y actualmete estoy cursando el ultimo ano de la carrera de Desarrollo de Software en la Universidad Tecnologica 
                    de Panama y en busca de mi primer reto como profecional, se que tengo aptitudes optimas para poder cumplir la mayoria de roles que se necesitan hoy en dia, asi como poder
                    integrarme en cualquier area de trabajo con mucha facilidad, espero ser parte de tu equipo. </h1>
                </div>
                
            </MeContainer>

            
        </>
    )
}

export default Me

const MeContainer = styled.h1`
    .me{
  
        font-size: 30px;
        margin-left: 2rem;
    }

    .me-1{
        
        font-size: 20px;
        margin-left: 2rem;
        margin-right: 2rem;
        font-weight: normal;
    }

`
const ImageContainer = styled.div`
 
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

  img {
    margin-top: 120px;
    width: 300px; /* Ajusta el tamaño según tus necesidades */
    height:300px; /* Ajusta el tamaño según tus necesidades */
    border-radius: 50%; /* Agrega un borde redondeado si lo deseas */
  }
`;