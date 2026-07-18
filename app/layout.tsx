import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "FIRNADIQ GRAPHICS | Creative Design Studio & Personal Portfolio",
    template: "%s | FIRNADIQ GRAPHICS"
  },
  description: siteConfig.description,
  keywords: [
    "FIRNADIQ GRAPHICS",
    "creative design studio",
    "personal portfolio",
    "logo design",
    "brand identity",
    "print design",
    "social media design",
    "packaging design",
    "freelance graphic designer"
  ],
  authors: [{ name: "FIRNADIQ GRAPHICS" }],
  creator: "FIRNADIQ GRAPHICS",
  publisher: "FIRNADIQ GRAPHICS",
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: "FIRNADIQ GRAPHICS",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/firnadiq-logo-dark.jpg",
        width: 1600,
        height: 900,
        alt: "FIRNADIQ GRAPHICS logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FIRNADIQ GRAPHICS",
    description: siteConfig.description,
    images: ["/images/firnadiq-logo-dark.jpg"]
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090a18" }
  ]
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/firnadiq-logo-dark.jpg`,
  description: siteConfig.description,
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: "Founder & Creative Director"
  },
  sameAs: siteConfig.socials.map((social) => social.href)
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-ink antialiased dark:bg-[#090a18] dark:text-white">
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
