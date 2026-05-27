import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "itsromeo.dev | Romeo's Portfolio",
  description: "Portfolio of Romeo, a Software Developer.",
  keywords: ["Software Developer", "React", "Web Developer", "Romeo"],
  openGraph: {
    title: "itsromeo.dev",
    description: "Portfolio of Romeo, a Software Developer.",
    url: "https://itsromeo.dev",
    siteName: "Romeo's Portfolio",
    type: "website",
    images: [
      {
        url: "https://itsromeo.dev/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Romeo Portfolio",
      },
    ],
  },
  icons: {
    icon: '/images/profile.png'
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('theme');
                if (!theme) theme = 'light';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};