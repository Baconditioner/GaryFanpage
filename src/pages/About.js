import React from "react";
import styled from "styled-components";
import fedoraGary from "../pics/fedoragary.PNG";

const AboutSection = styled.section`
  background: #fff;
  color: #000;
  width: 100%;
  min-height: 600px;
  padding: 3rem calc((100vw-1300px) / 2);
`;

const AboutWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const AboutTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const AboutBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Quote = styled.div`
  flex: 1;
  padding: 2rem 0rem;

  h4 {
    font-size: clamp(2rem, 8vw, 3rem);
    text-align: center;
  }
`;

function About() {
  return (
    <AboutSection>
      <AboutWrapper>
        <AboutTop>
          <Quote>
            <h4>We are the biggest fans of Gary</h4>
            <h4>We want to spread our love for Gary</h4>
          </Quote>
        </AboutTop>
        <AboutBottom>
          <img src={fedoraGary} />
        </AboutBottom>
        <Quote>
          <h4>Send us more pictures of Gary</h4>
        </Quote>
      </AboutWrapper>
    </AboutSection>
  );
}

export default About;
