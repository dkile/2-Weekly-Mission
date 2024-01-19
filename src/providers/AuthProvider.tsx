import { PropsWithChildren, createContext, useState } from "react";

export const AuthContext = createContext(false);
export const AuthActionContext = createContext({
  login: () => {},
  logout: () => {},
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authAction = {
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
  };

  return (
    <AuthContext.Provider value={isAuthenticated}>
      <AuthActionContext.Provider value={authAction}>
        {children}
      </AuthActionContext.Provider>
    </AuthContext.Provider>
  );
}
