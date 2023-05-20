import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
// import Slider from 'react-slick';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { dbService } from '../../fbase';
const BackImg = styled.div`
  margin: 7rem 10rem;
  padding: 4rem;
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : '#FFEFF3'};
  border-radius: 30px;
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(4,1fr);
  grid-gap: 2vh 1rem; 

  align-items: center; //수직 가운데 정렬
  justify-content: space-between; /* 수평 가운데 정렬 */
`;
const Each = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 3.5rem;
`;
const Img = styled.img`
  width: 15rem;
  height: 15rem;
`;
const DivPre = styled.div`
  position: absolute;
  left: 0rem;
  top: 45%;
  z-index: 99;
`;
const Div = styled.div`
  position: absolute;
  right: 10rem;
  top: 45%;
  z-index: 99;
`;
const PartyRoom = ({ id, token }) => {
  const [isDday, setIsDday] = useState(false);
  const [letterId, setLetterId] = useState([]);
  const [color, setColor] = useState('#FFEFF3');
  const [showlist, setShowlist] = useState(false);
  useEffect(() => {
    getParty();
  }, []);
  const getParty = () => {
    dbService
    .collection(`letter`)
    .where("who", "==", 1)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var thisletter={
          id:doc.id,
          ...doc.data(),
        }
        setLetterId((d)=>[...d,thisletter]);
        // setIsSet(true);
      });
    });
    setShowlist(true);
    var today=new Date();
    var bday=new Date(today.getFullYear(),parseInt(id.birth*1 / 100)-1,id.birth%100);
    var gap=bday.getTime()-today.getTime();
    var result=Math.ceil(gap/(1000*60*60*24));
    // setDday(result);
    if (result <= 0) {
      setIsDday(true);
    }
    // axios
    //   .get(`http://43.200.193.74:8000/partyroom/${id}/`)
    //   .then((response) => {
    //     console.log(response.data.letters);
    //     // console.log(response.data);
    //     setColor(response.data.background);
    //     setLetterId(response.data.letters);
    //     setShowlist(true);
    //     if (response.data.left_birth <= 0) {
    //       setIsDday(true);
    //     }
        
    //   }).catch(function (error) {
    //     console.log(error);
    //   });
  };

  const navi = useNavigate();
  // const [img,setImg]=useState();
  const onImgClick = (e) => {
    if (token!=true) {
      alert('당사자만 확인할 수 있습니다. 로그인 후 이용해주세요.');
    } else if (isDday){
      navi(`/lettercontent/1/${e}`, { state: { token: token, letterpk:e,id:id } });
    }else{
      console.log(e)
      alert('아직 생일이 되지 않았어요! 생일 당일부터 공개됩니다.');
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true, 
    speed: 500,
    slidesPerRow: 3, 
    rows: 2,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <Div>
        <BiChevronRight
          style={{
            color: 'pink',
            position: 'absolute',
            width: '10rem',
            height: '10rem',
          }}
        />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <BiChevronLeft
          style={{
            color: 'pink',
            position: 'absolute',
            width: '10rem',
            height: '10rem',
          }}
        />
      </DivPre>
    ),
  };
  return (
    <BackImg backgroundcolor={color}>
    {showlist &&
    // <Slider style={{ position: 'relative' }} {...settings}>
        <>
          {letterId.map((letter) => (
          <Each onClick={() => onImgClick(letter.id)}>
            <Img
              src={
                '/img/emoticons/' +
                letter.imgfolder_no +
                '/' +
                letter.img_no +
                '.png'
              }
              alt="letterId"
            />
            <span style={{fontSize:'4rem'}}>{letter.letter_from}</span>
          </Each>
        ))}
    </>
    // </Slider>
    }
    </BackImg>
  );
};

export default PartyRoom;
