import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryanliu6.xyz"),
  title: {
    default: "Ryan Liu",
    template: "$s | Ryan Liu",
  },
  description: "Ryan Liu's personal portfolio",
  openGraph: {
    title: "Ryan Liu",
    description: "Ryan Liu's personal portfolio",
    url: 'https://ryanliu6.xyz',
    siteName: 'Ryan Liu',
    locale: 'en_CA',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased flex flex-col md:flex-row max-w-3xl mx-4 my-8 lg:mx-auto">
        <main className="flex-auto flex flex-col min-w-0 mx-4 my-4">
          {children}
        </main>
      </body>
    </html>
  );
}
