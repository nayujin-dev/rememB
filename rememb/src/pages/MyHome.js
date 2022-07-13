import React from "react";
import ToBalance from './../ToBalance';
import WatchBalance from './../WatchBalance';

const MyHome = () => {
  return (
    <div>
      <h1>마이홈 페이지입니다.</h1>
      <ToBalance />
      <br />
      <WatchBalance />
    </div>
  );
};

export default MyHome;