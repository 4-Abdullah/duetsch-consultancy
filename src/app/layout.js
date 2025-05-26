// Components Block
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Style Block
import "./globals.css";

// Other fonts & Common Components Block
import { Geist, Geist_Mono, Poppins } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Osama Furkan Khan",
  description: "Duetsch Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
