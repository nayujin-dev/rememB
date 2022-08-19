import React, { useEffect, useState } from 'react';
import Layout from '../../components/CommonHome/Layout';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BalCon = styled.div`
  margin: auto;
  margin-top: 8vh;
  height: 50vh;
`;
const BalA = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-evenly;
`;
const BalQ = styled.div`
  margin-bottom: 5vh;
  text-align: center;
  font-weight: 500;
  font-size: 7rem;
`;
const Answer = styled.button`
  position: relative;
  font-size: 5rem;
  font-weight: 500;
  border: ${(props) => (props.back ? 'none' : '1.5px solid #828282')};
  text-align: center;
  width: 39rem;
  height: 30vh;
  background-color: ${(props) => (props.back ? '#FFE0E8' : '#FFFFFF')};
  border-radius: 20px;
`;
const Check = styled.img`
  width: 7rem;
  position: absolute;
  top: 4rem;
  left: 4rem;
`;
const Img = styled.img`
  width: 20rem;
  margin: 9rem 0;
`;
const Btn = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 8rem;
  padding: 2rem 4rem;
  width: 30rem;
  font-size: 5rem;
  border-radius: 80px;
  background: linear-gradient(to right, #f3d6ea, #fcd5d0);
`;
const Warn = styled.div`
  font-size: 4.5rem;
  font-weight: 500;
  color: #545454;
`;
const AnswerBalance = () => {
  const loca = useLocation();
  const id = loca.state.id.toString();
  const token = loca.state.token;
  const content = loca.state.content;
  const leftq = loca.state.a1content;
  const rightq = loca.state.a2content;
  const question_id = loca.state.q.toString();
  const navi = useNavigate();
  const [myA, setMyA] = useState();
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [leftCheck, setLeftCheck] = useState('/img/check.png');
  const [rightCheck, setRightCheck] = useState('/img/check.png');
  const onLeftClick = () => {
    // setMyA(1);
    setLeftCheck('/img/pinkcheck.png');
    setRightCheck('/img/check.png');
    setMyA((question_id * 2 - 1));
    setLeft(true);
    setRight(false);
  };
  const onRightClick = () => {
    // setMyA(2);
    setLeftCheck('/img/check.png');
    setRightCheck('/img/pinkcheck.png');
    setMyA((question_id * 2));
    setLeft(false);
    setRight(true);
  };
  const onClick = () => {
    alert('저장되었습니다');
    axios
      .post(
        `http://43.200.193.74:8000/myParty/seeBalance/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          user: id,
          answer_id: myA,
          question_id: question_id,
        }
      )
      .then((res) => {
        console.log(res);
        navi(`/myParty/seeBalance/${id}`, { state: { id: id, token: token } });
      })
      .catch(function (error) {
        console.log(error);
        console.log(typeof(myA));
        console.log(id);
      });
  };
  return (
    <Layout id={id} token={token}>
      <BalCon>
        <BalQ>{content}</BalQ>
        <BalA>
          <Answer onClick={onLeftClick} back={left}>
            <Check src={leftCheck} />
            {/* question id가 바뀔때마다 이미지 변경 */}
            <Img src={`/img/balanceIcon/${question_id}/1.png`} />
            <br />
            {leftq}
          </Answer>
          <Answer onClick={onRightClick} back={right}>
            <Check src={rightCheck} />
            <Img src={`/img/balanceIcon/${question_id}/2.png`} />
            <br />
            {rightq}
          </Answer>
        </BalA>
      </BalCon>
      <Warn>
        한 번 정한 대답은 변경할 수 없습니다. <br />
        신중하게 선택해 주세요.
      </Warn>
      <Btn onClick={onClick}>저장</Btn>
    </Layout>
  );
};

export default AnswerBalance;
