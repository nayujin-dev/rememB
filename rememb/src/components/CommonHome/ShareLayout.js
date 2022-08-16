import React from "react";
import CommonNav from "./CommonNav";
import MainTitle from "./MainTitle";
import ShareBtn from "./ShareBtn";

const ShareLayout=(props)=>{
    console.log(props.user);
    
    return(
        <>
            <CommonNav name={props.user} bday={props.bday}/>
            <MainTitle name={props.user} bday={props.bday}/>
            <ShareBtn/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default ShareLayout;