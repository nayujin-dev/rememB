import { Route, Routes } from "react-router-dom";
import Home from './pages/MyHome';
import SelectImg from "./pages/YourHome/Letter/SelectImg";
import YourHome from './pages/YourHome/YourHome';

function App() {
  return (
    <Routes>
      <Route path="/myParty" element={<Home />}></Route>
      <Route path="/others" element={<YourHome />}></Route>
      <Route path="/others/selectimg" element={<SelectImg />}></Route>
    
    </Routes>

  );
}

export default App;