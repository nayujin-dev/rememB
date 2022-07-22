import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const Button = () => {
  let [modal, setModal] = useState(false);
  return (
    <div>
      <button onClick={()=>{setModal(!modal)}}>모달창 열기</button>
      {modal === true ? <Modal /> : null}
    </div>
  );
};

export default Button;