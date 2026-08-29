import Link from "next/link";
import Image from "next/image";
import { site, intro, proof } from "@/lib/site";
import { projects } from "@/lib/projects";
import { analyses } from "@/lib/analysis";
import { research } from "@/lib/research";
import { pieces } from "@/lib/writing";
import { Container, SectionHeading, ExternalLink } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const latest = pieces[0];

  return (
    <Container wide>
      {/* ── intro ────────────────────────────────────────────────────────── */}
      <section className="enter pt-14 pb-16 sm:pt-20 sm:pb-20">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">{site.name}</h1>
        <p className="mt-3 text-[17px] text-muted">
          {site.role} · {site.location}
        </p>

        <div className="measure mt-8 space-y-4 text-[17px] leading-relaxed text-muted">
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ul className="data mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-subtle">
          {proof.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[15px]">
          <a
            href={`mailto:${site.email}`}
            className="rounded bg-accent px-4 py-2 font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <ExternalLink href={site.github} className="text-muted hover:text-fg">
            GitHub
          </ExternalLink>
          <ExternalLink href={site.linkedin} className="text-muted hover:text-fg">
            LinkedIn
          </ExternalLink>
          <Link href="/about" className="-my-1 inline-block py-1 text-muted hover:text-fg">
            CV
          </Link>
        </div>
      </section>

      {/* ── work ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-line py-14 sm:py-16">
        <SectionHeading numeral="I" href="/work" action="All work">
          Selected work
        </SectionHeading>
        <div className="space-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0} figure={i + 1} />
          ))}
        </div>
      </section>

      {/* ── research ─────────────────────────────────────────────────────── */}
      <section className="border-t border-line py-14 sm:py-16">
        <SectionHeading numeral="II" href="/research" action="Read more">
          Research
        </SectionHeading>
        <div className="grid gap-8 sm:grid-cols-[1fr_260px] sm:gap-10">
          <div>
            <h3 className="measure text-lg leading-snug font-medium tracking-tight">
              <Link href="/research" className="-my-1 inline-block py-1 hover:text-accent">
                {research.title}
              </Link>
            </h3>
            <p className="data mt-2 text-[12.5px] text-subtle">{research.venue}</p>
            <p className="measure mt-3 text-[15.5px] leading-relaxed text-muted">
              Best Paper and Best Presenter at ICICyTA 2024, published on IEEE Xplore and indexed
              in Scopus. It compares GraphSAGE against GCN on the Spotify Million Playlist Dataset
              and finds the split that matters: GraphSAGE takes precision, GCN takes recall — and
              GCN quietly drifts toward already-popular tracks.
            </p>
          </div>
          <Link href="/research" className="shot block self-start">
            <Image
              src="/images/gnn-system-design.png"
              alt="System design diagram from the paper, showing the graph construction and evaluation pipeline."
              width={699}
              height={521}
              sizes="260px"
              className="bg-white"
            />
          </Link>
        </div>
      </section>

      {/* ── writing ──────────────────────────────────────────────────────── */}
      {latest && (
        <section className="border-t border-line py-14 sm:py-16">
          <SectionHeading numeral="III" href="/writing" action="All writing">
            Writing
          </SectionHeading>
          <h3 className="measure text-lg leading-snug font-medium tracking-tight">
            <Link href={`/writing/${latest.slug}`} className="-my-1 inline-block py-1 hover:text-accent">
              {latest.title}
            </Link>
          </h3>
          <p className="data mt-2 text-[12.5px] text-subtle">
            {latest.date} · {latest.subject}
          </p>
          <p className="measure mt-3 text-[15.5px] leading-relaxed text-muted">
            {latest.standfirst}
          </p>
        </section>
      )}

      {/* ── analysis ─────────────────────────────────────────────────────── */}
      <section className="border-t border-line py-14 sm:py-16">
        <SectionHeading numeral="IV" href="/work#analysis" action="All analysis">
          Analysis &amp; modelling
        </SectionHeading>
        <ul className="divide-y divide-line border-y border-line">
          {analyses.slice(0, 4).map((a) => (
            <li key={a.repo}>
              <ExternalLink
                href={a.repo}
                className="flex w-full flex-wrap items-baseline gap-x-3 gap-y-0.5 py-3.5 text-[15.5px] hover:text-accent"
              >
                <span className="font-medium">{a.title}</span>
                <span className="text-[14px] text-muted">{a.method}</span>
                <span className="data ml-auto text-[12px] text-subtle">{a.year}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
