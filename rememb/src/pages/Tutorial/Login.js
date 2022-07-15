import React from "react";
import MainTitle from "../../components/CommonHome/MainTitle";
import PartyRoom from "../../components/CommonHome/PartyRoom";
import MakeParty from "../../components/Tutorial/MakeParty";
import SocialLogin from "../../components/Tutorial/SocialLogin";

const Login = () => {
  // const [who,setWho]=useState('');
  return (
    <div>
      <h2>로그인 후 이용 가능합니다.</h2>
      <SocialLogin />
    </div>
  );
};

export default Login;