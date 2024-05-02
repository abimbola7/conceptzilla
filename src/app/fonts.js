import { Londrina_Outline, Tinos, Londrina_Solid } from "next/font/google";
export const tinos = Tinos({
  subsets : ["cyrillic", "cyrillic-ext","greek", "greek-ext", "hebrew"],
  weight : ["400", "700"],
  style : ["italic", "normal"],
  display : "swap",
})

export const londrina = Londrina_Outline({
  subsets : ["latin"],
  weight : ["400"],
})

export const londrina_solid = Londrina_Solid({
  subsets : ["latin"],
  weight: ["100", "300", "400", "900"],
  style : ["normal"]
})