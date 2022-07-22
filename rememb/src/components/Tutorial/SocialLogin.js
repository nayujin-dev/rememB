import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KaKaoLogin from 'react-kakao-login';
import Naver from "./Naver";

const SocialLogin = () => {
  const navi=useNavigate();
  const onClick=()=>{
    navi('');
  }

  return (
    <div>
      <KaKaoLogin
        token={'f39e499eb90c27c6d0be359f8e3b2d18'}
        redirect_uri={'http://localhost:3000/OAuth/kakao/callback/'}
        onSuccess={console.log}
        onFail={console.error}
        onLogout={console.info}
        className="KakaoLogin"
        // id="kakao"
      />
      <Naver/>
      <button onClick={onClick}>인스타그램으로 로그인</button><br /><br />

    </div>
  );
};

export default SocialLogin;