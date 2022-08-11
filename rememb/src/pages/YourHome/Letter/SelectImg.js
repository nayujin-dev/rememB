import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Img from "../../../components/YourHome/Img";
import Layout from "../../../components/CommonHome/Layout";

const Box=styled.div`
  margin: 7rem 10rem;
  padding: 2rem;
  background-color: #FFEFF3;
  border-radius: 30px;
  height:50vh;
`;
const SelectImgContainer=styled.div`
  margin: 0.3vh 0.5vh;
  border-radius: 50px;
  background-color: white;
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  text-align:center;
`;
const EachTab=styled.button`
  display:inline-block;
  background-color: #FFEFF3;
  font-size: 4rem;
  font-weight: 500;
  padding: 0.5vh 3.5rem;
  margin: 2rem;
  border-radius:40px;
  border: none;
  vertical-align:middle;
  &:focus {
   background-color: #FFC1CC;
   outline: none;
  };
`;
const ImgContainer=styled.div`
  margin: 3vh 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 2vh;
  place-items: center;
  text-align:center;
`;
const Btn=styled.div`
  text-align: center;
  margin: auto;
  margin-top: 15rem;
  padding: 2rem 5rem;
  width: 25rem;
  font-size: 6rem;
  border-radius: 80px;
  background-color: #FFEFF3;
`;

const SelectImg = () => {
  const list=[0,1,2,3,4,5,6,7,8];
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
    console.log(e);
    e.preventDefault();
  }
  const onImgClick=(e)=>{
    mylist[e[1]]=!(mylist[e[1]]);
    setChlist(mylist);
    setSelectNum(e);
  }
  const onBtnClick=()=>{
    if (selectNum===''){
      alert('일러스트를 선택하세요')
    }
    else{
       navigate('/others/writeletter',{
        state:{whichimg:selectNum},
      });
    }
 
  };

    return (
      <Layout>
        <Box>
          <SelectImgContainer>
            <EachTab autoFocus onClick={()=>onTabClick(0)}>가구</EachTab>
            <EachTab onClick={()=>onTabClick(1)}>음식</EachTab>
            <EachTab onClick={()=>onTabClick(2)}>선물</EachTab>
            <EachTab onClick={()=>onTabClick(3)}>기타</EachTab>
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
        </Box>
        <Btn onClick={onBtnClick}>선택</Btn>
      </Layout>
    );
  };
  
  export default SelectImg;