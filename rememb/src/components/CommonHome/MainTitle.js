import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Who = styled.div`
  margin-top: 12rem;
  font-size: 9rem;
  color: ${(props) => (props.textcolor ? props.textcolor : '#FE4179')};
  font-weight: 700;
  text-align: center;
`;
const Dday = styled.div`
  margin: 1rem 0 3rem;
  text-align: center;
  font-weight: 400;
  font-size: 6rem;
`;
const MainTitle = ({ id, token }) => {
  const [isdone,setIsdone]=useState(false);
  const navigate = useNavigate();
  const onClick = () => {
    if (token === ""||token==="no") {
      // 뭔가 안됨 .. others에서 클릭해도 myparty로 이동함 ^^
      navigate(`/others/${id}`, { state: { id: id } });
    } else {
      navigate(`/myParty/${id}`, { state: { token: token } });
    }
  };
  const getme=()=>{
    setName(id.username);
    var today=new Date();
    var bday=new Date(today.getFullYear(),parseInt(id.birth*1 / 100)-1,id.birth%100);
    var gap=bday.getTime()-today.getTime();
    var result=Math.ceil(gap/(1000*60*60*24));
    setDday(result);
    setTColor(id.text);
    setIsdone(true);
    // axios
    //   .get(`http://43.200.193.74:8000/partyroom/${id}/`)
    //   .then((response) => {
    //     console.log(response.data);
    //     setName(response.data.username);
    //     setTColor(response.data.text);
    //     if (response.data.left_birth === 0) {
    //       setDday('DAY');
    //     } else {
    //       setDday(response.data.left_birth);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  // const today=new Date();
  const [dday, setDday] = useState('');
  const [name, setName] = useState('');
  const [Tcolor, setTColor] = useState('#FE4179');

  useEffect(() => {
    getme();
  }, [id]);

  return (
    <>
    {isdone&&<>
      <Who textcolor={Tcolor} onClick={onClick}>
        {name}의 생일
      </Who>
      <Dday>D - {dday}</Dday>
    </>}
      
    </>
  );
};

export default MainTitle;
