import React from "react";
import CommonNav from "./CommonNav";
import MainTitle from "./MainTitle";

const Layout=(props)=>{
    
    return(
        <>
            <CommonNav id={props.id} token={props.token}/>
            <MainTitle id={props.id}/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;