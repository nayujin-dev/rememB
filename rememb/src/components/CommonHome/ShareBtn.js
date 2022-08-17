import React from "react";
import { Btn, BtnImg } from "./CircleBtn";

const ShareBtn=({id})=>{
    const onShareClick=(e)=>{
        e.preventDefault();
        // var url= window.location.href;
        var text=document.createElement('textarea');
        document.body.appendChild(text);
        text.value='http://rememb.site:3000/others/'+id;
        text.select();
        document.execCommand('copy');
        console.log(window.location.href);
        document.body.removeChild(text);
        window.alert('링크가 복사되었습니다.');
    }
    return (
        <Btn onClick={onShareClick}>
            <BtnImg alt='shareBtn' src='/img/share.png' />
        </Btn>
    );
}

export default ShareBtn;