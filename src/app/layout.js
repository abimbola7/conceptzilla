import localFont from "next/font/local"
import "./globals.css";
import MouseProvider from "./(provider)/mouseprovider";
import ScrollProvider from "./(provider)/scrollprovider";
import { Inter } from "next/font/google";
import Footer from "./(components)/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Conceptzilla - Concepts for $3000 within one week",
  description: "Concepts for $3000 within one week",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen cursor-none transition duration-300 overflow-x-hidden bg-customBlack`}>
        <ScrollProvider>
          <MouseProvider>
            {children}
            <Footer />
          </MouseProvider>
        </ScrollProvider>
      </body>
    </html>
  );
}
