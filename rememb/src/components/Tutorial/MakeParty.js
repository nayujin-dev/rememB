import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn=styled.div`
  text-align: center;
  margin: auto;
  padding: 10px 40px;
  width: 250px;
  font-size: 24px;
  border-radius: 80px;
  background-color: #FFEFF3;
`;
const MakeParty = () => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/login');
  }
  return (
    <>
      <Btn onClick={onClick}>내 파티룸 만들기</Btn>
    </>
  );
};

export default MakeParty;