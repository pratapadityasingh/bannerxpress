import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "@/components/context/AuthContext";
import Sites from "@/components/sites";




export const metadata: Metadata = {
  title: 'BannerXpress',
  description: 'Revolutionizing wall advertisement placements',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      <AuthProvider>

      <Sites>
      <div className="flex flex-col min-h-screen min-w-full">
                
                    {children}
                  </div>
                  <ToastContainer />
      </Sites>
       
       
      </AuthProvider>
       
      </body>
    </html>
  );
}
