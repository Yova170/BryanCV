import React from 'react';
import styled from 'styled-components';
import js from '../skills/JS.jpg';
import py from '../skills/Pyhton.png';
import jv from '../skills/java.png';
import cm from '../skills/c++.png';
import ccs from '../skills/ccs.png';
import html from '../skills/html.png';
import node from '../skills/node.png';
import php from '../skills/php.png';
import office from '../skills/office.png';
import react from '../skills/React.png';
import sql from '../skills/Sql.png';
import boot from '../skills/boot.png';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', percentage: 60, image: js },
    { name: 'Python', percentage: 50, image: py },
    { name: 'Java', percentage: 50, image: jv },
    { name: 'C++', percentage: 40, image: cm },
    { name: 'CCS', percentage: 50, image: ccs },
    { name: 'HTML', percentage: 75, image: html },
    { name: 'Node.js', percentage: 50, image: node },
    { name: 'PHP', percentage: 60, image: php },
    { name: 'Office', percentage: 75, image: office },
    { name: 'React', percentage: 45, image: react },
    { name: 'SQL', percentage: 55, image: sql },
    { name: 'Bootstrap', percentage: 50, image: boot },
  ];

  return (
    <>
      <Skillsme id='sk'>
        <h1 className="sk1">Habilidades</h1>

        <ImageContainer>
          {skillsData.map((skill, index) => (
            <SkillContainer key={index}>
              <SkillImage src={skill.image} alt={`${skill.name} Image`} />
              <Percentage>{skill.percentage}%</Percentage>
            </SkillContainer>
          ))}
        </ImageContainer>
      </Skillsme>
    </>
  );
};

const Skillsme = styled.div`
  .sk1 {
    font-size: 35px;
    text-align: center;
    z-index: 2;
  }
`;

const ImageContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  z-index: 2; 
`;

const SkillContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const SkillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: blur(5px);
  }
`;

const Percentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: black;
  z-index: 1;
  opacity: 0;
  font-weight: bold;
  text-shadow: 2px 2px 2px white;
  transition: opacity 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 15px;

  }

  ${SkillContainer}:hover & {
    opacity: 1;
  }
`;

export default Skills;
