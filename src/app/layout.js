import localFont from "next/font/local"
import "./globals.css";
import MouseProvider from "./(provider)/mouseprovider";
import ScrollProvider from "./(provider)/scrollprovider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen cursor-none transition duration-300`}>
        <ScrollProvider>
          <MouseProvider>
            {children}
          </MouseProvider>
        </ScrollProvider>
      </body>
    </html>
  );
}
