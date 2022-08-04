import React from "react";
import ChooseBalance from './../../components/MyHome/ChooseBalance';
import BalanceSave from './../../components/MyHome/BalanceSave';
import Layout from "../../components/CommonHome/Layout";

const AnswerBalance = () => {
  // const [who,setWho]=useState('');
  return (
    <Layout>
      <ChooseBalance /><br />
      <>You can't change the answer.<br />Choose carefully!</>
      <br />
      <BalanceSave/>
    </Layout>
  )
};

export default AnswerBalance;