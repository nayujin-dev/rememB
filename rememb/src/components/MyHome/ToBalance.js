import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn=styled.div`
  text-align: center;
  margin: auto;
  padding: 2rem 5rem;
  width: 55rem;
  font-size: 5rem;
  border-radius: 80px;
  background-color: #FFEFF3;
`;
const ToBalance = () => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/myParty/ansBalance');
  }
  return (
    <>
      <Btn onClick={onClick}>밸런스 게임하기</Btn>
    </>
  );
};

export default ToBalance;