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
  background-color: linear-gradient(90deg, rgba(243,203,228,1) 0%, rgba(253,203,198,1) 100%);
`;
const ToBalance = ({id,token}) => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate(`/etc/seeRP/${id}`,{state:{token:token}});
  }
  return (
    <>
      <Btn onClick={onClick}>롤링페이퍼 보기</Btn>
    </>
  );
};

export default ToBalance;