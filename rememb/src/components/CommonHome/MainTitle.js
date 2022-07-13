import React, { useState } from "react";

const MainTitle = () => {
    const [name,setName]=useState("멋사");
    const [bday,setBday]=useState(3);

  return (
    <div>
      <h1>{name}의 생일!</h1>
      <h3>D - {bday}</h3>
    </div>
  );
};

export default MainTitle;