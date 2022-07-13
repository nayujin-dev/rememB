import { Route, Routes } from "react-router-dom";
import Home from './pages/MyHome';
import YourHome from './pages/YourHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/others" element={<YourHome />}></Route>
    </Routes>
  );
}

export default App;