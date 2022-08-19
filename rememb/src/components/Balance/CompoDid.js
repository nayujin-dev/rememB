import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Question = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;
const MylistAfter = styled.div`
  background-color: #ffeff3;
  width: 90rem;
  height: 100px;
  margin: auto;
  margin-top: 7px;
  display: inline-flex;
  justify-content: space-around;
  border-radius: 30px;
  align-items: center;
`;
const AnswerDid1 = styled.div`
  background-color: ${props=>props.select==true?"#FFADBC":"#FFEFF3"};
  width: 45rem;
  height: 100px;
  border-radius: 30px 0px 0px 30px;
  font-size: 18px;
  font-weight: 500;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  border: ${props=>(props.select==true?"2px solid #828282":"none")};
`;

const AnswerDid2 = styled.div`
  background-color: ${(props)=>(props.select==true?"#FFADBC":"#FFEFF3")};
  width: 45rem;
  height: 100px;
  border-radius: 0px 30px 30px 0px;
  font-size: 18px;
  font-weight: 500;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  border: ${props=>(props.select==true?"2px solid #828282":"none")};
`;
const Line = styled.div`
  display: block;
  width: 100px;
  border-bottom: 2px solid #bcbcbc;
  transform: rotate(90deg);
`;

const CompoDid = ({
  question_id,
  selectA,
  content,
  a1content,
  a2content,
}) => {
  return (
    <>
      <Question>{content}</Question>
          <MylistAfter>
            <AnswerDid1 select={selectA===1}>{a1content}</AnswerDid1>
            <AnswerDid2 select={selectA===0}>{a2content}</AnswerDid2>
          </MylistAfter>
    </>
  );
};

export default CompoDid;
