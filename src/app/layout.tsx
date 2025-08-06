import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merciless Esports",
  description: "From pioneering Off The Grid to rising as a top contender in Web3, welcome to Merciless.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-black antialiased`}>
        {/* Navbar */}
        <header className="flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12 border-b border-zinc-800 bg-black gap-8">
          <div className="flex items-center">
            <img src="/merc.png" alt="Merciless Logo" className="h-24 sm:h-32 w-auto" />
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg font-semibold tracking-wide uppercase text-white">
            <a href="/" className="hover:text-red-500 transition-colors">Home</a>
            <a href="/about" className="hover:text-red-500 transition-colors">About</a>
            <a href="/team" className="hover:text-red-500 transition-colors">Team</a>
            <a href="/sponsors" className="hover:text-red-500 transition-colors">Sponsors</a>
            <a href="/contact" className="hover:text-red-500 transition-colors">Contact</a>
          </nav>
        </header>
        
        {children}
      </body>
    </html>
  );
}
