import React from "react";
import { useNavigate } from 'react-router-dom';

const WatchBalance = ({who}) => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/myParty/seeBalance');
  }
  return (
    <div>
      <button onClick={onClick}>{who}의 밸런스 게임 보기</button>
    </div>
  );
};

export default WatchBalance;