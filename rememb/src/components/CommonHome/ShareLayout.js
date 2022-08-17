import React, { useEffect } from 'react';
import CommonNav from './CommonNav';
import MainTitle from './MainTitle';
import ShareBtn from './ShareBtn';

const ShareLayout = (props) => {

  return (
    <>
      <CommonNav id={props.id} />
      <MainTitle
        id={props.id}
        textcolor={props.textcolor}
      />
      <ShareBtn id={props.id} />
      <main>{props.children}</main>
    </>
  );
};

export default ShareLayout;
