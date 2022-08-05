import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Btn=styled.div`
  text-align: center;
  margin: auto;
  margin-top: 20px;
  width: 200px;
  background-color: #D9D9D9;
  font-size: 20px;
`;
const WatchBalance = ({who}) => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/myParty/seeBalance');
  }
  return (
      <Btn onClick={onClick}>{who}의 밸런스 보기</Btn>
  );
};

export default WatchBalance;