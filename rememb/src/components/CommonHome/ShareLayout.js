import React, { useEffect } from 'react';
import CommonNav from './CommonNav';
import MainTitle from './MainTitle';
import ShareBtn from './ShareBtn';

const ShareLayout = (props) => {

  return (
    <>
      <CommonNav name={props.user} bday={props.bday} />
      <MainTitle
        name={props.user}
        bday={props.bday}
        textcolor={props.textcolor}
      />
      <ShareBtn />
      <main>{props.children}</main>
    </>
  );
};

export default ShareLayout;
