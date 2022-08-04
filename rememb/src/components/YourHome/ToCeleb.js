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
const ToCeleb = () => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/others/selectimg');
  }
  return (
    <>
      <Btn onClick={onClick}>나도 축하해주기</Btn>
    </>
  );
};

export default ToCeleb;