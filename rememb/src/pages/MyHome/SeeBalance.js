import React, { useEffect } from 'react';
import Layout from '../../components/CommonHome/Layout';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import CompoNotYet from '../../components/Balance/CompoNotYet';
import CompoNew from './../../components/Balance/CompoNew';
import CompoDid from './../../components/Balance/CompoDid';

const SeeBalance = ({ seeBalance }) => {
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

        if (response.data.left_birth > 7) {
          // 남은 날짜가 7일 이상이면 CompoNoYet
        }
        if ((response.data.left_birth = 7)) {
          // 배열의 7번째 불러오고 답 아직이면 CompoNew에 적용
          // 답 했으면 CompoDid에 적용
        }
        if ((response.data.left_birth = 6)) {
          // 배열의 6번째 불러오고 답 아직이면 CompoNew에 적용
          // 답 했으면 CompoDid에 적용
        }
      });
  };
  // useEffect(() => {
  //   getToken();
  //   console.log(token);
  // }, []);

  return (
    <Layout>
      {/* 수정 필요 */}
      {seeBalance.map((it, idx) => (
        <div ket={idx}>
          <div>질문: {it.qcontent}</div>
          <div>답1: {it.acontent1}</div>
          <div>답2: {it.acontent2}</div>
        </div>
      ))}
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
