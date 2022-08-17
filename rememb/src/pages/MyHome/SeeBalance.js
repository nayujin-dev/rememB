import React, { useEffect } from 'react';
import Layout from '../../components/CommonHome/Layout';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import CompoNotYet from '../../components/Balance/CompoNotYet';
import CompoNew from './../../components/Balance/CompoNew';
import CompoDid from './../../components/Balance/CompoDid';
import SampleNav from '../../components/Etc/SampleNav';

const SeeBalance = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const token = location.state.token;

  const getToken = () => {
    const userData = axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://43.200.193.74:8000/balance/mylist/15/',
        {
          headers: {
            // Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': `${window.location.href}`,
            'Access-Control-Allow-Credentials': true,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  };
  useEffect(() => {
    // getToken();
    // console.log(token);
  }, []);
  return (
    <Layout>
      {/* <SampleNav /> */}

      {/* map써서 컴포넌트들을 다 불러와야할듯
      그래서 그 컴포넌트들이 각각 판단해서 기간 됐으면 내용공개, 안지났으면 블러처리 일케 .. 
      아래는 걍 임시로 해둔거양*/}
      <CompoDid />
      <CompoNew />
      <CompoNew />
      <CompoNotYet />
      <CompoNotYet />
      <CompoNotYet />
      <CompoNotYet />
      <br />
      <br />
    </Layout>
  );
};

export default SeeBalance;
