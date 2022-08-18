import React from 'react';
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
const MakeParty = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/login');
  };
  return (
    <>
      <Btn onClick={onClick}>내 파티룸 만들기</Btn>
    </>
  );
};

export default MakeParty;
