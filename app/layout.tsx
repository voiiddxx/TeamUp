import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { poppins } from "@/components/ui/font";
import { FormProvider } from "@/providers/FormProvider";


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
      <FormProvider>   <body className={`${poppins.className} antialiased`}  >{children}</body></FormProvider>
     </ClerkProvider>
    </html>
  );
}
