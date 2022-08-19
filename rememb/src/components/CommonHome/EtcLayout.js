import React, { useEffect, useState } from "react";
import CommonNav from "./CommonNav";
import styled from "styled-components";
import axios from "axios";
const Today=styled.div`
  margin-top: 12rem;
  font-size: 9rem;
  color:${props=>props.color?props.color:"#FE4179"};
  font-weight: 700;
  text-align: center;
`;
const Dday=styled.div`
  margin:1rem 0 3rem;
  text-align: center;
  font-weight:400;
  font-size: 6rem;
`;
const EtcLayout=(props)=>{
  const [tcolor,setTcolor]=useState("#FE4179");
  let today=new Date();
  const [name,setName]=useState('');
  useEffect(()=>{
    axios.get(
      `http://43.200.193.74:8000/partyroom/${props.id}/`,
      {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      setName(response.data.username);
      setTcolor(response.data.text);
    }).catch(function (error) {
      console.log(error);
    });
  },[]);
    return(
        <>
            <Today color={tcolor}>{today.toLocaleDateString()}</Today>
            <Dday id={props.id}>✨{name}의 생일✨</Dday>
            <CommonNav id={props.id} token={props.token}/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default EtcLayout;