import type { Metadata } from "next";
import { Source_Code_Pro, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Quizzer",
  description: "Create and take quizzes powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sourceCodePro.variable} ${poppins.variable} antialiased`}
      >
        <AuthContext>
          <Navbar />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
