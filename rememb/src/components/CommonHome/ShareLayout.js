import React, { useEffect } from 'react';
import CommonNav from './CommonNav';
import MainTitle from './MainTitle';
import ShareBtn from './ShareBtn';

const ShareLayout = (props) => {
  return (
    <>
      <CommonNav id={props.id} token={props.token} />
      <MainTitle
        id={props.id}
        textcolor={props.textcolor}
        token={props.token}
      />
      <ShareBtn id={props.id} />
      <main>{props.children}</main>
    </>
  );
};

export default ShareLayout;
