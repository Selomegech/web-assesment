'use client';
import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Provider store={store}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}