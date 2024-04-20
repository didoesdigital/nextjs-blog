import { Crimson_Text, Overpass_Mono, Work_Sans } from "next/font/google";

export const crimson = Crimson_Text({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
});

export const workSans = Work_Sans({
  // Variable font so we don't set weight: [],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const overpassMono = Overpass_Mono({
  // Variable font so we don't set weight: [],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass-mono",
});
