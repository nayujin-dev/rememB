import React, { useEffect } from 'react';
import KaKaoLogin from 'react-kakao-login';
import { useNavigate } from 'react-router-dom';
import Naver from './Naver';

const SocialLogin = () => {
  const navigate = useNavigate();
  const socialLoginSuccess = (res) => {
    console.log('소셜 로그인 성공');
    navigate('/myParty', {
      state: { res: res },
    });
    console.log(res);
  };

  const socialLoginFail = (res) => {
    console.log('소셜 로그인 실패');
    console.log(res);
  };

  return (
    <div>
      <KaKaoLogin
        kakao_auth_url="https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code"
        token={'60176c9773f08d1a5ad7286c25a1b6d2'}
        scope="profile_nickname, account_email, birthday"
        redirect_uri="http://localhost:3000/OAuth/kakao/callback/"
        onSuccess={socialLoginSuccess}
        onFail={socialLoginFail}
        onLogout={console.info}
        className="KakaoLogin"
        // id="kakao"
        getProfile={true}
      />
      {/* <Kakao /> */}
      <Naver />
      <br />
      <br />
    </div>
  );
};

export default SocialLogin;
