import React, { useState } from "react";
import styled from "styled-components";

const Who=styled.div`
  margin-top: 10px;
  font-size:30px;
  font-weight: 600;
  text-align: center;
`;
const Dday=styled(Who)`
  margin:5px;
  font-size: 20px;
`;
const MainTitle = () => {
    const [name,setName]=useState("멋사");
    const [bday,setBday]=useState(3);

  return (
    <>
      <Who>{name}의 생일!</Who>
      <Dday>D - {bday}</Dday>
    </>
  );
};

export default MainTitle;