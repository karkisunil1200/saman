import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> Hello Sign IN</h1>
      <button onClick={logGoogleUser}>Sign in to Google</button>
    </div>
  );
};

export default SignIn;
