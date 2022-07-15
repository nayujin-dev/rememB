import { useEffect, useState } from "react";
import MainTitle from "../../../components/CommonHome/MainTitle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SelectImgContainer=styled.div`
  background-color: pink;
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  text-align:center;
`;
const EachImg=styled.img`
  width:5rem;
  height:5rem;
`;
const EachTab=styled.div`
  display:inline-block;
  vertical-align:middle;
`;
const ImgContainer=styled.div`
  margin: 1rem 0;
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  text-align:center;
`;

const SelectImg = () => {
  const navigate=useNavigate();
  const onTabClick=(e)=>{
    setWhatTab(e);
  }
  const onImgClick=(e)=>{
    navigate('/others/writeletter',{
      state:{whatimg:e},
    });
    // navigate(`/selling/detail/${listObj.id}`, {
    //   replace: false,
    //   state: { detailObj: listObj },
    // });

  }
 
  // const [imglists, setimgLists] = useState([]);
  // setimgLists((prev)=>[])
  // const [img,setImg]=useState([]);
  
  const [whatTab,setWhatTab]=useState(1);
  const img1='/img/emoticons/'+whatTab+'/1.png'
  const img2='/img/emoticons/'+whatTab+'/2.png'
  const img3='/img/emoticons/'+whatTab+'/3.png'

    return (
      <div>
        <MainTitle/>
        <div style={{width:'100%'}}>
          <SelectImgContainer>
            <EachTab onClick={()=>onTabClick(0)}>전체</EachTab>
            <EachTab onClick={()=>onTabClick(1)}>가구</EachTab>
            <EachTab onClick={()=>onTabClick(2)}>파티용품</EachTab>
            <EachTab onClick={()=>onTabClick(3)}>선물</EachTab>
            <EachTab onClick={()=>onTabClick(4)}>음식</EachTab>
          </SelectImgContainer>
          <ImgContainer>
          {}
            <EachImg onClick={()=>onImgClick(img1)} alt='sampleimg' src={img1}/>
            <EachImg onClick={()=>onImgClick(img2)} alt='sampleimg' src={img2}/>
            <EachImg onClick={()=>onImgClick(img3)} alt='sampleimg' src={img3}/>
          </ImgContainer>
        </div>
      </div>
    );
  };
  
  export default SelectImg;