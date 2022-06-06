import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>from sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
