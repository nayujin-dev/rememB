import React from "react";
import CommonNav from "./CommonNav";

const EtcLayout=(props)=>{

    return(
        <>
            <CommonNav/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default EtcLayout;