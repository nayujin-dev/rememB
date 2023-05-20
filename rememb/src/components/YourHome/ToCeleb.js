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
const ToCeleb = ({ id }) => {
  
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/others/selectimg/1`, { state: { id: id } });
  };
  return (
    <>
      <Btn onClick={onClick}>나도 축하해주기</Btn>
    </>
  );
};

export default ToCeleb;
