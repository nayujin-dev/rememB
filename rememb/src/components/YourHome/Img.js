import React, { useEffect } from "react";
import styled from "styled-components";
const EachImg=styled.img`
  width:5rem;
  height:5rem;
  border: ${props=> props.check&&'1px solid red'};

`;
const Img=({checked, key,whatTab,num})=>{
    const img='/img/emoticons/'+whatTab+'/'+num+'.png'
    return(
        <>
        <EachImg check={checked} src={img} alt='sampleimg'/>
        </>
    );
};
export default Img;