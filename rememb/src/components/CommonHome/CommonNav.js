import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';

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
  font-size: 4rem;
  font-weight: 700;
  line-height: 29px;
  color: #ffad72;
`;
const NameText = styled.div`
  font-size: 4rem;
  font-weight: 700;
  line-height: 29px;
  color: #787878;
  margin: 0px 5px;
`;

const BirthText = styled.div`
  font-size: 4rem;
  font-weight: 700;
  line-height: 29px;
  color: #c38778;
  margin: 0px 5px;
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
  margin-top: 8px;
`;
const Div2 = styled.div`
  // 이름 생일 감싼 div
  justify-content: space-between;
  display: inline-flex;
  margin: auto;
`;

const Img = styled.img`
  width: 10rem;
  height: 16rem;
  margin-right: 20px;
`;

const Text = styled.div``;

const CommonNav = ({ id }) => {
  axios.get(
    `https://cors-anywhere.herokuapp.com/http://43.200.193.74:8000/partyroom/${id}/`,
  )
  .then((response) => {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
  return (
    <>
      {[false].map((expand) => (
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
                          <NameText>김멋사</NameText>
                          <BirthText>10/16</BirthText>
                        </Div2>
                      </Div1>
                    </Div0>
                  </Nav>
                </Offcanvas.Body>
                <Text href="#">제발돼주세요</Text>
                {/* </Nav> */}
                {/* </Offcanvas.Body> */}
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </>
      ))}
    </>
  );
};

export default CommonNav;
