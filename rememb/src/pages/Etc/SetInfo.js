import React from "react";
import ShowInfo from './../../components/Etc/ShowInfo';

const SetInfo = () => {
  const onClick=()=>{
    
  }
  // const [who,setWho]=useState('');
  return (
    <div>
      <h1>내 정보 설정</h1>
      <ShowInfo />
      <button onClick={onClick}>뒤로가기</button>
    </div>
  );
};

export default SetInfo;