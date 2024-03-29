import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ToasterProvider } from "@/providers/ToastProvider";
import AuthProvider from "@/providers/AuthProvider";

const nunito = Nunito({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Jeblog",
  description: "Jeblog created by je",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ToasterProvider />
            <Navbar />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
