import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainTitle from "../../../components/CommonHome/MainTitle";

const Letterback=styled.div`
  margin: auto;
  background-color: #D9D9D9;
  width: 90vw;
  /* min-height: min-content; */
  height:  50vh;
  padding: 10px;
`;
const LetterFrom=styled.div`
  position: absolute;
  top: 62%;
  right: 8%;
`;
const LetterInput=styled.div`
  border: none;
  height: 30vh;
  max-height: fit-content;
`;

const LetterTo=styled.div`
  font-size: large;
  font-weight: bold;
  margin: 13px 10px 10px;
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
    <div>
        <MainTitle/>
        <Letterback>
        <img style={{float:'left',width:'5rem', height:'5rem', margin:'0 10px 10px 0',padding:'10px',backgroundColor:'#F2F2F2'}} src={img}/>
            <LetterTo>To. 멋사</LetterTo>
            <LetterInput
              // dataPlaceholder="gggggggggggg"
              contentEditable='true'
              // onChange={onLetterChange}
              onInput={e=>setLetter(e.currentTarget.textContent)}
              // style={{content:'jddd'}}
              >
            </LetterInput>
            <LetterFrom>
              From <input onChange={onNameChange} required style={{border:'none',borderRadius:'10px',padding:'5px',margin:'0 0 0 10px',backgroundColor:'#F2F2F2'}}/>
            </LetterFrom>           
        </Letterback>
        <button 
          onClick={onBtnClick}
          style={{border:'none',margin:'auto',display:'block',marginTop:'10px'}}
          >SEND</button>
    </div>
  );
};

export default WriteLetter;