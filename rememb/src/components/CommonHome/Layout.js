import React from "react";
import CommonNav from "./CommonNav";
import MainTitle from "./MainTitle";

const Layout=(props)=>{

    return(
        <>
            <CommonNav/>
            <MainTitle/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;