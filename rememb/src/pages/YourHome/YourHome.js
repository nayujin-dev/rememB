import React, { useEffect, useState } from "react";
import ToCeleb from "../../components/YourHome/ToCeleb";
import WatchBalance from '../../components/CommonHome/WatchBalance';
import Layout from "../../components/CommonHome/Layout";
import PartyRoom from "../../components/CommonHome/PartyRoom";
import { useParams } from "react-router-dom";
import { dbService } from "../../fbase";

const YourHome = ({isLoggedIn}) => {
  const [myData,setMydata]=useState();
  const [isSet,setIsSet]=useState(false);
  const {id}=useParams();
  useEffect(()=>{
    dbService
    .doc(`userobj/${id}`)
    // .where("username", "==", props.id)
    .get()
    .then((doc) => {
      // querySnapshot.forEach((doc) => {
        setMydata(doc.data());
        setIsSet(true);
      // });
    });
    
  },[id]);
  
  // const token = window.location.href.split('=')[1].split('&')[0];

  return (
    <>
    {isSet&&
     <Layout id={myData} token='no' >
     <PartyRoom id={myData} token={isLoggedIn} />
     <ToCeleb id={myData} />
     {/* <WatchBalance id={myData} token={isLoggedIn}/> */}
   </Layout>}
    </>
   
  );
};

export default YourHome;