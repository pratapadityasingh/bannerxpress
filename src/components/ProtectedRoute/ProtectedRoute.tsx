"use client"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import LoadingIcon from "../Common-ui/loader"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [checking, setChecking] = useState(true) // Ensures the redirection logic waits

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/sign-in")
      } else {
        setChecking(false) // Allow rendering only when user exists
      }
    }
  }, [loading, user, router])

  if (loading || checking) {
    return <div className="w-full flex justify-center items-center h-screen text-4xl"><LoadingIcon/></div>
  }

  return <>{children}</>
}

export default ProtectedRoute
