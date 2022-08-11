import React from "react";
import MainTitle from "../../components/CommonHome/MainTitle";
import PartyRoom from "../../components/CommonHome/PartyRoom";
import MakeParty from "../../components/Tutorial/MakeParty";

const Tutorial = () => {
  // const [who,setWho]=useState('');
  return (
    <>
      <MainTitle />
      <PartyRoom />
      <MakeParty />
    </>
  );
};

export default Tutorial;