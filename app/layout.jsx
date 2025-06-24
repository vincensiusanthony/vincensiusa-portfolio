import { Sometype_Mono } from "next/font/google";
import "./globals.css";
// components
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vincensius Anthony",
  description: "Personal website of Vincensius Anthony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sometypeMono.variable} antialiased overflow-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex"> 
          {/* main nav */}
          <div className="hidden 2xl:flex w-[258px] h-screen bg-secondary"> 
            <MainNav />
          </div>
          <div className="w-full max-w-[1130px] px-[15px] mx-auto"> 
            <Header />
            <div>{children}</div>
          </div>
        </div>
        </PageTransition>
      </body>
    </html>
  );
};
