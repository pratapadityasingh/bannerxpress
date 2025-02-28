// "use client";
// import React from "react";

// import { usePathname } from "next/navigation";
// import Header from "../Header";
// import Footer from "../Footer";

// const Sites = ({ children }: any) => {
//   const pathname = usePathname();
//   const routesWithoutHeader = [
//     "/sign-in",
//     "/sign-up",
    
    
//   ];
//   const hideHeader = routesWithoutHeader.includes(pathname);
//   return (
//     <div className="">
//       {!hideHeader && <Header />}
//       {children}
//       {!hideHeader && <Footer />}
//     </div>
//   );
// };

// export default Sites;


"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "../Header";
import Footer from "../Footer";

const Sites = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header /> 
      {children}
      <Footer /> 
    </div>
  );
};

export default Sites;
