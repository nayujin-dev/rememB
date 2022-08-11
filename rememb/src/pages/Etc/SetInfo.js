import React from "react";
import { useNavigate } from "react-router-dom";
import EtcLayout from "../../components/CommonHome/EtcLayout";
import ShowInfo from './../../components/Etc/ShowInfo';

const SetInfo = () => {
  const navi=useNavigate();
  const onClick=()=>{
    navi(-1);
  }
  // const [who,setWho]=useState('');
  return (
    <EtcLayout>
      <h1>내 정보 설정</h1>
      <ShowInfo />
      <button onClick={onClick}>뒤로가기</button>
    </EtcLayout>
  );
};

export default SetInfo;