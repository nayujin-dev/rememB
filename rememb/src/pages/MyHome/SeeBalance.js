import React, { useEffect } from 'react';
import Layout from '../../components/CommonHome/Layout';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Compo from '../../components/Balance/Compo';

const Question = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;
const Img = styled.img`
  width: 15rem;
  height: 15rem;
  margin-top: 3.5rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const MylistBefore = styled.div`
  background-color: #e7e7e7;
  width: 90%;
  height: 100px;
  margin: auto;
  margin-top: 7px;
  font-size: 20px;
  padding: 10px;
  border-radius: 30px;
`;
const SeeBalance = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [done, setDone] = useState(0);
  const [left, setLeft] = useState(null);
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
        setLeft(response.data.LeftDay);
        setList(response.data.QnA);
        console.log(response.data);
        // setDoneList(response.data.ALREADY_ANSWER);
        // setDone(doneList.length);
        response.data.ALREADY_ANSWER !== null &&
          setDone(response.data.ALREADY_ANSWER);
        setLeft(response.data.LeftDay);
      });
  };
  useEffect(() => {
    id !== '' && getToken();
  }, [id]);

  return (
    <Layout id={id} token={token}>
      {list !== null &&
        left !== null &&
        list.reverse().map(
          (question) =>
            // 생일 남은 날짜 100일 <= 7일
            // 남은 날짜가 8일, 9일, 10일,, 100일 -> true여야함
            // 남은 날짜가 7일, 6일, 5일... 이면 false
            // left (100) > 7
            // 50일 남았고 qi는 7이야.
            left >= question.id ? (
              <>
                {/* 맞았을 때 = 아직 안됐을때 */}
                <Question>D-{question.id} 공개</Question>
                <MylistBefore>
                  <Img src="../../../img/balanceIcon/lock.png" />
                </MylistBefore>
              </>
            ) : (
              <>
                {/* 틀렸을 때 = 해당하는 컴포넌트 판별 */}
                <Compo
                  isDone={done}
                  id={id}
                  dayleft={left}
                  // secret={question.id<left}
                  question_id={question.id}
                  content={question.question_content}
                  a1content={question.a1content}
                  a2content={question.a2content}
                  token={token}
                />
                {/* setDone(0); */}
              </>
            )
          // <Compo
          //   isDone={done}
          //   id={id}
          //   dayleft={left}
          //   // secret={question.id<left}
          //   question_id={question.id}
          //   content={question.question_content}
          //   a1content={question.a1content}
          //   a2content={question.a2content}
          //   token={token}
          // />
        )}
      {/* <Compo id={id}/> */}
    </Layout>
  );
};

export default SeeBalance;
