import React from "react";
import MainTitle from "../components/CommonHome/MainTitle";
import PartyRoom from "../components/CommonHome/PartyRoom";
import ToCeleb from "../components/YourHome/ToCeleb";
import WatchBalance from './../WatchBalance';

const YourHome = () => {
  return (
    <div>
      <MainTitle/>
      <PartyRoom />
      <ToCeleb/>
      <br />
      <WatchBalance who={'멋사'}/>
    </div>
  );
};

export default YourHome;