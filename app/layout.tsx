import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeWrapper from "./components/ThemeWrapper";

export const metadata: Metadata = {
  title: "itsmeromeo.dev",
  description: "",
  icons: {
    icon: '/images/profile.png'
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
};