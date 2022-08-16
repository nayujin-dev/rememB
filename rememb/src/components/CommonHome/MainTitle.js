import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const Who = styled.div`
  margin-top: 12rem;
  font-size: 9rem;
  color: ${(props) => (props.textcolor ? props.textcolor : '#FE4179')};
  font-weight: 700;
  text-align: center;
`;
const Dday = styled.div`
  margin: 1rem 0 3rem;
  text-align: center;
  font-weight: 400;
  font-size: 6rem;
`;
const MainTitle = ({ name, bday, textcolor }) => {
  // const today=new Date();
  const [dday, setDday] = useState('');
  const today = dayjs();
  const birth = dayjs(today.get('year') + '-' + bday);
  if (today.isBefore(birth)) {
    setDday(birth.diff(today, 'd'));
  } else if (today.isSame(birth)) {
    setDday(0);
  } else {
    const year = today.get('year') + 1;
    const birth2 = dayjs(year + '-' + bday);
    setDday(birth2.diff(today, 'd'));
  }
  // if (today.getMonth-month)>=0

  //   useEffect(() => {
  //     console.log(name);
  //     console.log(bday);
  //   }, [name, bday]);
  return (
    <>
      <Who textcolor={textcolor}>{name}의 생일</Who>
      <Dday>D - {dday}</Dday>
    </>
  );
};

export default MainTitle;
