import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  /* overflow: hidden; */
`;

const PictureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  position: relative;
`;

const Picture = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  height: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000;
`;

const Description = styled.div`
  color: #fff;
  h1 {
    font-size: 5rem;
  }
`;

const WhiteBar = styled.section`
height: 5vh;
`;

function GalleryCollectionPage(props) {
  return (
    <Container>
      <PictureContainer>
        <Picture src={props.image} />
      </PictureContainer>
      <DescriptionContainer>
        <Description>
          <h1>{props.description}</h1>
        </Description>
      </DescriptionContainer>
      <WhiteBar />
    </Container>
  );
}

export default GalleryCollectionPage;
