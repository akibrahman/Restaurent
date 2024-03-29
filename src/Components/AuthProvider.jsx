import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const axiosInstancePublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //! On Auth State Change
  useEffect(() => {
    const un = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        axiosInstancePublic
          .post("/create-jwt", { email: currentUser.email })
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem("token", res.data.token);
              setUser(currentUser);
            }
          });
      } else {
        setUser(null);
        localStorage.removeItem("token");
        // alert("Boom");
      }
      setLoading(false);
    });
    return () => un();
  }, [auth, axiosInstancePublic]);
  //! Registration
  const registration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //! Log In
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //! Google LogIn
  const googleLogin = async () => {
    setLoading(true);
    await signInWithRedirect(auth, googleProvider);
  };
  //! Log Out
  const logOut = () => {
    setUser(null);
    setLoading(true);
    return signOut(auth);
  };
  const AuthInfo = {
    auth,
    logIn,
    googleLogin,
    registration,
    logOut,
    user,
    loading,
    setUser,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
