import localFont from "next/font/local"
import "./globals.css";
import MouseProvider from "./(provider)/mouseprovider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-[200vh]`}>
        <MouseProvider>
          {children}
        </MouseProvider>
      </body>
    </html>
  );
}
