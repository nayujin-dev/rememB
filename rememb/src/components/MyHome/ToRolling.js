import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Btn = styled.div`
  text-align: center;
  margin: auto;
  padding: 2rem 5rem;
  width: 55rem;
  font-size: 5rem;
  border-radius: 80px;
  background: linear-gradient(to right, #f3d6ea, #fcd5d0);
`;
const ToBalance = ({ id, token }) => {
  const [left,setLeft]=useState(366);
  const navigate = useNavigate();
  useEffect(()=>{
    id!==""&&getRP();
  },[id]);
  const getRP = () => {
    axios
      .get(`http://43.200.193.74:8000/partyroom/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLeft(response.data.left_birth);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onClick = () => {
    if(left===0){
      navigate(`/etc/seeRP/${id}`, { state: { token: token } });
    }else{
      alert("생일 당일부터 확인 가능합니다");
    }
  };
  return (
    <>
      <Btn onClick={onClick}>롤링페이퍼 보기</Btn>
    </>
  );
};

export default ToBalance;
