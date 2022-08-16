import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Question = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;
const MylistAfter = styled.div`
  background-color: #ffeff3;
  /* border: 2px solid #ffeff3; */
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
  background-color: ${(props) => (props.left ? '#ffadbc' : '#ffeff3')};
  width: 45.5rem;
  height: 100px;
  border-right-width: 0.5px;
  border-radius: 30px 0px 0px 30px;
  border-right-color: #828282;
  font-size: 18px;
  font-weight: 500;
  border-right-style: solid;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  border: ${(props) => props.left && '2px solid #828282'};
  /* border: 2px solid #828282; */
`;
const Answer2 = styled.div`
  background-color: #ffeff3;
  border-left-width: 0.5px;
  width: 45.5rem;
  height: 100px;
  border-radius: 0px 30px 30px 0px;
  border-right-color: #828282;
  font-size: 18px;
  font-weight: 500;
  border-left-style: solid;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
`;

const CompoNew = () => {
  const navigate = useNavigate();
  const [left, setLeft] = useState(false);
  const onClick2 = () => {
    // D-6 밸런스게임 페이지로
    navigate('');
  };
  return (
    <>
      <Question>선물은 자고로 #2</Question>
      <MylistAfter onClick={onClick2}>
        {/* left값 false일 때 대답 안한거 = 색 변화 없음 */}
        <Answer1 left={false}>나한테 없는 것</Answer1>
        <Answer2>자주 쓰는 것</Answer2>
      </MylistAfter>
    </>
  );
};

export default CompoNew;
