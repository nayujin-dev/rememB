import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EtcLayout from "../../components/CommonHome/EtcLayout";
import SeeRP from "../../components/Etc/SeeRP";

const RollingPaper = () => {
  const [date,setDate]=useState("2022.7.8");
  const [name,setName]=useState("멋사");
  const [age,setAge]=useState(23);
  const navi=useNavigate();
  const onClick=()=>{
    navi(-1);
  }
  return (
    <EtcLayout>
      <h1>{date}</h1>
      <h3>{name}의 {age}번째 생일</h3>
      <>링크공유이모지</><br/><br/>
      <SeeRP />
      <button onClick={onClick}>뒤로가기</button>
    </EtcLayout>
  );
};

export default RollingPaper;