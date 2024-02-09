/** @format */
import { Rubik, Syne } from "next/font/google";
export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: "400",
});

export const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600"],
});
