import React from "react";
import styled, { css } from "styled-components/macro";
import { motion, AnimatePresence } from "framer-motion";

const HomeSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HomeSlide = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const HomeSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const HomeImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const HomeContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    margin-left: 80px;
  }
`;

function Home({ slides }) {
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0 },
  };

  return (
    <HomeSection>
      <HomeWrapper>
        <AnimatePresence>
          {slides.map((slide, index) => {
            return (
              <HomeSlide key={index}>
                <HomeSlider>
                  <HomeImage
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeAnimation}
                    src={slide.image}
                    alt={slide.alt}
                  />
                  <HomeContent>
                    <h1 data-aos="fade-down" data-aos-duration="600">
                     
                      {slide.title}
                    </h1>
                  </HomeContent>
                </HomeSlider>
              </HomeSlide>
            );
          })}
        </AnimatePresence>
      </HomeWrapper>
    </HomeSection>
  );
}

export default Home;
