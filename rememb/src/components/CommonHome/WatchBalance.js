import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Btn=styled.div`
  text-align: center;
  margin: auto;
  margin-top: 5rem;
  padding: 2rem 5rem;
  width: 55rem;
  font-size: 5rem;
  border-radius: 80px;
  background-color: #FFEFF3;
`;
const WatchBalance = ({token}) => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/myParty/seeBalance',{
      state:{token:token},
    });
  }
  return (
      <Btn onClick={onClick}>나의 밸런스 보기</Btn>
  );
};

export default WatchBalance;