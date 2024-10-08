import type { Metadata } from "next";

import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Classroom-AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div>
        <div className="relative w-full flex items-center justify-center">
          <Navbar /> 
        </div>
        {children}
      </div>
  );
}
