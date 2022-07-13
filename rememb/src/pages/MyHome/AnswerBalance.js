import React from "react";
import MainTitle from "../../components/CommonHome/MainTitle";
import ChooseBalance from './../../components/MyHome/ChooseBalance';
import BalanceSave from './../../components/MyHome/BalanceSave';

const AnswerBalance = () => {
  // const [who,setWho]=useState('');
  return (
    <div>
      <MainTitle />
      <ChooseBalance /><br />
      <>You can't change the answer.<br />Choose carefully!</>
      <br />
      <BalanceSave/>
    </div>
  );
};

export default AnswerBalance;