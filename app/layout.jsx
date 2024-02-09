/** @format */

import Footer from "../components/Footer";
import Header from "../components/Header";
import { rubik, syne } from "./font";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${syne.variable} ${rubik.variable}`}>
      <body className='flex flex-col min-h-screen pt-8  text-white bg-[#1A1A1A] '>
        <header className='px-[150px]'>
          <Header />
        </header>
        <main className='grow px-[150px]'>{children}</main>
        <footer className='bg-[#131313]'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
