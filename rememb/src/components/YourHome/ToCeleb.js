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
const ToCeleb = ({id}) => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate(`/others/selectimg/${id}`,{state:{id:id}});
  }
  return (
    <>
      <Btn onClick={onClick}>나도 축하해주기</Btn>
    </>
  );
};

export default ToCeleb;