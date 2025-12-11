import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="navbar bg-base-100 shadow-sm">
          <a className="btn btn-ghost text-xl uppercase">Romeo</a>
        </div>
        {children}
      </body>
    </html>
  );
}
