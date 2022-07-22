import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KaKaoLogin from 'react-kakao-login';

const SocialLogin = () => {
  const navi2=useNavigate();
  const navi3=useNavigate();
  const onClick2=()=>{
    navi2('');
  }
  const onClick3=()=>{
    navi3('');
  
  }
  useEffect(()=>{

  },[])
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
      /><br /><br />
      <button onClick={onClick2}>네이버로 로그인</button><br /><br />
      <button onClick={onClick3}>인스타그램으로 로그인</button><br /><br />
    </div>
  );
};

export default SocialLogin;