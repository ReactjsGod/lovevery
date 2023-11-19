import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@component";
import { ThemeProvider } from "@Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lovevery",
  description: "The Lovevery Challenge by Charles Archibald",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${inter.className} cursor-default`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
