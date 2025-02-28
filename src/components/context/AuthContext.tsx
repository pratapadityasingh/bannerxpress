"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
  username: string;
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Unauthorized");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
        localStorage.removeItem("token"); // Token invalid ho to remove karo
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // **Login Function - Token Save & Fetch User**
  const login = async (token: string) => {
    localStorage.setItem("token", token);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unauthorized");
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user after login:", error);
      setUser(null);
      localStorage.removeItem("token");
    }
  };

  // **Logout Function**
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
