import React from "react";
import styled from "styled-components";

const Paper = styled.div`
  margin-top: 7rem;
  padding: 10rem 0;
  background-color: #FFEFF3;
  height: 80vh;
  display: grid;
  overflow: scroll;
  grid-template-columns: repeat(auto-fill,minmax(10rem, 30rem));
  grid-gap: 5vh 1rem; 
`;
const Each=styled.div`
  width: 36rem;
  height: 50rem;
  position: relative;
  /* background-color: rgba(256,256,256,0.5); */
  /* border-radius:50px; */
`;
const Content=styled.div`
  z-index: 3;
  position: absolute;
  padding:1rem 3.7rem;
  top: 0;
  left: 0;
  font-size: 1rem;
`;
const Img=styled.img`
  opacity: 50%;
  position: relative;
  left:0;
  width: 32rem;
  height: 45rem;
  z-index: 2;
`;
const SeeRP = () => {
  const rolling=['/img/emoticons/1/1.png','/img/emoticons/1/2.png','/img/emoticons/1/3.png','/img/emoticons/2/1.png','/img/emoticons/2/2.png','/img/emoticons/2/3.png','/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png','/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png','/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png','/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png'];
  return (
    <Paper>
      {rolling.map((index)=>(
        <>
          <Each>
            <Img img={index} src={index}/>
            <Content>
              To. 멋사에게<br/>
              안녕 멋사야 나는 두영이야
              너의 생일을 진심으로 축하해 
              어쩌구저쩌구 블라블라숑숑
              너는 정말 좋은 친구야 고마워 
              어쩌구저쩌구 왈왈 웅왕왕왕
              블라블라 숑왕왕앙웅용ㅇ앙
              ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
              ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
              ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
            </Content>
          </Each>
        </>
        
        
      ))}
    </Paper>
  );
};

export default SeeRP;