import { createContext, useState, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase/config";

export const LoginContext = createContext();

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: null,
    logged: false,
    mensaje: null,
  });

  const login = (values) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        setUser({
          email: userCredential.user.email,
          logged: true,
          mensaje: null,
        });
      })
      .catch((error) => {
        console.log(error);
        setUser({
          email: null,
          logged: false,
          mensaje: error.message,
        });
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const googleLogin = () => {
    setLoading(true);

    return signInWithPopup(auth, provider)
      .then((result) => {
        setUser({
          email: result.user.email,
          logged: true,
          mensaje: null,
        });
      })
      .catch((error) => {
        console.log(error);
        setUser({
          email: null,
          logged: false,
          mensaje: error.message,
        });
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = () => {
    return signOut(auth)
      .then(() => {
        setUser({
          email: null,
          logged: false,
          mensaje: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const register = (values) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        setUser({
          email: userCredential.user.email,
          logged: true,
          mensaje: null,
        });
      })
      .catch((error) => {
        console.log(error);
        setUser({
          email: null,
          logged: false,
          mensaje: error.message,
        });
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          email: firebaseUser.email,
          logged: true,
          mensaje: null,
        });
      } else {
        setUser({
          email: null,
          logged: false,
          mensaje: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <LoginContext.Provider
      value={{ user, login, logout, loading, register, googleLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};