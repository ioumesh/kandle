import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Hero from "@/container/Hero/Hero";


const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Kandle | Making crypto fun again",
  description:
    "Kandle is a GameFi that blends fantasy gaming and skill based prediction contests with crypto trading for crypto degens and gaming enthusiasts globally.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Hero />
        <div className="container">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
