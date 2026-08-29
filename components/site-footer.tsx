import Link from "next/link";
import { site } from "@/lib/site";
import { Container, ExternalLink } from "./ui";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container wide>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium tracking-tight">{site.name}</p>
            <p className="mt-1 text-[14.5px] text-muted">
              {site.role} · {site.location}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[14.5px]" aria-label="Footer">
            <Link href="/work" className="-my-1 py-1 text-muted hover:text-fg">
              Work
            </Link>
            <Link href="/writing" className="-my-1 py-1 text-muted hover:text-fg">
              Writing
            </Link>
            <ExternalLink href={site.github} className="text-muted hover:text-fg">
              GitHub
            </ExternalLink>
            <ExternalLink href={site.linkedin} className="text-muted hover:text-fg">
              LinkedIn
            </ExternalLink>
            <a
              href={`mailto:${site.email}`}
              className="-my-1 py-1 text-muted hover:text-fg"
            >
              Email
            </a>
          </nav>
        </div>
        <p className="data border-t border-line py-5 text-[12px] text-subtle">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
