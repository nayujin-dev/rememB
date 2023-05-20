import React from "react";
import { authService, dbService, firebaseInstance } from "../fbase";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const onSocialClick = async (event) => {
    /*const {
      target: { name },
    } = event;*/
    let provider;
    provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
    /*await dbService.collection("user").add(userObj);
     */
    navigate("/");
  };
  const Submit = () => {
    // Swal.fire({
    //   icon: "question",
    //   confirmButtonColor: "#1f54c0",
    //   text: "사파리, 크롬, 삼성인터넷 등 웹 브라우저로 실행하셨나요?",
    // }).then((result) => {
    //   if (result.isConfirmed) {
        onSocialClick();
    //   }
    // });
    // var result = window.confirm(
    //   "사파리, 크롬, 삼성인터넷 등 웹 브라우저로 실행하셨나요?"
    // );
    // if (result) {
    //   onSocialClick();
    // }
  };

  return (
    <div className="formbox" onClick={Submit}>
      <img width="80%" src="/img/loginGoogle.png" />
      <div className="formbox_logintext">
        <br />
        렛츠고
      </div>
    </div>
  );
};
export default Auth;
