import React from "react";
import styled from "styled-components";

const BackImg=styled.div`
  margin: 7rem 10rem;
  padding: 7rem;
  background-color: #FFEFF3;
  border-radius: 30px;
  height:50vh;
/* backgro0und-image: url('/img/background.png'); */
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