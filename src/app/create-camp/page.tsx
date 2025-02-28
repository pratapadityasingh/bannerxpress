
import CreateCampaignPage from '@/components/AllForms/Campaining'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProtectedRoute> <CreateCampaignPage/></ProtectedRoute>
     
    </div>
  )
}

export default page
