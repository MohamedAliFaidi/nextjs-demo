import { Inter } from "next/font/google";
import "./globals.css";
import { MyProvider } from "@/context/MyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "learn next",
  description: "learn nextjs",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyProvider>
        <body className={inter.className}>
          <nav><Navbar /></nav>
          {children}

          <footer>footer</footer>
        </body>
      </MyProvider>
    </html>
  );
}
