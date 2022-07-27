import React, { useEffect } from "react";
import MainTitle from "../../components/CommonHome/MainTitle";
import PartyRoom from "../../components/CommonHome/PartyRoom";
import ToBalance from '../../components/MyHome/ToBalance';
import WatchBalance from '../../components/CommonHome/WatchBalance';
import axios from 'axios';
const MyHome = () => {

  // const [who,setWho]=useState('');
  const getToken = () => {
    
    const token = window.location.href.split('=')[1].split('&')[0];
    //  axios.post(`${token}/user/naver-login`,{
    //         token
    //     },{
    //         withCredentials:true
    //     }      
    //     ).then((res)=>{
    //         window.location.replace('/tutorial');
    //     })
    const userData = axios.get('https://openapi.naver.com/v1/nid/me', {
        headers : {
            'Authorization' : `Bearer ${token}`,
        }
    })
    //CORS에러 뜨는게 당연함 !! 구래서 ARC로 헤더 넣어서 get 요청하면 제대로뜸
  }

  useEffect(()=>{
    window.location.href.includes('access_token') && getToken();

  },[])
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