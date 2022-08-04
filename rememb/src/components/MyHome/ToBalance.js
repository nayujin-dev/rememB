import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn=styled.div`
  text-align: center;
  margin: auto;
  margin-top: 20px;
  width: 200px;
  background-color: #D9D9D9;
  font-size: 20px;
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