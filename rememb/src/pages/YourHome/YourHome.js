import React from "react";
import ToCeleb from "../../components/YourHome/ToCeleb";
import WatchBalance from '../../components/CommonHome/WatchBalance';
import Layout from "../../components/CommonHome/Layout";
import PartyRoom from "../../components/CommonHome/PartyRoom";
import { useParams } from "react-router-dom";

const YourHome = () => {

  const {id}=useParams();
  // const token = window.location.href.split('=')[1].split('&')[0];

  return (
    <Layout id={id} token={null} >
      <PartyRoom id={id} token={null} />
      <ToCeleb id={id} />
      <WatchBalance who={'멋사'}/>
    </Layout>
  );
};

export default YourHome;