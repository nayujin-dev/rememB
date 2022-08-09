import React, { useState } from "react";
import styled from "styled-components";

const Who=styled.div`
  margin-top: 70px;
  /* font-size:8vw; */
  font-size: 36px;
  /* font-size: 8rem; */
  color: #FE4179;
  font-weight: 700;
  text-align: center;
`;
const Dday=styled.div`
  margin:7px 0 35px;
  text-align: center;
  font-weight:400;
  /* font-size: ; */
  font-size: 20px;
`;
const MainTitle = () => {
    const [name,setName]=useState("멋사");
    const [bday,setBday]=useState(3);

  return (
    <>
      <Who>{name}의 생일</Who>
      <Dday>D - {bday}</Dday>
    </>
  );
};

export default MainTitle;