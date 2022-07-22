import React from "react";
import { useNavigate } from "react-router-dom";
import Naver from "./Naver";

const SocialLogin = () => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('');
  }

  return (
    <div>
      <button onClick={onClick}>카카오톡으로 로그인</button><br /><br />
      <Naver/>
      <button onClick={onClick}>인스타그램으로 로그인</button><br /><br />
    </div>
  );
};

export default SocialLogin;