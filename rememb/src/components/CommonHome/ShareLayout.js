import React, { useEffect } from "react";
import CommonNav from "./CommonNav";
import MainTitle from "./MainTitle";
import ShareBtn from "./ShareBtn";

const ShareLayout=(props, {user, bday})=>{
    console.log(props.user);
    
    useEffect(() => {
        console.log(props.user);
        console.log(user);
        console.log(bday);
      }, [user, bday]);
    return(
        <>
            <CommonNav/>
            <MainTitle name={props.user} bday={bday}/>
            <ShareBtn/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default ShareLayout;