import React from 'react';
import PartyRoom from '../../components/CommonHome/PartyRoom';
import ToBalance from '../../components/MyHome/ToBalance';
import WatchBalance from '../../components/CommonHome/WatchBalance';
import ShareLayout from '../../components/CommonHome/ShareLayout';
import { useLocation } from 'react-router-dom';

const MyHome = ({ accessT }) => {
  const location=useLocation();
  const username=location.state.name;
  const birth=location.state.birth;
  return (
    <ShareLayout user={username} bday={birth}>
      <PartyRoom user={username} bday={birth}/>
      <ToBalance />
      {/*생일 당일이 되면, ToBalancce대신 롤링페이퍼 보기 버튼으로*/}
      <WatchBalance who={username} token={accessT} />
    </ShareLayout>
  );
};

export default MyHome;
