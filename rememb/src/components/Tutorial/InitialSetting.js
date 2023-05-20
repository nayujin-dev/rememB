import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style1.css';
import styled from 'styled-components';
import axios from 'axios';
import { dbService } from '../../fbase';

const InitialSetting = ({ username, email, social }) => {
  const [color, setColor] = useState('#FFEFF3');
  const [textcolor, setTextcolor] = useState('#FE4179');
  const [servercolor, setServercolor] = useState('lp');
  const [serverTcolor, setServerTcolor] = useState('lp');
  const [text, setText] = useState('김멋사'); // 받아온 사용자 이름
  const onChange1 = (e) => {
    setText(e.target.value);
  };
  const [date, setDate] = useState(''); // 받아온 사용자 생일
  const onChange2 = (e) => {
    setDate(e.target.value.toString());
    console.log(typeof date);
  };
  const navigate = useNavigate();
  const setBtn = () => {
    if (date.length <= 3) {
      alert('숫자 네자리 형식으로 입력해주세요');
    } else {
      dbService
      .doc(`userobj/1`)
      .set({
        email: email,
        username: text,
        provider: social,
        birth: date,
        background: color,
        text: textcolor,
      });
      navigate(`/myParty/1`, {
        state: {
          id: 1,
          token: 'hi',
          // 전달한 페이지 변수: 현재 변수
        },
      });
      }
    //   axios
    //     .post(
    //       'http://43.200.193.74:8000/user/signin/',
    //       {
    //         email: email,
    //         username: text,
    //         provider: social,
    //         birth: date,
    //         background: servercolor,
    //         text: serverTcolor,
    //       },
    //       {
    //         withCredentials: false,
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       navigate(`/myParty/${res.data.results.id}`, {
    //         state: {
    //           id: res.data.results.id,
    //           token: res.data.results.accessToken,
    //           // 전달한 페이지 변수: 현재 변수
    //         },
    //       });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
  };
  useEffect(() => {
    setText(username);
  }, [username]);
  return (
    <>
      <div className="setting-head">
        <img
          className="setting-head__logo"
          src="/img/emoticons/logo/logo3.png"
          alt="logo"
        />
        <br />
        <span className="setting-head__text">
          가입이 완료되었어요!
          <br />
          기본 설정이 필요해요.
        </span>
      </div>
      <div className="setting-body">
        <span className="setting-body__text">
          이름
          <br />
        </span>
        <input
          required
          className="setting-body__input"
          placeholder={username}
          onChange={onChange1}
        ></input>
        <br />
        <span className="setting-body__text">
          생일
          {/* (00-00 형식) */}
          <br />
        </span>
        <input
          className="setting-body__input"
          placeholder="MMDD"
          required
          type="number"
          onChange={onChange2}
        ></input>
        <br />
        <span className="setting-body__text text3">
          파티룸 배경 색상
          <br />
        </span>

        <ButtonContainer>
          <PinkButton
            onClick={() => {
              setColor('#FFEFF3');
              setTextcolor('#FE4179');
              setServercolor('lp');
              setServerTcolor('lp');
            }}
          />
          <RedButton
            onClick={() => {
              setColor('#FFDDDD');
              setTextcolor('#FF6161');
              setServercolor('p');
              setServerTcolor('p');
            }}
          />
          <OrangeButton
            onClick={() => {
              setColor('#FFEED9');
              setTextcolor('#FE7B1D');
              setServercolor('or');
              setServerTcolor('or');
            }}
          />
          <YellowButton
            onClick={() => {
              setColor('#FFF8CC');
              setTextcolor('#6C6C6C');
              setServercolor('y');
              setServerTcolor('y');
            }}
          />
          <GreenButton
            onClick={() => {
              setColor('#DEF0EB');
              setTextcolor('#42B494');
              setServercolor('g');
              setServerTcolor('g');
            }}
          />
          <BlueButton
            onClick={() => {
              setColor('#D8EEFF');
              setTextcolor('#1786DB');
              setServercolor('lb');
              setServerTcolor('lb');
            }}
          />
          <DarkBlueButton
            onClick={() => {
              setColor('#E2E8FF');
              setTextcolor('#3753C0');
              setServercolor('b');
              setServerTcolor('b');
            }}
          />
          <PurpleButton
            onClick={() => {
              setColor('#EDE9FF');
              setTextcolor('#7341C3');
              setServercolor('pu');
              setServerTcolor('pu');
            }}
          />
        </ButtonContainer>

        <div className="setting-body__view">
          <TextPallete textcolor={textcolor}>{text}의 생일</TextPallete>
          <Pallete color={color} />
        </div>
      </div>
      <div className="setting-foot">
        <div className="setting-foot__btn" onClick={setBtn}>
          <span className="setting-foot__text">설정</span>
        </div>
      </div>
    </>
  );
};

const ButtonContainer = styled.div`
  display: grid;
  padding: 3rem 25rem 5rem 25rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 4rem;
  row-gap: 4rem;
`;

const Button = styled.button`
  width: 10rem;
  height: 10rem;
  border-radius: 30px;
  border: 1.5px solid #787878;
  &.active {
    border-width: 3px;
  }
`;

const PinkButton = styled(Button)`
  background-color: #ffeff3;
`;

const RedButton = styled(Button)`
  background-color: #ffdddd;
`;

const OrangeButton = styled(Button)`
  background: #ffeed9;
`;

const YellowButton = styled(Button)`
  background: #fff8cc;
`;

const GreenButton = styled(Button)`
  background: #def0eb;
`;

const BlueButton = styled(Button)`
  background: #d8eeff;
`;

const DarkBlueButton = styled(Button)`
  background: #e2e8ff;
`;

const PurpleButton = styled(Button)`
  background: #ede9ff;
`;

const Pallete = styled.div`
  width: 200px;
  height: 90px;
  border-radius: 70px;
  margin-top: 3rem;
  margin-right: auto;
  margin-bottom: 10rem;
  margin-left: auto;
  background: ${(props) => props.color};
`;

const TextPallete = styled.div`
  margin-top: 3rem;
  font-size: 3.7rem;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.textcolor};
`;

export default InitialSetting;
