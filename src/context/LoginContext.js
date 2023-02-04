import { createContext, useState } from "react";

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

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false,
    mensaje: null,
  });

  console.log(user);

  const login = (values) => {
    const match = MOCK_USERS.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (match) {
      setUser({
        email: match.email,
        logged: true,
        mensaje: "Bienvenido A Rescue Store",
      });
    } else {
      setUser({
        email: null,
        logged: false,
        mensaje: "Los datos son invalidos",
      });
    }
  };

  const logout = () => {
    setUser({
      email: null,
      logged: false,
      error: null,
    });
  };

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
