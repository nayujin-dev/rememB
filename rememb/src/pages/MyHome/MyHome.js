import React from "react";
import MainTitle from "../../components/CommonHome/MainTitle";
import PartyRoom from "../../components/CommonHome/PartyRoom";
import ToBalance from '../../components/MyHome/ToBalance';
import WatchBalance from '../../components/CommonHome/WatchBalance';

const MyHome = () => {
  // const [who,setWho]=useState('');
  return (
    <div>
      <MainTitle />
      <PartyRoom />
      <ToBalance />
      <br />
      <WatchBalance who={'나'}/>
    </div>
  );
};

export default MyHome;