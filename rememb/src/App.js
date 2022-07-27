import { Route, Routes } from 'react-router-dom';
import Home from './pages/MyHome/MyHome';
import AnswerBalance from './pages/MyHome/AnswerBalance';
import SeeBalance from './pages/MyHome/SeeBalance';
import SelectImg from './pages/YourHome/Letter/SelectImg';
import YourHome from './pages/YourHome/YourHome';
import WriteLetter from './pages/YourHome/Letter/WriteLetter';
import SetInfo from './pages/Etc/SetInfo';
import RollingPaper from './pages/Etc/RollingPaper';
import Tutorial from './pages/Tutorial/Tutorial';
import Login from './pages/Tutorial/Login';

function App() {
  return (
    <Routes>
      {/* 튜토리얼 */}
      <Route path="/tutorial" element={<Tutorial />}></Route>
      <Route path="/login" element={<Login />}></Route>

      {/* 내 페이지 볼 때 */}
      <Route path="/myParty" element={<Home />}></Route>
      <Route path="/myParty/ansBalance" element={<AnswerBalance />}></Route>
      <Route path="/myParty/seeBalance" element={<SeeBalance />}></Route>

      {/* 남의 페이지 볼 때 */}
      <Route path="/others" element={<YourHome />}></Route>
      <Route path="/others/selectimg" element={<SelectImg />}></Route>
      <Route path="/others/writeletter" element={<WriteLetter />}></Route>

      {/* 기타 페이지 (정보확인, 롤링페이퍼 등) */}
      <Route path="/etc/setinfo" element={<SetInfo />}></Route>
      <Route path="/etc/seeRP" element={<RollingPaper />}></Route>
    </Routes>
  );
}

export default App;
