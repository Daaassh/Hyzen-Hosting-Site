import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyzen Host | Home",
  description: "Pagina principal da hyzen host",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <NextUIProvider>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    /* </NextUIProvider> */

  );
}
