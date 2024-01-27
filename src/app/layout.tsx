"use client";
import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmblaCarousel from "../components/EmblaCarousel";

export const client: Metadata = {
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
        <Header />
        <Footer />
      </main>
    </html>
  );
}
