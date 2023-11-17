import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  //! On Auth State Change
  useEffect(() => {
    const un = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => un();
  }, []);
  //! Registration
  const registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //! Log In
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //! Log Out
  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };
  const AuthInfo = {
    auth,
    logIn,
    registration,
    logOut,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
