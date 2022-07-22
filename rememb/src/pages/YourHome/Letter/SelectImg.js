import { useEffect, useRef, useState } from "react";
import MainTitle from "../../../components/CommonHome/MainTitle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Img from "../../../components/YourHome/Img";

const SelectImgContainer=styled.div`
  background-color: pink;
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  text-align:center;
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
  const list=[0,1,2];
  const [whatTab,setWhatTab]=useState(0);
  
/*  //이미지 파일 세팅
    //return 문에서 map쓸때 key값을 유니크하게 주고싶었는데..
    아래 코드 이용하면 뭔가 될거같아서 일단 주석처리해놈 ㅎㅎ
    var imgobj;
    const [lists,setLists]=useState([]);
    useEffect(()=>{
    for (var i=1;i<5;i++){
      imgobj={
        id: i,
        list,
        checked:false
      }
      setLists(imgobj);
  } 
  },[])
  console.log(lists) */

  //카테고리 탭 바뀔때마다 선택된 일러스트 리셋
  useEffect(()=>{
    setWhatTab(whatTab);
    setChlist(mylist);
    setSelectNum([]);
  },[whatTab])

  //일러스트 클릭시 true로
  const mylist=[false,false,false];
  const [chlist,setChlist]=useState(mylist);

  const navigate=useNavigate();

  //최종 선택된 일러스트의 [카테고리 인덱스, 세부순서 인덱스]
  const [selectNum,setSelectNum]=useState([]);

  const onTabClick=(e)=>{
    setWhatTab(e);
  }
  const onImgClick=(e)=>{
    mylist[e[1]]=!(mylist[e[1]]);
    setChlist(mylist);
    setSelectNum(e);
  }
  const onBtnClick=()=>{
    if (selectNum==''){
      alert('일러스트를 선택하세요')
    }
    else{
       navigate('/others/writeletter',{
        state:{whichimg:selectNum},
      });
    }
 
  };

    return (
      <>
        <MainTitle/>
        <div style={{width:'100%'}}>
          <SelectImgContainer>
            <EachTab onClick={()=>onTabClick(0)}>가구</EachTab>
            <EachTab onClick={()=>onTabClick(1)}>파티용품</EachTab>
            <EachTab onClick={()=>onTabClick(2)}>선물</EachTab>
            <EachTab onClick={()=>onTabClick(3)}>음식</EachTab>
          </SelectImgContainer>
          <ImgContainer>
          {list.map((index)=>(
            <div
              onClick={()=>{
                onImgClick([whatTab,index])

              }}>
              <Img
                key={index}
                checked={chlist[index]}
                whatTab={whatTab}
                num={index}
              />
            </div>
            
          ))}
          </ImgContainer>
          <button onClick={onBtnClick}>NEXT</button>
        </div>
      </>
    );
  };
  
  export default SelectImg;