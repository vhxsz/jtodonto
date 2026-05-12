import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jtodontologia.com.br"),
  title: "JT Odontologia | Ortodontia, Estética e Saúde Bucal — Nova Iguaçu",
  description:
    "Clínica de odontologia e estética facial em Nova Iguaçu, RJ. Aparelho ortodôntico, preenchimento labial, clareamento, implantes, reabilitação oral e muito mais. Agende sua avaliação gratuita.",
  keywords: [
    "odontologia Nova Iguaçu",
    "ortodontia Nova Iguaçu",
    "preenchimento labial",
    "clareamento dental",
    "implantes dentários",
    "reabilitação oral",
    "JT Odontologia",
    "Taiane Valadares",
    "João Gilberto dentista",
    "dentista Nova Iguaçu",
  ],
  authors: [{ name: "JT Odontologia" }],
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jtodontologia.com.br",
    title: "JT Odontologia | Nova Iguaçu, RJ",
    description: "Sorrisos desenhados com precisão e arte. Agende sua avaliação gratuita.",
    siteName: "JT Odontologia",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "JT Odontologia" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1a6b8a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "JT Odontologia",
              description: "Clínica de odontologia e estética facial em Nova Iguaçu, RJ",
              url: "https://jtodontologia.com.br",
              telephone: "+55-21-98251-6991",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Gov. Roberto Silveira, 470 — Sala 607",
                addressLocality: "Nova Iguaçu",
                addressRegion: "RJ",
                addressCountry: "BR",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
              medicalSpecialty: "Dentistry",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
