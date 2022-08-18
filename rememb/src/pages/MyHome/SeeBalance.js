import React, { useEffect } from 'react';
import Layout from '../../components/CommonHome/Layout';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import CompoNotYet from '../../components/Balance/CompoNotYet';
import CompoNew from './../../components/Balance/CompoNew';
import CompoDid from './../../components/Balance/CompoDid';
import { useState } from 'react';
import Compo from '../../components/Balance/Compo';

const SeeBalance = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [done, setDone]=useState();
  const [doneList, setDoneList]=useState([]);
  const loca = useLocation();
  const id = loca.state.id;
  const token = loca.state.token;
  // const qnalist=[];
  // const showBalance=()=>{
  //   list.map((index)=>{

  //   })
  // }
  const getToken = () => {
    axios
      .get(`http://43.200.193.74:8000/balance/mylist/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setList(response.data.QnA);
        setList(response.data);
        // setDoneList(response.data.ALREADY_ANSWER);
        // setDone(doneList.length);
        setDone(2);
        // console.log(response.data.QnA);
        console.log(list);
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
  useEffect(() => {
    id !== '' && getToken();
  }, [id]);

  return (
    <Layout id={id} token={token}>
      {list!==null&&
        list.map((question)=>(
          <Compo
            isDone={done}
            id={id}
            question_id={question.id}
            content={question.question_content}
            a1content={question.a1content}
            a2content={question.a2content}
            token={token}
          />
        ))
      }
      {/* <Compo id={id}/> */}
    </Layout>
  );
};

export default SeeBalance;
