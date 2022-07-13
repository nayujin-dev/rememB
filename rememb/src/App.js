import { Route, Routes } from "react-router-dom";
import Home from './pages/MyHome';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/others" element={<YourHome />}></Route>
    </Routes>
  );
}

export default App;
