import React from "react";
import styled from "styled-components";

const BackImg=styled.div`
  margin: 30px 30px 50px;
  padding: 30px;
  width:350px;
  background-color: #FFEFF3;
  border-radius: 70px;
  height: 500px;
/* background-image: url('/img/background.png'); */
  /* background-repeat: no-repeat; */
  /* background-size: 100% 100%; */
`;
const PartyRoom = () => {
  return (
    <BackImg>
      여기는 파티룸 컴포넌트 공간입니다.
    </BackImg>
  );
};

export default PartyRoom;