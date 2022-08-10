import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style1.css';

const InitialSetting = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('');
  };
  return (
    <>
      <div class="setting-head">
        <img class="setting-head__logo" src="img/emoticons/logo/logo3.png" />
        <br />
        <span class="setting-head__text">
          가입이 완료되었어요!
          <br />
          기본 설정이 필요해요.
        </span>
      </div>
      <div class="setting-body">
        <span class="setting-body__text">
          이름
          <br />
        </span>
        <input class="setting-body__input" placeholder="김멋사"></input>
        <br />
        <span class="setting-body__text">
          생일
          <br />
        </span>
        <input class="setting-body__input" placeholder="10/16"></input>
        <br />
        <span class="setting-body__text text3">
          파티룸 배경 색상
          <br />
        </span>
        <div class="setting-body__circles">
          <div class="circle c1"></div>
          <div class="circle c2"></div>
          <div class="circle c3"></div>
          <div class="circle c4"></div>
          <div class="circle c5"></div>
          <div class="circle c6"></div>
          <div class="circle c7"></div>
          <div class="circle c8"></div>
        </div>
        <div class="setting-body__view">
          <span class="setting-body__viewtext">
            김멋사의 생일
            <br />
          </span>
          <div class="setting-body__viewbox"></div>
        </div>
      </div>
      <div class="setting-foot">
        <div class="setting-foot__btn" onClick={onClick}>
          <span class="setting-foot__text">설정</span>
        </div>
      </div>
    </>
  );
};

export default InitialSetting;
