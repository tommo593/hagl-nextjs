import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hagl",
  description: "The middle people for the little people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <main>
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </html>
  );
}
