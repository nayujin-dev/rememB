import React, { useState } from "react";
import styled from "styled-components";
import dayjs from 'dayjs';
const Who=styled.div`
  margin-top: 12rem;
  font-size: 9rem;
  color: #FE4179;
  font-weight: 700;
  text-align: center;
`;
const Dday=styled.div`
  margin:1rem 0 3rem;
  text-align: center;
  font-weight:400;
  font-size: 6rem;
`;
const MainTitle = ({name, bday}) => {
  // const today=new Date();
  console.log('ㅜㅜ');
  const [dday,setDday]=useState('4');
  const today=dayjs();
  const birth=dayjs(today.get('year')+"-"+bday);
  if (today.isBefore(birth)){
    setDday(birth.diff(today,'d'));
    console.log(dday);
  // } else if (today.isSame(birth)){
  //   setDday(0);
  }else{
    console.log("생일 아직");
    // const year=today.get('year')+1;
    // const birth2=dayjs(year+"-"+bday);
    // setDday(birth2.diff(today,'d'));
  }
  return (
    <>
      <Who>{name}의 생일</Who>
      <Dday>D - {dday}</Dday>
    </>
  );
};

export default MainTitle;