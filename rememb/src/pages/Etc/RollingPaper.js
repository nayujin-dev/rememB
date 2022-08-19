import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import EtcLayout from '../../components/CommonHome/EtcLayout';
import SeeRP from '../../components/Etc/SeeRP';

const RollingPaper = () => {
  const {id}= useParams();
  const loca=useLocation();
  const token= loca.state.token;
  const[rollingList,setRollingList]=useState([]);
  const [background,setBackground]=useState("#FFEFF3");
  useEffect(()=>{
    id!==""&&getRP();
  },[id]);
  const getRP = () => {
    axios
      .get(`http://43.200.193.74:8000/partyroom/rollpaper/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
  // const rolling=['/img/emoticons/1/1.png','/img/emoticons/1/2.png','/img/emoticons/1/3.png','/img/emoticons/2/1.png','/img/emoticons/2/2.png','/img/emoticons/2/3.png','/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png','/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png','/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png','/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png'];
        console.log(response);
        setBackground(response.data.background);
        setRollingList(response.data.letters);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <EtcLayout id={id} token={token} >
      <SeeRP rollingList={rollingList} background={background}/>
    </EtcLayout>
  );
};

export default RollingPaper;
