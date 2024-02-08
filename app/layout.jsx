/** @format */

import Footer from "../components/Footer";
import Header from "../components/Header";
import { rubik, syne } from "./font";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${syne.variable} ${rubik.variable}`}>
      <body className='flex flex-col min-h-screen pt-8 px-[150px] text-white bg-[#1A1A1A] '>
        <header>
          <Header />
        </header>
        <main className='grow'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
