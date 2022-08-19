import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/CommonHome/Layout';

const Question = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;
const MylistAfter = styled.div`
  background-color: #ffeff3;
  width: 90rem;
  height: 100px;
  margin: auto;
  margin-top: 7px;
  display: inline-flex;
  justify-content: space-around;
  border-radius: 30px;
  align-items: center;
`;
const AnswerDid1 = styled.div`
  background-color: ${props=>props.select==true?"#FFADBC":"#FFEFF3"};
  width: 45rem;
  height: 100px;
  border-radius: 30px 0px 0px 30px;
  font-size: 18px;
  font-weight: 500;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  border: ${props=>(props.select==true?"2px solid #828282":"none")};
`;

const AnswerDid2 = styled.div`
  background-color: ${(props)=>(props.select==true?"#FFADBC":"#FFEFF3")};
  width: 45rem;
  height: 100px;
  border-radius: 0px 30px 30px 0px;
  font-size: 18px;
  font-weight: 500;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  border: ${props=>(props.select==true?"2px solid #828282":"none")};
`;
const AnswerNew1 = styled.div`
  background-color: #FFEFF3;
  width: 45.5rem;
  height: 100px;
  border-right-width: 0.5px;
  border-radius: 30px 0px 0px 30px;
  border-right-color: #828282;
  font-size: 18px;
  font-weight: 500;
  border-right-style: solid;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  border: ${(props) => props.left && '2px solid #828282'};
  /* border: 2px solid #828282; */
`;
const AnswerNew2 = styled.div`
  background-color: #FFEFF3;
  border-left-width: 0.5px;
  width: 45.5rem;
  height: 100px;
  border-radius: 0px 30px 30px 0px;
  border-right-color: #828282;
  font-size: 18px;
  font-weight: 500;
  border-left-style: solid;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
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

const Compo = ({
  id,
  isDone,
  token,
  selectA,
  dayleft,
  question_id,
  a1content,
  a2content,
  content,
}) => {

  // const[d7,setD7]=useState([]);
  // const[d7,setD7]=useState([]);
  // const[d7,setD7]=useState([]);
  // const[d7,setD7]=useState([]);
  // const[d7,setD7]=useState([]);
  // const[d7,setD7]=useState([]);
  // const[d7,setD7]=useState([]);
  // const [check, setCheck] = useState('0');
  // const [secret,setSecret]=useState(isDone);
  const navigate = useNavigate();
  // axios
  //   .get(
  //     `http://43.200.193.74:8000/balance/mylist/${id}`
  //     // {
  //     //     withCredentials:false,
  //     // }
  //   )
  //   .then((response) => {
  //     console.log(response);
  //     // setD7(response.data[0]);
  //     // setD6(response.data[1]);
  //     // setD7(response.data[0]);
  //     // setD7(response.data[0]);
  //     setUser(response.data.user);
  //     setQuestion_id(response.data.question_id);
  //     setAnswer_id(response.data.answer_id);
  //     setQcontent(response.data.qcontent);
  //     setAcontent1(response.data.acontent1);
  //     setAcontent2(response.data.acontent2);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // const onClick1 = () => {
  //   navigate('');
  // };
  const onClick = () => {
    navigate(`/myParty/ansBalance/${question_id}`, {
      state: {
        id: id,
        token: token,
        q: question_id,
        content: content,
        a1content: a1content,
        a2content: a2content,
        dayleft:dayleft,
      },
    });
  };
  return (
    <>
      {isDone ? (
        <>
          {/* 대답 한 상황 */}
          <Question>{content}</Question>
          <MylistAfter>
            <AnswerDid1 select={!question_id*2===selectA}>{a1content}</AnswerDid1>
            <AnswerDid2 select={question_id*2===selectA}>{a2content}</AnswerDid2>
          </MylistAfter>
          {/* {isDone(secret-question_id)} */}
        </>
      ) : (
        <>
          {/* 대답 안 한 상황 */}
          <Question>{content}</Question>
          <MylistAfter onClick={onClick}>
            {/* //         left값 false일 때 대답 안한거 = 색 변화 없음 */}
            <AnswerNew1 left={false}>{a1content}</AnswerNew1>
            <AnswerNew2>{a2content}</AnswerNew2>
          </MylistAfter>
          {/* setDone(1); */}
        </>
      )}
    </>
  );
};

// function CompoDid() {
//   // 이거 navigate 해야되는데! 에러떠서! 일단 놔둠
//   // const navigate = useNavigate();
//   // const onClick1 = () => {
//   //   navigate('');
//   // };
//   // const onClick2 = () => {
//   //   navigate('');
//   // };
//   const [qcontent, setQcontent] = useState('');
//   const [acontent1, setAcontent1] = useState('');
//   const [acontent2, setAcontent2] = useState('');

//   <>
//     <Question>{qcontent}</Question>
//     <MylistAfter
//     // onClick={onClick1}
//     >
//       <AnswerDid1>{acontent1}</AnswerDid1>
//       <AnswerDid2>{acontent2}</AnswerDid2>
//     </MylistAfter>
//   </>;
// }

// function CompoNew() {
//   const [left, setLeft] = useState(false);
//   const [qcontent, setQcontent] = useState('');
//   const [acontent1, setAcontent1] = useState('');
//   const [acontent2, setAcontent2] = useState('');
//   return (
//     <>
//       <Question>{qcontent}</Question>
//       <MylistAfter
//       // onClick={onClick2}
//       >
//         {/* left값 false일 때 대답 안한거 = 색 변화 없음 */}
//         <AnswerNew1 left={false}>{acontent1}</AnswerNew1>
//         <AnswerNew2>{acontent2}</AnswerNew2>
//       </MylistAfter>
//     </>
//   );
// }

// function CompoNotYet() {
//   const [date, setDate] = useState('0');
//   const [qcontent, setQcontent] = useState('');
//   const [acontent1, setAcontent1] = useState('');
//   const [acontent2, setAcontent2] = useState('');

//   <>
//     <Question>D-{date} 공개</Question>
//     <MylistBefore>
//       <Img src="../../../img/balanceIcon/lock.png" />
//     </MylistBefore>
//   </>;
// }

export default Compo;
