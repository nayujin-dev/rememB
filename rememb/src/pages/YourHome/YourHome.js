import React from "react";
import ToCeleb from "../../components/YourHome/ToCeleb";
import WatchBalance from '../../components/CommonHome/WatchBalance';
import Layout from "../../components/CommonHome/Layout";
import PartyRoom from "../../components/CommonHome/PartyRoom";

const YourHome = () => {
  return (
    <Layout>
      <PartyRoom />
      <ToCeleb />
      <WatchBalance who={'멋사'}/>
    </Layout>
  );
};

export default YourHome;