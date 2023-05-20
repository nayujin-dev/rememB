import React, { useEffect, useState } from 'react';
import CommonNav from './CommonNav';
import MainTitle from './MainTitle';
import ShareBtn from './ShareBtn';
import { dbService } from '../../fbase';

const ShareLayout = (props) => {
  const [myData,setMydata]=useState();
  const [isSet,setIsSet]=useState(false);
  useEffect(()=>{
    dbService
    .doc('userobj/1')
    // .where("username", "==", props.id)
    .get()
    .then((doc) => {
      // querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setMydata(doc.data());
        setIsSet(true);
      // });
    });
  },[]);
  return (
    <>
    {isSet&&
    <>
    <CommonNav id={myData} token={props.token} />
      <MainTitle
        id={myData}
        textcolor={myData.text}
        token={props.token}
      />
      <ShareBtn id={1} />
      <main>{props.children}</main>
    </>
    }
      
    </>
  );
};

export default ShareLayout;
