"use client";
import DashboardPage from '@/components/Dashboard'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

const page = () => {
  return (
          <ProtectedRoute>
            < DashboardPage/>
          </ProtectedRoute>
   
  )
}

export default page
