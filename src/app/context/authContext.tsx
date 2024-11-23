//authContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

export interface AuthContextType {
  user: any;
  token: string | null;
  isLoggedIn: boolean;
  setAuthData: (userData: any, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage on mount
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser && storedUser !== "undefined") {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const setAuthData = (userData: any, token: string) => {
    // Save to state
    setUser(userData);
    setToken(token);
    setIsLoggedIn(true);
    // Save to localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn,
        setAuthData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
