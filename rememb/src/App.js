import { Route, Routes } from "react-router-dom";
import Home from './pages/MyHome/MyHome';
import AnswerBalance from './pages/MyHome/AnswerBalance';
import SeeBalance from './pages/MyHome/SeeBalance';
import SelectImg from "./pages/YourHome/Letter/SelectImg";
import YourHome from "./pages/YourHome/YourHome";

function App() {
  return (
    <Routes>
      <Route path="/myParty" element={<Home />}></Route>
      <Route path="/myParty/ansBalance" element={<AnswerBalance />}></Route>
      <Route path="/myParty/seeBalance" element={<SeeBalance />}></Route>

      <Route path="/others" element={<YourHome />}></Route>
      <Route path="/others/selectimg" element={<SelectImg />}></Route>
    
    </Routes>

  );
}

export default App;