import React from "react";
import Layout from "../../components/CommonHome/Layout";
import SevenBalance from "../../components/MyHome/SevenBalance";
import styled from "styled-components";

const Mylist=styled.div`
  background-color: #D9D9D9;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  font-size: 20px;
  padding: 10px;
`;
const SeeBalance = () => {
  return (
    <Layout>
      {/* map써서 컴포넌트들을 다 불러와야할듯
      그래서 그 컴포넌트들이 각각 판단해서 기간 됐으면 내용공개, 안지났으면 블러처리 일케 .. 
      아래는 걍 임시로 해둔거양*/}
      <Mylist>D-7의 밸런스게임</Mylist>
      <Mylist>D-6의 밸런스게임</Mylist>
      <Mylist>D-5의 밸런스게임</Mylist>
      <Mylist>D-4의 밸런스게임</Mylist>
      <Mylist>D-3의 밸런스게임</Mylist>
      {/* <SevenBalance /> */}
    </Layout>
  );
};

export default SeeBalance;