import { createContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [captchaMached, setCaptchaMached] = useState(false);
  const [captchaAlert, setCaptchaAlert] = useState(false);
  const [captchaEngineStarter, setCaptchaEngineStarter] = useState(false);
  //! Captcha RealTime Checker
  const captchaChecker = (captcha) => {
    if (captcha.length >= 7) {
      if (validateCaptcha(captcha) == true) {
        setCaptchaMached(true);
      } else {
        setCaptchaMached(false);
        setCaptchaAlert(true);
        setTimeout(() => {
          setCaptchaAlert(false);
        }, 2000);
      }
    } else {
      setCaptchaMached(false);
    }
  };
  //! Generate Captcha
  useEffect(() => {
    loadCaptchaEnginge(7);
  }, [captchaEngineStarter]);
  //! Log In
  const logIn = () => {
    alert("Logged In");
  };
  const AuthInfo = {
    logIn,
    captchaMached,
    captchaChecker,
    captchaAlert,
    captchaEngineStarter,
    setCaptchaEngineStarter,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
