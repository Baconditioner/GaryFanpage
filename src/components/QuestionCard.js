import React from "react";
import styled from "styled-components";

const List = styled.dl`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5rem auto;
  max-width: 90%;
`;

const Container = styled.div`
  text-align: center;
  width: 20rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 100ms ease-in-out;
`;

const Wrap = styled.dt`
  color: #2ec2b0;
  line-height: 1;
  margin-bottom: 1rem;
`;

const Question = styled.span`
  font-size: 200%;
  font-weight: 900;
`;

const Answer = styled.dd`
  font-size: 92.5%;
  margin-left: 0;
`;

function QuestionCard(props) {
  return (
    <List>
      <Container>
        <Wrap>
          <Question>{props.question}</Question>
        </Wrap>
        <Answer>{props.answer}</Answer>
      </Container>
    </List>
  );
}

export default QuestionCard;
