import { Outlet } from "react-router-dom";
import PartyRoom from "../components/CommonHome/PartyRoom";
import ToCeleb from "../components/YourHome/ToCeleb";
import WatchBalance from './../components/CommonHome/WatchBalance';

const Bottom = () => {
    return (
      <div>
        <PartyRoom />
        <ToCeleb />
        <br />
        <WatchBalance who={'멋사'}/>
      </div>
      
    );
  };
  
  export default Bottom;