import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return {
    title: messages["META_TITLE"] || "CodeCraft",
    description: messages["META_DESCRIPTION"] || "CodeCraft Page",
    icons: {
      icon: "/images/Logo.png",
      shortcut: "/images/Logo.png",
      apple: "/images/Logo.png",
      other: [
        {
          rel: "apple-touch-icon-precomposed",
          url: "/images/Logo.png",
        },
      ],
    },
    openGraph: {
      title: messages["OG_TITLE"] || "CodeCraft - Soluciones Innovadoras",
      description: messages["OG_DESCRIPTION"] || "Impulsamos tu negocio con tecnología avanzada.",
      url: "https://www.codecraft.com",
      siteName: "CodeCraft",
      images: [
        {
          url: "/images/Logo.png",
          width: 800,
          height: 600,
          alt: "Logo de CodeCraft",
        },
      ],
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@CodeCraft",
      creator: "@CodeCraft",
      title: messages["TWITTER_TITLE"] || "CodeCraft - Soluciones Innovadoras",
      description: messages["TWITTER_DESCRIPTION"] || "Impulsamos tu negocio con tecnología avanzada.",
      images: ["/images/Logo.png"],
    },
    viewport: "width=device-width, initial-scale=1",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
    other: {
      "google-site-verification": "tu-código-de-verificación",
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
