import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "app/Components/nav";
import NavBar from "app/Components/navbar";
import Footer from "app/Components/footer";
import {UserProvider} from "@auth0/nextjs-auth0/client"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mi blioteca personal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
    <UserProvider>
    <html className="h-full">
      <body className="h-full">
    <div className="min-h-full">
      <NavBar/>
      <Nav />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6">{children}</div>
      </main>
    </div>
    <Footer/>
    </body>
    </html>
    </UserProvider>
  </>
  );
}
