import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InitialSetting from '../../components/Tutorial/InitialSetting';
import axios from 'axios';

const Setting = () => {
  const loca = useLocation();
  const [social, setSocial] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const kakao = () => {
    if (!window.location.href.includes('access_token')) {
      const res = loca.state.res;
      setUsername(res.kakao_account.profile.nickname);
      setEmail(res.kakao_account.email);
      setSocial('kakao');
    }
  };

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    axios
      .get(
        'https://openapi.naver.com/v1/nid/me',
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
        setEmail(response.data.response.email);
        console.log(response);
        setSocial('naver');
      });
  };

  useEffect(() => {
    window.location.href.includes('access_token') ? getToken() : kakao()
  }, []);
  return (
    <>
      {username === '' ? (
        <div
          style={{
            position: 'absolute',
            top: '20vh',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <img
            src="/img/pangLogo.png"
            alt="loading"
            style={{ width: '30rem', height: '30rem', textAlign: 'center' }}
          />
          <div style={{ fontsize: '9rem' }}>로딩 중입니다</div>
        </div>
      ) : (
        <InitialSetting
          username={username}
          email={email}
          social={social}
        />
      )}
    </>
  );
};

export default Setting;
