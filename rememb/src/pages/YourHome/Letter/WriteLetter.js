import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../../components/CommonHome/Layout";

const Letterback=styled.div`
  margin: 7rem 10rem;
  padding: 5rem;
  background-color: #FFEFF3;
  border-radius: 30px;
  height:50vh;
  background-color: #FFEFF3;
`;
const LetterFrom=styled.input`
  font-size: 4.5rem;
  position: absolute;
  top: 62vh;
  right: 55rem;
  background-color:#FFC1CC;
  width: 30rem;
  padding:1rem 3rem;
  border:none;
  outline: none;
  border-radius:20px;
`;
const LetterInput=styled.div`
  border: none;
  text-align: left;
  outline: none;
  height: 30vh;
  font-size: 4rem;
  max-height: fit-content;
`;

const LetterTo=styled.div`
  font-size: 4.5rem;
  font-weight: 500;
`;
const Btn=styled.button`
  position: absolute;
  top: 62vh;
  right: 15rem;
  width: 17rem;
  padding:1rem 3rem;
  border:none;
  outline: none;
  text-align: center;
  font-size: 4.5rem;
  border-radius: 80px;
  background-color:#FFC1CC;
`;


const WriteLetter = ({whichimg}) => {
  const navigate=useNavigate();
  const [letter,setLetter]=useState('');
  const [from,setFrom]=useState('');
  const onNameChange=(event)=>{
    setFrom(event.target.value);
  }
  const onBtnClick=()=>{
    // console.log(letter);
    // console.log(from);

    navigate('/others/sendletter',{
      // state:{from:from, content:letter},
      state:{img:img},
    });
  };
 
    const location = useLocation();
    whichimg=location.state.whichimg;
    const img='/img/emoticons/'+whichimg[0]+'/'+whichimg[1]+'.png'
  return (
    <Layout>
        <Letterback>
        <img alt="선택한 일러스트" style={{float:'left',width:'20rem', height:'20rem', margin:'0 3rem 0 0',padding:'10px',borderRadius:'20px',backgroundColor:'white'}} src={img}/>
            <LetterTo>To. 멋사</LetterTo>
            <LetterInput
              // dataPlaceholder="gggggggggggg"
              contentEditable='true'
              onInput={e=>setLetter(e.currentTarget.textContent)}
              // style={{content:'jddd'}}
              >
            </LetterInput>
            <LetterFrom type='text' value='From. ' onChange={onNameChange} />           
        </Letterback>
        <Btn onClick={onBtnClick}>전송</Btn>
    </Layout>
  );
};

export default WriteLetter;