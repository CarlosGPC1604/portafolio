import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio Web de Carlos Pulido.",
  description: "Recopilación de proyectos y trabajos (programación y diseño gráfico) de Carlos Pulido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="ruby" scaling="110%">
          {children}
        </Theme>
      </body>
    </html>
  );
}
