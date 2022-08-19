import React from 'react';
import PartyRoom from '../../components/CommonHome/PartyRoom';
import MakeParty from '../../components/Tutorial/MakeParty';
import styled from 'styled-components';

const Who = styled.div`
  margin-top: 12rem;
  font-size: 9rem;
  color: #fe4179;
  font-weight: 700;
  text-align: center;
`;
const Dday = styled.div`
  margin: 1rem 0 3rem;
  text-align: center;
  font-weight: 400;
  font-size: 6rem;
`;
const Tutorial = () => {
  // const [who,setWho]=useState('');
  return (
    <>
      <Who>멋사의 생일</Who>
      <Dday>D - 7</Dday>
      <PartyRoom id='20' token=''/>
      <MakeParty />
    </>
  );
};

export default Tutorial;
