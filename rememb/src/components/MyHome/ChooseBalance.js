import React, { useState } from "react";
import styled from "styled-components";

const BalCon=styled.div`
  background-color: #D9D9D9;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  height: 20em;
`;
const BalA=styled.div`
  /* display: flex; */
  /* place-items: center; */
  /* justify-content: space-evenly; */
  position: relative;
  width: fit-content;
  top: 25%;
  margin: auto;
  font-size: 20px;
  text-align:center;
`;
const BalQ=styled.div`
  text-align: center;
  position: relative;
  font-weight: 500;
  top: 10%;
  font-size: 30px;
`;
const Answer=styled.div`
  background-color: #F4F4F4;
  margin-bottom:20px;
  padding: 5px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const ChooseBalance = () => {
  const [myA,setMyA]=useState('');
  const onBtnClick=(e)=>{
    // console.log(myA);
    console.log(e);

    setMyA(e);
    console.log(myA);
    // console.log(e);
  }
  return (
    <BalCon>
      <BalQ>케이크는 자고로</BalQ>
      <BalA>
        <Answer onClick={()=>onBtnClick(0)}>달달하고 맛있어야 한다</Answer>
        <Answer onClick={()=>onBtnClick(1)}>귀엽고 깜찍해야 한다</Answer>
      </BalA>
      {/* 여기는 밸런스 게임 양자택일 공간입니다. */}
    </BalCon>
  );
};

export default ChooseBalance;