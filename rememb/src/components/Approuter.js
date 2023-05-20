// import React from "react";
// import { Route, Router, Routes } from "react-router-dom";
// import Tutorial from "../pages/Tutorial/Tutorial";
// import Setting from "../pages/Tutorial/Setting";
// import MyHome from "../pages/MyHome/MyHome";
// import AnswerBalance from "../pages/MyHome/AnswerBalance";
// import SeeBalance from "../pages/MyHome/SeeBalance";
// import LetterContent from "../pages/MyHome/LetterContent";
// import YourHome from "../pages/YourHome/YourHome";
// import SelectImg from "../pages/YourHome/Letter/SelectImg";
// import WriteLetter from "../pages/YourHome/Letter/WriteLetter";
// import Pang from "../pages/YourHome/Letter/Pang";
// import RollingPaper from "../pages/Etc/RollingPaper";
// import Sample from "../pages/Etc/Sample";
// import Intro from "../pages/Etc/Intro";
// import Auth from "./Auth";

// const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => { 
    
//     return (
//         <Router>
//             <Routes>

//             {isLoggedIn ? (
//                 <>
//                     {/* 튜토리얼 */}
//                     <Route exact path="/tutorial" element={<Tutorial />}/>
//                     {/* <Route exact path="/login" element={<Login />}/> */}
//                     <Route exact path="/setting" element={<Setting />}/>
//                     {/* 내 페이지 볼 때 */}
//                     <Route exact path="/myParty/:id" element={<MyHome />}/>
//                     <Route exact path="/myParty/ansBalance/:qid" element={<AnswerBalance />}/>
//                     <Route exact path="/myParty/seeBalance/:id" element={<SeeBalance />}/>
//                     <Route exact path="/lettercontent/:id/:letterid" element={<LetterContent />}/>
                    
//                     {/* 기타 페이지 (정보확인, 롤링페이퍼 등) */}
//                     <Route exact path="/etc/seeRP/:id" element={<RollingPaper />}/>
//                     <Route exact path="/etc/sample" element={<Sample />}/>
//                     {/* 초기 페이지 */}
//                     <Route exact path="/introduce" element={<Intro />}/>
//                 </>
//             ):(
//                 <>
//                     <Route exact path="/auth" element={<Auth />} />
//                     <Route exact path="/tutorial" element={<Tutorial />}/>
//                     <Route exact path="/myParty/seeBalance/:id" element={<SeeBalance />}/>

//                     {/* 남의 페이지 볼 때 */}
//                     <Route exact path="/others/:id" element={<YourHome />}/>`
//                     <Route exact path="/others/selectimg/:id" element={<SelectImg />}/>
//                     <Route exact path="/others/writeletter/:id" element={<WriteLetter />}/>
//                     <Route exact path="/others/sendletter" element={<Pang />}/>
//                 </>
//             )}
//             </Routes>
//         </Router>
//     );
// };
// export default AppRouter;
