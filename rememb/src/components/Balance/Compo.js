import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  token,
  dayleft,
  question_id,
  a1content,
  a2content,
  content,
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    if(token==null){
      alert('밸런스 고르기는 당사자만 가능합니다. 생일자의 답변을 기다려주세요!');
    }
    else{
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
    }
  };
  console.log(dayleft);
  console.log(typeof(dayleft));
  console.log(typeof(question_id));
  console.log(question_id);
  return (
    <>
      {dayleft>question_id ? (
        <>
        <Question>D-{question_id} 공개</Question>
        <MylistBefore>
          <Img src="/img/lock.png" />
        </MylistBefore>
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

export default Compo;
