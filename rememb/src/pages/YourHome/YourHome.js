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
    <Layout>
      <PartyRoom id={id} token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwNzE2NzE2LCJpYXQiOjE2NjA3MTM3MTYsImp0aSI6ImE4YzBmZTZjYmM4MTRiMTA5MmJjZGFkMmU1MGYzM2ExIiwidXNlcl9pZCI6MTN9.jGMOEXD5bTRID5XKR6NKoq2tPlOvqJZIrhG2NpYDwhQ' />
      <ToCeleb />
      <WatchBalance who={'멋사'}/>
    </Layout>
  );
};

export default YourHome;