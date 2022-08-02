import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Img=styled.div`
    /* position: relative; */
    margin: auto;
    margin-bottom: 30px;
    display: flex;
    width: 150px;
    height: 150px;
    overflow: hidden;
    text-align: center;
    justify-content:center;
    background-color: #F6CDCD;
    border-radius: 50%;
`;

const PangBack=styled.div`
    padding: 30px 0;
    justify-content:center; 
    text-align: center;
    background-color: #D9D9D9;
`;
const Pang=({whichimg})=>{
    const location=useLocation();
    whichimg=location.state.img;

    return(
        <>
            <PangBack>
                <Img><img style={{width:'80%',padding:'30px'}} src={whichimg} /> </Img>
                <div>
                    편지가 전송됐어요!<br/>
                    멋사님의 생일이 되면 멋사님께 공개될 예정이에요!
                </div>
            </PangBack>
        </>
    );
}

export default Pang;