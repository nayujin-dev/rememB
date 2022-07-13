import { Route, Routes } from "react-router-dom";
import Home from './pages/MyHome/MyHome';
import YourHome from './pages/YourHome';
import AnswerBalance from './pages/MyHome/AnswerBalance';
import SeeBalance from './pages/MyHome/SeeBalance';

function App() {
  return (
    <Routes>
      <Route path="/myParty" element={<Home />}></Route>
      <Route path="/myParty/ansBalance" element={<AnswerBalance />}></Route>
      <Route path="/myParty/seeBalance" element={<SeeBalance />}></Route>

      <Route path="/others" element={<YourHome />}></Route>
    </Routes>
  );
}

export default App;