import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { app } from "./firebase.js";

const Signup = () => {
  const auth = getAuth(app);
  // const user = auth.currentUser;
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  // const openPopup = () => {
  //   const popup = window.open("https://example.com", "_blank", "noopener");
  // };
  // if (user) {
  //   console.log("UID", user.uid);
  // }
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  );
};

export default Signup;
