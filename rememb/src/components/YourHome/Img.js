import React from "react";
import styled from "styled-components";
const EachImg=styled.img`
  width:5rem;
  height:5rem;
`;
const EachBack=styled.div`
  padding: 5px;
  border-radius: 10px;
  background-color:${props=> props.check?'#FFC1CC':'white'};
`;

const Img=({checked, key,whatTab,num})=>{
    const img='/img/emoticons/'+whatTab+'/'+num+'.png'
    return(
      <EachBack check={checked}>
        <EachImg src={img} alt='sampleimg'/>
      </EachBack>
    );
};
export default Img;