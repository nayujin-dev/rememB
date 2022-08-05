import React from 'react';
import styled from 'styled-components';
// import InitialSetting from '../../components/Tutorial/InitialSetting';

const logo = '/img/emoticons/logo/logo3.png';

const Setting = () => {
  // const [who,setWho]=useState('');
  return (
    <div>
      <img
        alt="a"
        style={{
          flex: 1,
          width: '9.5rem',
          height: '9.5rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        src={logo}
      />
      <logo1 />
      {/* <h2>세팅페이지.</h2>
      <InitialSetting /> */}
    </div>
  );
};

export default Setting;
