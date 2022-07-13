import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ToCeleb = () => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/others/selectimg');
  }
  return (
    <div>
      <button onClick={onClick}>나도 축하해주기</button>
    </div>
  );
};

export default ToCeleb;