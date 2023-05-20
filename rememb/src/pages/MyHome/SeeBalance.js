import React, { useEffect } from 'react';
import Layout from '../../components/CommonHome/Layout';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Compo from '../../components/Balance/Compo';
import CompoDid from '../../components/Balance/CompoDid';
import { dbService } from '../../fbase';

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
  const [list, setList] = useState([]);
  const [left, setLeft] = useState(366);
  const [already,setAlready]=useState([]);
  const loca = useLocation();
  const id = loca.state.id;
  const token = loca.state.token;

  const getToken = () => {
    console.log(id);
    var today=new Date();
    var bday=new Date(today.getFullYear(),parseInt(id.birth*1 / 100)-1,id.birth%100);
    var gap=bday.getTime()-today.getTime();
    var result=Math.ceil(gap/(1000*60*60*24));
    dbService.doc(`balance/ZEQthKbeXom2gZ1S3dBu`)
    // .where("who", "==", 1)
    .get()
    .then((doc) => {
      // console.log(doc.data());
      // querySnapshot.forEach((doc) => {
      setAlready(doc.data().ALREADY_ANSWER);
      setLeft(doc.data().QnA);
      setList(doc.data().QnA);
    
    })
    // axios
    //   .get(`http://43.200.193.74:8000/balance/mylist/${id}/`, {
    //   })
    //   .then((response) => {
    //     setAlready(response.data.ALREADY_ANSWER);
    //     setLeft(response.data.leftDay);
    //     setList(response.data.QnA);
    //   });
  };
  useEffect(() => {
    id !== '' && getToken();
  }, [id]);

  return (
    <Layout id={id} token={token}>
      {left !== null &&
        already!==null&&
        already.map((question)=>(
          <CompoDid
            selectA={(question.answer_id)%(question.question_id)}
            question_id={question.question_id}
            content={question.qcontent}
            a1content={question.acontent1}
            a2content={question.acontent2}
          />
        ))
      }
      {list !== null &&
        left !== null &&
        list.map(
          (question) =>(
              <>
                <Compo
                  id={id}
                  dayleft={left}
                  question_id={question.id}
                  content={question.question_content}
                  a1content={question.a1content}
                  a2content={question.a2content}
                  token={token}
                />
              </>
            )
        )}
    </Layout>
  );
};

export default SeeBalance;
