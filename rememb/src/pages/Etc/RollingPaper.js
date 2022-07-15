import React, { useState } from "react";
import SeeRP from "../../components/Etc/SeeRP";

const RollingPaper = () => {
  const [date,setDate]=useState("2022.7.8");
  const [name,setName]=useState("멋사");
  const [age,setAge]=useState(23);

  return (
    <div>
      <h1>{date}</h1>
      <h3>{name}의 {age}번째 생일</h3>
      <>링크공유이모지</><br/><br/>
      <SeeRP />
    </div>
  );
};

export default RollingPaper;