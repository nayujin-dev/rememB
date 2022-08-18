import React from 'react';
import PartyRoom from '../../components/CommonHome/PartyRoom';
import ToRolling from '../../components/MyHome/ToRolling';
import WatchBalance from '../../components/CommonHome/WatchBalance';
import ShareLayout from '../../components/CommonHome/ShareLayout';
import { useLocation, useParams } from 'react-router-dom';

const MyHome = () => {
  const location = useLocation();
  const token=location.state.token;
  const { id } = useParams();
  console.log(id);
  return (
    <ShareLayout id={id} token={token}>
      <PartyRoom
        id={id}
        token={token}
      />
      <ToRolling id={id} token={token}/>
      {/*생일 당일이 되면, ToBalancce대신 롤링페이퍼 보기 버튼으로*/}
      <WatchBalance id={id} token={token} />
    </ShareLayout>
  );
};

export default MyHome;
