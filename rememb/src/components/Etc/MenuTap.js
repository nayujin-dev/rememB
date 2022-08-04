import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuTab = () => {
  const [name,setName]=useState("멋사");
  const navi=useNavigate();
  const onClick1=()=>{
    navi('/etc/seeRP');
  }
  const onClick2=()=>{
    navi('/myParty/seeBalance');
  }
  const onClick3=()=>{
    navi('/myParty');
  }
  const onClick4=()=>{
    navi('/etc/setinfo');
  }

  return (
    <div>
      <h1>사진</h1>
      <h2>{name}</h2>
      <hr /><br/>
      <button onClick={onClick1}>편지를 롤링페이퍼로 변환하기</button><br/><br/>
      <button onClick={onClick2}>내 밸런스게임 보러가기</button><br/><br/>
      <button onClick={onClick3}>내 파티룸 가기</button><br/><br/>
      <button onClick={onClick4}>내 정보 설정하기</button><br/><br/>
    </div>
  );
};

export default MenuTab;