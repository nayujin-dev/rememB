import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Modal from 'react-modal';
// import { ReactPortal } from "react";
const Img=styled.div`
    /* position: relative; */
    margin: auto;
    margin-bottom: 30px;
    display: flex;
    width: 150px;
    height: 150px;
    overflow: hidden;
    text-align: center;
    justify-content:center;
    background-color: #F6CDCD;
    border-radius: 50%;
`;

const PangBack=styled.div`
    padding: 30px 0;
    justify-content:center; 
    text-align: center;
    background-color: #D9D9D9;
`;
const Pang=({whichimg})=>{
    const location=useLocation();
    const navi=useNavigate();
    whichimg=location.state.img;
    useEffect(() => {
        setTimeout(()=>navi('/others'),2500);
      }, []);

    return(
        <>
            <PangBack>
                <Img><img alt="선택한 일러스트" style={{width:'80%',padding:'30px'}} src={whichimg} /> </Img>
                <div>
                    편지가 전송됐어요!<br/>
                    멋사님의 생일이 되면 멋사님께 공개될 예정이에요!
                </div>
            </PangBack>
            {/* <ReactPortal elementId="modal-root">
            <ModalOverlay visible={visible} /> 
            <ModalWrapper
                className={className}
                onClick={maskClosable ? onMaskClick : null}
                tabIndex="-1"
                visible={visible}
            >
                <ModalInner tabIndex="0" className="modal-inner">
                    <ModalInner2>
                        <ImgStyle>
                            <a href="https://www.pping.kr" rel="noopener noreferrer" target={'_blank'} cursor="pointer">
                                <img src={img} style={{ width: '100%', height: '100%' }} alt="" />
                            </a>
                        </ImgStyle>
                        {closable && (
                            <CloseStyle>
                                <Close className="modal-close" onClick={Dayclose}>
                                    오늘 하루 닫기
                                </Close>
                                <Close className="modal-close" onClick={close}>
                                    닫기
                                </Close>
                            </CloseStyle>
                        )}
                    </ModalInner2>
                </ModalInner>
            </ModalWrapper>
        </ReactPortal> */}
        </>
    );
}

export default Pang;