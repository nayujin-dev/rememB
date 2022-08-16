import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import { useNavigate } from 'react-router-dom';
import Naver from './Naver';
import axios from 'axios';

const Header = styled.div`
  background-color: #ffeff3;
  height: 45rem;
  padding-top: 20rem;
`;
const Div = styled.div``;
const Img = styled.img`
  width: 20rem;
  height: 20rem;
`;
const InfoText = styled.div`
  font-size: 5rem;
  color: #787878;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  padding-top: 25px;
  padding-bottom: 50px;
`;

const NaverDiv = styled.div`
  margin-top: 25px;
`;

// const KaKaoLogin = styled.div``;

const SocialLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [birth, setBirth] = useState('');
  const [accessT, setAccessT] = useState('');
  const [access, setAccess] = useState('');
  const socialLoginSuccess = (res) => {
    // navigate('/setting', {
    //   state: { res: res },
    // });
    console.log(res);
    const b = res.profile.kakao_account.birth.toString();
    console.log(b);

    const month = b[0]+'-'+b[1];
    const day = b[2]+'-'+b[3];
    console.log(day);

    axios
      .post(
        'https://cors-anywhere.herokuapp.com/http://43.200.193.74:8000/user/signin/',
        {
          email: res.profile.kakao_account.email,
          username: res.profile.kakao_account.profile.nickname,
          provider: 'kakao',
          birth: '1999-'+month+'-'+day,
        },
        {
          withCredentials: false,
        }
      )
      .then((response) => {
        console.log(response.data);
        setUsername(res.profile.kakao_account.profile.nickname);
        setBirth(res.data.response.birthday);
        navigate('/setting', {
          state: { username: username, birth: birth },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // console.log(res);

  const socialLoginFail = (res) => {
    console.log('소셜 로그인 실패');
    console.log(res);
  };

  return (
    <Div>
      <Header>
        <Img src="img/emoticons/logo/logo2.png" />
      </Header>
      <InfoText>로그인 후 이용 가능합니다.</InfoText>

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
      <NaverDiv>
        <Naver />
        <br />
        <br />
      </NaverDiv>
    </Div>
  );
};
export default SocialLogin;
