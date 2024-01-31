import React from 'react';
import styled from 'styled-components';

import thumbnail from './pdf.jpg'; // Ajusta la ruta a tu miniatura
import pdf from './BryanMartinez_Curriculum.pdf'; // Ajusta la ruta a tu PDF

const CV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'BryanMartinez_Curriculum.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <CVContainer id='cv'>
      <h1 className="cv1">Currículum</h1>
      <ContentContainer>
        <ThumbnailContainer>
          <Thumbnail
            src={thumbnail}
            alt="Currículum Miniatura"
            onClick={handleDownload}
          />
          <DownloadText>Descargar</DownloadText>
        </ThumbnailContainer>
      </ContentContainer>
    </CVContainer>
  );
};

export default CV;

const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const ThumbnailContainer = styled.div`
  position: relative;
`;

const Thumbnail = styled.img`
  width: 300px;
  height: auto;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: blur(5px);
  }
`;

const DownloadText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${ThumbnailContainer}:hover & {
    opacity: 1;
  }
`;
