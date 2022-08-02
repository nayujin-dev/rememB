import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KaKaoLogin from 'react-kakao-login';
import Naver from './Naver';

const SocialLogin = () => {
  const navi = useNavigate();
  const onClick = () => {
    navi('');
  };

  const socialLoginSuccess = (res) => {
    console.log('소셜 로그인 성공');
    console.log(res);
  };

  const socialLoginFail = (res) => {
    console.log('소셜 로그인 실패');
    console.log(res);
  };

  return (
    <div>
      <KaKaoLogin
        token={'f39e499eb90c27c6d0be359f8e3b2d18'}
        redirect_uri={'http://localhost:3000/OAuth/kakao/callback/'}
        onSuccess={socialLoginSuccess}
        onFail={socialLoginFail}
        onLogout={console.info}
        className="KakaoLogin"
        // id="kakao"
        getProfile={true}
      />
      <Naver />
      <button onClick={onClick}>인스타그램으로 로그인</button>
      <br />
      <br />
    </div>
  );
};

export default SocialLogin;
