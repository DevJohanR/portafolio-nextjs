import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio: Johan Riascos",
  description: "Desarrollador de Software egresado del SENA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/johan1.jpg" sizes="any" />
        <meta property="og:title" content="Portafolio: Johan Riascos" />
        <meta property="og:description" content="Desarrollador de Software egresado del SENA" />
        <meta property="og:image" content="https://www.johanriascos.site/johan1.jpg" />
        <meta property="og:url" content="https://www.johanriascos.site/" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
