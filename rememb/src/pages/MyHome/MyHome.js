import React from 'react';
import PartyRoom from '../../components/CommonHome/PartyRoom';
import ToBalance from '../../components/MyHome/ToBalance';
import WatchBalance from '../../components/CommonHome/WatchBalance';
import ShareLayout from '../../components/CommonHome/ShareLayout';
import { useLocation, useParams } from 'react-router-dom';

const MyHome = ({ accessT }) => {
  const location = useLocation();
  const username = location.state.name;
  const birth = location.state.birth;
  const textcolor = location.state.textcolor;
  const backgroundcolor = location.state.backgroundcolor;
  const token=location.state.token;
  const { id } = useParams();
  return (
    <ShareLayout user={username} bday={birth} textcolor={textcolor}>
      <PartyRoom
        user={username}
        id={id}
        bday={birth}
        textcolor={textcolor}
        backgroundcolor={backgroundcolor}
        token={token}
      />
      <ToBalance />
      {/*생일 당일이 되면, ToBalancce대신 롤링페이퍼 보기 버튼으로*/}
      <WatchBalance token={accessT} />
    </ShareLayout>
  );
};

export default MyHome;
