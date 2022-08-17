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
const Answer1 = styled.div`
  background-color: #ffadbc;
  width: 45rem;
  height: 100px;
  border-radius: 30px 0px 0px 30px;
  font-size: 18px;
  font-weight: 500;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #828282;
`;
const Answer2 = styled.div`
  background-color: #ffeff3;
  width: 45rem;
  height: 100px;
  border-radius: 0px 30px 30px 0px;
  font-size: 18px;
  font-weight: 500;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
`;
const Line = styled.div`
  display: block;
  width: 100px;
  border-bottom: 2px solid #bcbcbc;
  transform: rotate(90deg);
`;

const CompoDid = ({
  user,
  question_id,
  answer_id,
  qcontent,
  acontent1,
  acontent2,
}) => {
  const navigate = useNavigate();

  const onClick1 = () => {
    // D-7 밸런스게임 페이지로
    navigate('');
  };
  return (
    <>
      <Question>{qcontent}</Question>
      <MylistAfter onClick={onClick1}>
        <Answer1>
          {/* 실용적
          <br />
          이어야 한다 */}
          {acontent1}
        </Answer1>
        {/* <Line /> */}
        <Answer2>
          {/* 예뻐야 한다 */}
          {acontent2}
        </Answer2>
      </MylistAfter>
    </>
  );
};

export default CompoDid;
