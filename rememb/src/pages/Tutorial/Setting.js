import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InitialSetting from '../../components/Tutorial/InitialSetting';
// import '../../style1.css';
import axios from 'axios';
const Setting = ({ res }) => {
  const location = useLocation();
  // const [info,setInfo]=useState('');
  const [username, setUsername] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  /* 아래 부분은 로그인후를 위한거라.. 그냥 url에 /myParty를 입력하면 아래부분때문에 오류남! 그래서 코딩할땐 주석처리하고 진행하면될듯!! */
  if (!window.location.href.includes('access_token')) {
    setUsername(location.state.username);
    setBirth(location.state.birth);
  }

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    const userData = axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/nid/me',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': `${window.location.href}`,
            'Access-Control-Allow-Credentials': true,
          },
        }
      )
      .then((response) => {
        setUsername(response.data.response.name);
        setBirth(response.data.response.birthday);
        setEmail(response.data.response.email);
        console.log(response);
        // console.log();
        // setInfo(response.data.response);
        // setUsername(info.name);
        // setBirth(info.birthyear+'-'+info.birthday);
        // setEmail(info.email);

      });
  };

  useEffect(() => {
    window.location.href.includes('access_token') && getToken();
  }, []);

  return (
    <>
      {username === '' ? (
        <div style={{position:'absolute', top:'20vh',left: '50%', transform: 'translateX(-50%)'}}>
           <img
            src="/img/pangLogo.png"
            alt="loading"
            style={{ width: '30rem', height: '30rem', textAlign:'center'}}
        />
        <div style={{fontsize:'9rem'}}>
          로딩 중입니다
        </div>
        </div>
      ) : (
        <InitialSetting username={username} birth={birth} email={email} social='naver'/>
      )}
    </>
  );
};

export default Setting;
