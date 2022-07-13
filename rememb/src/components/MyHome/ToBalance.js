import React from "react";
import { useNavigate } from "react-router-dom";

const ToBalance = () => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/myParty/ansBalance');
  }
  return (
    <div>
      <button onClick={onClick}>밸런스 게임하기</button>
    </div>
  );
};

export default ToBalance;