import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"] ,
  weight:["100" ,  "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
 });

export const metadata: Metadata = {
  title: "TeampUp",
  description: "Create | Find | Compete",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <ClerkProvider>
     <body className={poppins.className}>{children}</body>
     </ClerkProvider>
    </html>
  );
}
