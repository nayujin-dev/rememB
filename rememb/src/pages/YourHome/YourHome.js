import React from "react";
import MainTitle from "../../components/CommonHome/MainTitle";
import PartyRoom from "../../components/CommonHome/PartyRoom";
import ToCeleb from "../../components/YourHome/ToCeleb";
import WatchBalance from '../../components/CommonHome/WatchBalance';
import { Outlet } from "react-router-dom";
import Bottom from "../Bottom";

const YourHome = () => {
  return (
    <div>
      <MainTitle/>
      <Bottom/>
    </div>
  );
};

export default YourHome;