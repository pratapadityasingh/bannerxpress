
"use client"
import { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem("token") : null,
  )

  useEffect(() => {
    console.log(token , 'token my ')
    const fetchUserData = async () => {
      if (!token) {
        setLoading(false)
        return
      }

      try {
        const decodedToken: any = jwtDecode(token)
        if (decodedToken?.exp * 1000 < Date.now()) {
          console.error("Token expired")
          logout()
          return
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (!response.ok) throw new Error("Failed to fetch user data")

        const userData = await response.json()
        setUser(userData)
      } catch (error) {
        console.error("Failed to fetch user:", error)
        logout()
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [token]) // `token` ko dependency mein rakhna zaroori hai

  // Function to log in & store token
  const login = (newToken: string) => {
    localStorage.setItem("token", newToken)
    setToken(newToken)
  }

  // Function to log out
  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setUser(null)
  }

  return { user, loading, setUser, token, login, logout }
}

