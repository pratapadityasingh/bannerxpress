
import PostWallPage from '@/components/AllForms/Postwallform/postwall'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <div>
        <ProtectedRoute><PostWallPage/></ProtectedRoute>
          
    </div>
  )
}

export default page
