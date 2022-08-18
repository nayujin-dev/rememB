import React, { useEffect } from 'react';
import Layout from '../../components/CommonHome/Layout';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import CompoNotYet from '../../components/Balance/CompoNotYet';
import CompoNew from './../../components/Balance/CompoNew';
import CompoDid from './../../components/Balance/CompoDid';
import { useState } from 'react';
import Compo from '../../components/Balance/Compo';

const SeeBalance = ({ id, token }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // const token = location.state.token;

  const getToken = () => {
    const userData = axios
      .get(
        'http://43.200.193.74:8000/balance/mylist/15/',
        {
          headers: {
            // Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': `${window.location.href}`,
            'Access-Control-Allow-Credentials': true,
          },
        }
      )
      .then((response) => {
        // const [check, setCheck] = useState('0');
        // console.log(response.data);
        // for (var i = 0; i < list.length; i++) {
        //   if (response.data.left_birth > 7) {
        //     // 남은 날짜가 7일 초과면 CompoNoYet
        //     list[i] = 0;
        //     <CompoNotYet />;
        //   }
        //   if (response.data.left_birth <= 7) {
        //     list[i] = 1;
        //     // 답 아직이면 CompoNew에 적용
        //     // 답 했으면 CompoDid에 적용
        //     if (check == 0) {
        //       <CompoNew />;
        //       list[i] = 2;
        //       setCheck('1');
        //     } else {
        //       <CompoDid />;
        //     }
        //   }
        // }
      });
  };
  // useEffect(() => {
  //   getToken();
  //   console.log(token);
  // }, []);

  return (
    <Layout>
      <Compo />
    </Layout>
  );
};

export default SeeBalance;
