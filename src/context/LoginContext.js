import { createContext, useState, useContext } from "react";

const MOCK_USERS = [
  {
    email: "usuarioCreado1@gmail.com",
    password: "admin",
  },
  {
    email: "usuarioCreado2@gmail.com",
    password: "admin",
  },
  {
    email: "usuarioCreado3@gmail.com",
    password: "admin",
  },
];

export const LoginContext = createContext();

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "usuarioCreado1@gmail.com",
    logged: true,
    mensaje: null,
  });

  console.log(user);

  const login = (values) => {
    setLoading(true);
    setTimeout(() => {
      const match = MOCK_USERS.find((user) => user.email === values.email);

      if (!match) {
        setUser({
          email: null,
          logged: false,
          mensaje: "Usuario No Encontrado",
        });

        return;
      }

      if (match.password === values.password) {
        setUser({
          email: match.email,
          logged: true,
          mensaje: "Bienvenido A Rescue Store",
        });
      } else {
        setUser({
          email: null,
          logged: false,
          mensaje: "Password Incorrecto",
        });
      }
    }, 1500);
  };

  const logout = () => {
    setUser({
      email: null,
      logged: false,
      error: null,
    });
  };

  return (
    <LoginContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </LoginContext.Provider>
  );
};
