import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PlzBtn = styled.img`
  width: 5rem;
  height: 5rem;
  background-color: white;
  position: absolute;
  right: 10rem;
  top: 15rem;
  z-index: 100;
  pointer-events: none;
  /* padding-top: 15rem;
  padding-right: 5rem; */
`;
const TitleText = styled.div`
  font-size: 5rem;
  font-weight: 700;
  line-height: 29px;
  color: #ffad72;
`;
const NameText = styled.div`
  font-size: 5rem;
  font-weight: 700;
  line-height: 29px;
  color: #787878;
  margin: 3px 10px;
`;
const BirthText = styled.div`
  font-size: 5rem;
  font-weight: 700;
  line-height: 29px;
  color: #c38778;
  margin: 3px 10px;
`;

const Div0 = styled.div`
  // 전체를 감싼 가장 큰 div
  justify-content: space-between;
  display: inline-flex;
  margin: auto;
  margin-top: 30px;
`;
const Div1 = styled.div`
  // 텍스트 전체 감싼 div
  margin-top: 3px;
`;
const Div2 = styled.div`
  // 이름 생일 감싼 div
  justify-content: space-between;
  display: inline-flex;
  margin: 1px 2px;
`;

const Img = styled.img`
  width: 12rem;
  height: 18rem;
  margin-right: 20px;
`;

const LinkDiv = styled.div`
  margin-top: 15rem;
`;
const LinkText = styled.div`
  font-size: 4.5rem;
  font-weight: 500;
  line-height: 29px;
  color: #6c6c6c;
  margin-bottom: 2rem;
`;

const FootText = styled.div`
  font-size: 3rem;
  margin-bottom: 30rem;
  color: #6c6c6c;
`;

const LogoImg = styled.img`
  width: 12rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
`;

const CommonNav = ({ id, token }) => {
  const [dday, setDday] = useState('');
  const [month, setMonth] = useState('');
  const [name, setName] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();
  const isLogin = () => {
    if (token === '') {
      setIsLoggedin(false);
    } else {
      getUser();
      setIsLoggedin(true);
    }
  };
  const getUser = () => {
    axios
      .get(`http://43.200.193.74:8000/user/mypage/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setName(response.data.username);
        setMonth(response.data.month);
        setDday(response.data.day);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onClick1 = () => {
    navigate(`/myParty/seeBalance/${id}`, {
      state: { id: id, token: token },
    });
  };
  const onClick2 = () => {
    navigate(`/myParty/${id}`, { state: { token: token } });
    console.log(id);
  };
  useEffect(() => {
    isLogin();
  }, []);
  return (
    <>
      {isLoggedin &&
        [false].map((expand) => (
          <>
            <PlzBtn src="/img/navbutton.png" />
            <Navbar
              key={expand}
              expand={expand}
              className="mb-3"
              style={{
                position: 'absolute',
                top: '15rem',
                right: '12rem',
                width: '3rem',
                height: '3rem',
                backgroundColor: '#FFC1CC',
              }}
            >
              <Container fluid style={{ color: '#black' }}>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  // 글자
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    ></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Div0>
                        <Img src="/img/Blion.png" />
                        <Div1>
                          <TitleText>나의 정보</TitleText>
                          <Div2>
                            {/* 일단 대충 해놨습니다 */}
                            <NameText>{name}</NameText>
                            <BirthText>{month}/{dday}</BirthText>
                          </Div2>
                        </Div1>
                      </Div0>
                      <LinkDiv>
                        <LinkText onClick={onClick1}>
                          내 밸런스게임 보기
                        </LinkText>
                        <LinkText onClick={onClick2}>내 파티룸 가기</LinkText>
                      </LinkDiv>
                    </Nav>
                  </Offcanvas.Body>
                  <LogoImg src="/img/emoticons/logo/logo1.png" />
                  <FootText>
                    Copyright ©rememB. <br />
                    All Rights Reserved.
                  </FootText>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </>
        ))}
    </>
  );
};
export default CommonNav;
