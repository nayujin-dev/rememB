import React from "react";
import styled from "styled-components";
const EachImg=styled.img`
  width:9vh;
  height:9vh;
`;
const EachBack=styled.div`
  padding: 0.7vh;
  border-radius: 20px;
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