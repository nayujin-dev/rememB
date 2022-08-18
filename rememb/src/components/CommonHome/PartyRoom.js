import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const BackImg = styled.div`
  margin: 7rem 10rem;
  padding: 7rem;
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : '#FFEFF3'};
  border-radius: 30px;
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  /* grid-template: repeat(4) / repeat(4);
  grid-auto-flow: column;
  grid-template-rows: 4;
  grid-template-columns: 4;
  grid-row-start: 1;
  grid-column-start: 1; */
  /* grid-template-columns: repeat(auto-fill, 15rem); */
  grid-gap: 5vh 1rem;

  align-items: center; /* 수직 가운데 정렬 */
  justify-content: space-between; /* 수평 가운데 정렬 */
`;
const Each = styled.div`
  width: 15rem;
  height: 15rem;
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
    axios
      .get(`http://43.200.193.74:8000/partyroom/${id}/`)
      .then((response) => {
        console.log(response.data.letters);
        // console.log(response.data);
        setColor(response.data.background);
        setLetterId(response.data.letters);

        setShowlist(true);
        console.log(letterId);
        console.log(letterId[0]);
        // response.data.letters.map((letter) => (
        // for (var i=0; i<letterId.length; i++){

        // }
        // ))
        if (response.data.left_birth <= 0) {
          setIsDday(true);
        }
        // setInfo(response.data.response);
        // setUsername(info.name);
        // setBirth(info.birthyear+'-'+info.birthday);
        // setEmail(info.email);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const navi = useNavigate();
  // const [img,setImg]=useState();
  const onImgClick = (e) => {
    if (isDday) {
      navi(`/lettercontent/${id}/${e.target.value}`, {
        state: { token: token, letterpk: e.target.value, id: id },
      });
    } else {
      alert('아직 생일이 되지 않았어요! 생일 당일부터 공개됩니다.');
    }
  };
  // const letterId = [
  //   '/img/emoticons/1/1.png',
  //   '/img/emoticons/1/2.png',
  //   '/img/emoticons/1/3.png',
  //   '/img/emoticons/2/1.png',
  //   '/img/emoticons/2/2.png',
  //   '/img/emoticons/2/3.png',
  //   '/img/emoticons/3/1.png',
  //   '/img/emoticons/3/2.png',
  //   '/img/emoticons/3/3.png',
  //   '/img/emoticons/0/0.png',
  //   '/img/emoticons/0/1.png',
  //   '/img/emoticons/0/2.png',
  //   '/img/emoticons/3/1.png',
  //   '/img/emoticons/3/2.png',
  //   '/img/emoticons/3/3.png',
  //   '/img/emoticons/3/1.png',
  //   '/img/emoticons/3/2.png',
  //   '/img/emoticons/3/3.png',
  // ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <Slider style={{ position: 'relative' }} {...settings}>
      <>
        <BackImg backgroundcolor={color}>
          {showlist &&
            letterId.map((letter) => (
              <>
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
                  <span>{letter.letter_from}</span>
                </Each>
              </>
            ))}
        </BackImg>
      </>
      <>
        <BackImg backgroundcolor={color}>
          {showlist &&
            letterId.map((letter) => (
              <>
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
                  <span>{letter.letter_from}</span>
                </Each>
              </>
            ))}
        </BackImg>
      </>
      <>
        <BackImg backgroundcolor={color}>
          {showlist &&
            letterId.map((letter) => (
              <>
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
                  <span>{letter.letter_from}</span>
                </Each>
              </>
            ))}
        </BackImg>
      </>
      <>
        <BackImg backgroundcolor={color}>
          {showlist &&
            letterId.map((letter) => (
              <>
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
                  <span>{letter.letter_from}</span>
                </Each>
              </>
            ))}
        </BackImg>
      </>
    </Slider>
  );
};

export default PartyRoom;
