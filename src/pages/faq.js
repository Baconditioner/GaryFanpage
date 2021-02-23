import React from "react";
import styled from "styled-components";
import QuestionCard from "../components/QuestionCard.js";
import questions from "../data/QuestionData.js";

const List = styled.dl`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0rem auto;
  max-width: 90%;
`;

const Heading = styled.h1`
  font-weight: 900;
  font-size: 500%;
  text-align: center;
  padding-top: 10rem;
  color: #000;
  line-height: 1.2;
  @media screen and (max-width: 768px) {
    /* margin: auto; */
    font-size: 300%;
  }
`;

function createEntry(qaa) {
  return <QuestionCard key={qaa.id} question={qaa.heading} answer={qaa.body} />;
}

function faq() {
  return (
    <div>
      <Heading>Gary's Information</Heading>
      <List>{questions.map(createEntry)}</List>
    </div>
  );
}

export default faq;
