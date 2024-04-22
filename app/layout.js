import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import PageLoader from "./_components/PageLoader";


const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "FireShare",
  description:
    "A file-sharing platform makes it easy to upload, store, and share your files with anyone, anywhere",

    icons: {
      icon: "/fireshare.png",
    },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: {
            backgroundColor: "#0d9488",
            color: "white",
          },
        },
        variables: {
          colorPrimary: "#0d9488",
        },
      }}
    >
      <html lang="en">
        <body className={`body ${inter.className} bg-gray-100`}>
          <Toaster position="top-right" />
          <ClerkLoading>
            <PageLoader />
          </ClerkLoading>
          <ClerkLoaded>
            <Providers>{children}</Providers>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
