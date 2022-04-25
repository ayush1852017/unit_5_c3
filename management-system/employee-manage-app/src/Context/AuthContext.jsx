import { createContext } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  function toggleAuth() {
    setisAuth((p) => {
      return !p;
    });
  }
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
