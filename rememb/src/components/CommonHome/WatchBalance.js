import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { dbService } from '../../fbase';

const Btn = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 5rem;
  padding: 2rem 5rem;
  width: 55rem;
  font-size: 5rem;
  border-radius: 80px;
  background: linear-gradient(to right, #f3d6ea, #fcd5d0);
`;
const WatchBalance = ({ id, token }) => {
  const navigate = useNavigate();
  const onClick = () => {
//     dbService.collection('balance').add({
//       "ALREADY_ANSWER": [
//         {
//             "user": 6,
//             "question_id": 3,
//             "answer_id": 5,
//             "qcontent": "3번째질문",
//             "acontent1": "3-1",
//             "acontent2": "3-2"
//         },
//         {
//             "user": 6,
//             "question_id": 2,
//             "answer_id": 3,
//             "qcontent": "두번째질문",
//             "acontent1": "왼쪽",
//             "acontent2": "오른쪽"
//         }
//     ],
//     "QnA": [
//         {
//             "id": 1,
//             "question_content": "선물은 자고로?",
//             "a1id": 1,
//             "a1content": "실용적이어야한다",
//             "a2id": 2,
//             "a2content": "예뻐야한다"
//         },
//         {
//             "id": 4,
//             "question_content": "44",
//             "a1id": 7,
//             "a1content": "4-1",
//             "a2id": 8,
//             "a2content": "4-2"
//         },
//         {
//             "id": 5,
//             "question_content": "55질문",
//             "a1id": 9,
//             "a1content": "5-1",
//             "a2id": 10,
//             "a2content": "5-2"
//         },
//         {
//             "id": 6,
//             "question_content": "66질문",
//             "a1id": 11,
//             "a1content": "6-1",
//             "a2id": 12,
//             "a2content": "6-2"
//         },
//         {
//             "id": 7,
//             "question_content": "77질문",
//             "a1id": 13,
//             "a1content": "7-1",
//             "a2id": 14,
//             "a2content": "7-2"
//         }
//     ],
// }
    
    navigate(`/myParty/seeBalance/1`, {
      state: { id: id, token: token },
    });
  }
    // )}
  return <Btn onClick={onClick}>생일 밸런스 보기</Btn>;
};

export default WatchBalance;
