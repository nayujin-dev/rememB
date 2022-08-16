import React, { useState } from 'react';
import styled from 'styled-components';

const Question = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;
const Img = styled.img`
  width: 15rem;
  height: 15rem;
  margin-top: 3.5rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const MylistBefore = styled.div`
  background-color: #e7e7e7;
  width: 90%;
  height: 100px;
  margin: auto;
  margin-top: 7px;
  font-size: 20px;
  padding: 10px;
  border-radius: 30px;
`;

const CompoNotYet = () => {
  const [date, setDate] = useState('0');
  return (
    <>
      <Question>D-{date} 공개</Question>
      <MylistBefore>
        <Img src="../../../img/balanceIcon/lock.png" />
      </MylistBefore>
    </>
  );
};

export default CompoNotYet;
