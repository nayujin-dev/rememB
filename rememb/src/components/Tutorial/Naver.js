import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const Naver = () => {
  const { naver } = window;
  const NAVER_CLIENT_ID = 'n0uYMSZfV8FBZpE_Qbgc'; // 발급 받은 Client ID 입력
  const NAVER_CALLBACK_URL = 'http://localhost:3000/myParty/'; // 작성했던 Callback URL 입력

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      callbackHandle: true,
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: 'green', type: 3, height: '50' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();

    getNaverToken();
    naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log('로그인상태');
      }
    });
  };
  const location = useLocation();

  const getNaverToken = () => {
    if (!location.hash) {
      return;
    }

    const token = location.hash.split('=')[1].split('&')[0];
    // axios.post(`${serverapi}/user/naver-login`,{
    //     token
    // },{
    //     withCredentials:true
    // }
    // ).then((res)=>{
    //     window.location.replace('/tutorial');
    // })
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };
  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    console.log(token);
  };

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  return (
    <>
      <div id="naverIdLogin">ee</div>
    </>
  );
};

export default Naver;
