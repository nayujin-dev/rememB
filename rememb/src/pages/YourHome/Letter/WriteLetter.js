import React from "react";
import { useLocation } from "react-router-dom";


const WriteLetter = ({whatimg}) => {
    const location = useLocation();
    whatimg=location.state.whatimg;
  return (
    <div>
        <img style={{width:'5rem', height:'5rem'}} src={whatimg}/>
        <div>
            편지 하하
        </div>
    </div>
  );
};

export default WriteLetter;