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
  const [done, setDone] = useState([]);
  const [donelist, setDonelist]=useState([]);
  const [left, setLeft] = useState(null);
  const loca = useLocation();
  const id = loca.state.id;
  const token = loca.state.token;
  const [nothing,setNothing]=useState(true);
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
        if(response.data.ALREADY_ANSWER !== null) {
          for(let i=0;i<response.data.ALREADY_ANSWER.length;i++){
            console.log(response.data.ALREADY_ANSWER[i][1]);
            console.log(response.data.ALREADY_ANSWER[1][1]);
            setDone([response.data.ALREADY_ANSWER[i][1], ...done]);
            setDonelist([response.data.ALREADY_ANSWER[i][2],...donelist]);
          }
          console.log(done);
          console.log(response.data.ALREADY_ANSWER);
          console.log(response.data.ALREADY_ANSWER.length);
          console.log(donelist);
          // console.log(done.includes(7));
        }else{setNothing(false);}
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
          (question) =>(
            (left-question.id >= 0) ? (
              <>
                {console.log(typeof(question.id))}
                {console.log(typeof(left))}
                {/* 맞았을 때 = 아직 안됐을때 */}
                <Question>D-{question.id} 공개</Question>
                <MylistBefore>
                  <Img src="../../../img/balanceIcon/lock.png" />
                </MylistBefore>
              </>
            ) : (
              <>
                <Compo
                  isDone={nothing&&done.includes(question.id)}
                  id={id}
                  selectA={donelist}
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
            ))
        )}
      {/* <Compo id={id}/> */}
    </Layout>
  );
};

export default SeeBalance;
