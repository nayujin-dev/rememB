import React from "react";
import CommonNav from "./CommonNav";
import MainTitle from "./MainTitle";

const Layout=(props)=>{

    return(
        <div>
            <CommonNav/>
            <MainTitle/>
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;