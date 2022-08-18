import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const Who = styled.div`
  margin-top: 12rem;
  font-size: 9rem;
  color: ${(props) => (props.textcolor ? props.textcolor : '#FE4179')};
  font-weight: 700;
  text-align: center;
`;
const Dday = styled.div`
  margin: 1rem 0 3rem;
  text-align: center;
  font-weight: 400;
  font-size: 6rem;
`;
const MainTitle = ({ id }) => {
  // const today=new Date();
  const [dday,setDday]=useState('');
  const [name,setName]=useState('');
  const [Tcolor,setTColor]=useState('#FE4179');
  useEffect(()=>{
    axios.get(
      `http://43.200.193.74:8000/partyroom/${id}/`,
      // {
      //   withCredentials: false,
      // }
    )
    .then((response) => {
      console.log(response.data);
      setName(response.data.username);
      setTColor(response.data.text);
      setDday(response.data.left_birth);
    }).catch(function (error) {
      console.log(error);
    });
  },[id]);
  
  return (
    <>
      <Who textcolor={Tcolor}>{name}의 생일</Who>
      <Dday>D - {dday}</Dday>
    </>
  );
};

export default MainTitle;
