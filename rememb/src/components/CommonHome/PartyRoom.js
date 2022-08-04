import React from "react";
import styled from "styled-components";

const BackImg=styled.div`
  margin: 10px 30px;
  padding: 10px;
  background-image: url('/img/background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 30em;
`;
const PartyRoom = () => {
  return (
    <BackImg>
      여기는 파티룸 컴포넌트 공간입니다.
    </BackImg>
  );
};

export default PartyRoom;