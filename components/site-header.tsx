import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./ui";

const links = [
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="masthead-rule mb-1">
      <Container wide>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="-my-1 py-1 font-medium tracking-tight hover:text-accent">
            {site.name}
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="-my-1 rounded px-2 py-2 text-[14.5px] text-muted transition-colors hover:text-fg sm:px-3"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
