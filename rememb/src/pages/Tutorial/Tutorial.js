import React from "react";
import MainTitle from "../../components/CommonHome/MainTitle";
import PartyRoom from "../../components/CommonHome/PartyRoom";
import MakeParty from "../../components/Tutorial/MakeParty";

const Tutorial = () => {
  // const [who,setWho]=useState('');
  return (
    <div>
      <MainTitle />
      <PartyRoom />
      <br />
      <MakeParty />
    </div>
  );
};

export default Tutorial;