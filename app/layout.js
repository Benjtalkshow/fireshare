import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`body ${inter.className} bg-gray-100`}>
        <Toaster position="top-right" />
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
