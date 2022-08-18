import React from 'react';
import SeeBalance from '../../pages/MyHome/SeeBalance';
import CompoDid from './CompoDid';

const dummyList = [
  {
    user: 6,
    question_id: 3, // D-3의 질문
    answer_id: 5, // Answer번호는 5 or 6인데 이 유저가 선택한 것은 5번
    qcontent: '원하는 생일의 분위기',
    acontent1: '시끌벅적 사람많은', // 홀수면 이 답을 선택한 것임
    acontent2: '잔잔하고 분위기있는',
  },
  {
    user: 6,
    question_id: 2, // D-2의 질문
    answer_id: 3, // Answer번호는 5 or 6인데 이 유저가 선택한 것은 5번
    qcontent: '케이크는?',
    acontent1: '맛이 중요', // 홀수면 이 답을 선택한 것임
    acontent2: '디자인이 중요',
  },
];

const List = () => {
  return (
    <>
      <CompoDid compoDid={dummyList} />
    </>
  );
};

export default List;
