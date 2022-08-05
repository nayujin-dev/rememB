import React from "react";
import { useNavigate } from "react-router-dom";

const MakeParty = () => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/login');
  }
  return (
    <>
      <button onClick={onClick}>내 파티룸 만들기</button>
    </>
  );
};

export default MakeParty;