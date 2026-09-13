import type { Metadata } from "next";
import { Petrona, Archivo_Narrow } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const petrona = Petrona({ variable: "--font-petrona", subsets: ["latin"], display: "swap" });
const archivo = Archivo_Narrow({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description: site.tagline,
  keywords: ["data scientist", "machine learning", "graph neural networks", "bioinformatics", site.name],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: { card: "summary_large_image", title: `${site.name} — ${site.role}`, description: site.tagline },
  robots: { index: true, follow: true },
};

/** The direction contract, emitted so the render can be audited against it. */
const DIRECTION = `<!--
THESIS: Conventional structure with material character — the middle position
settled after a metaphor-led build was rejected as a gimmick and a plain
neutral rebuild was rejected as bland. Sections are named for what they hold;
the page still has a voice.

OWN-WORLD: Warm paper ground (never stark white, never cream), a text serif for
everything read, condensed small-caps for metadata furniture, one deep-rust
accent, numbered sections, flat hairline separation. The ground exists to serve
the screenshots: two of three products are dark-UI and were reading as pasted-on
against white.

STORY: A reviewer sees a page that was designed rather than defaulted, meets
three real applications in real screenshots, reads a null result reported
honestly, and either opens the work or writes.

FIRST VIEWPORT: Name at display scale in the serif, role and place beneath,
three paragraphs at reading measure, three checkable facts in small caps, and
the actions. The first screenshot arrives with the first project.

FORM: Standing exit taken, then amplified on the user's instruction. No
concept-seed roll applies; the direction is user-pinned across three rounds.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${petrona.variable} ${archivo.variable}`}>
      <body className="min-h-screen">
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {/* Vercel Web Analytics: cookieless page counts, no cross-site
            identifiers, nothing personal collected. The only client-side
            script on the site — inert outside production. */}
        <Analytics />
      </body>
    </html>
  );
}
