import SearchPage from "@/components/Findwallspace";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

import React from "react";

const page = () => {
  return (
    <div>
    <ProtectedRoute><SearchPage /></ProtectedRoute>
 
    
    </div>
  );
};

export default page;
