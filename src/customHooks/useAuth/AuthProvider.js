import AuthContext from "./authContext";
import React, {useState} from "react";

export function AuthProvider({children}) {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    // ...
  }

  const logout = () => {
    // ...
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}