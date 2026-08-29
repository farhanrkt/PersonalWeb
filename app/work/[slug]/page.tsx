import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject, type Block } from "@/lib/projects";
import { Container, PageTitle, Tag, ExternalLink, LiveDot, FieldList, Note } from "@/components/ui";
import { Signature } from "@/components/signature";
import { ArrowRight } from "@/components/icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.blurb,
    openGraph: { title: project.name, description: project.blurb, type: "article" },
  };
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((b) => (
        <div key={b.title}>
          <h3 className="text-[17px] font-medium tracking-tight">{b.title}</h3>
          <div className="mt-2.5 space-y-3.5">
            {b.body.map((p, i) => (
              <p key={i} className="measure text-[16.5px] leading-[1.7] text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];
  const phone = project.shape === "phone";

  return (
    <Container wide>
      <PageTitle title={project.name} intro={project.tagline} />

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-8">
        <LiveDot label={project.status} />
        <span className="data text-[12px] text-subtle">{project.domain}</span>
        <span className="data text-[12px] text-subtle">{project.year}</span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px]">
          {project.liveUrl && (
            <ExternalLink href={project.liveUrl} className="text-accent hover:opacity-80">
              Live site
            </ExternalLink>
          )}
          <ExternalLink href={project.repoUrl} className="text-muted hover:text-fg">
            Source
          </ExternalLink>
        </div>
      </div>

      <div className={`shot ${phone ? "mx-auto max-w-[330px]" : ""}`}>
        <Image
          src={project.image}
          alt={project.shotAlt}
          width={project.imageW}
          height={project.imageH}
          priority
          sizes={phone ? "330px" : "(max-width: 1024px) 100vw, 1024px"}
        />
      </div>
      <p className="mt-2.5 flex items-baseline gap-2.5 border-t border-line pt-2.5 text-[13.5px] leading-snug text-subtle">
        <span className="label shrink-0 text-accent">Fig. 1</span>
        <span>{project.shotAlt}</span>
      </p>

      <p className="measure mt-10 text-[18px] leading-relaxed">{project.blurb}</p>

      <div className="mt-8 flex flex-wrap gap-1.5">
        {project.chips.map((c) => (
          <Tag key={c}>{c}</Tag>
        ))}
      </div>

      <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-[1fr_15rem] lg:gap-14">
        <div className="min-w-0 space-y-14">
          <section>
            <h2 className="flex items-baseline gap-3.5 text-xl font-medium tracking-tight"><span className="label text-accent">I</span>The problem</h2>
            <div className="mt-4 space-y-3.5">
              {project.problem.map((p, idx) => (
                <p key={idx} className="measure text-[17px] leading-[1.7]">
                  {p}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 flex items-baseline gap-3.5 text-xl font-medium tracking-tight"><span className="label text-accent">II</span>How it works</h2>
            {project.image2 && (
              <figure className="mb-10">
                <div
                  className={`shot ${project.shape2 === "wide" ? "" : "mx-auto max-w-[330px]"}`}
                >
                  <Image
                    src={project.image2}
                    alt={project.shotAlt2 ?? ""}
                    width={project.image2W ?? 2468}
                    height={project.image2H ?? 856}
                    sizes={project.shape2 === "wide" ? "(max-width: 1024px) 100vw, 720px" : "330px"}
                  />
                </div>
                <figcaption className="mt-2.5 flex items-baseline gap-2.5 border-t border-line pt-2.5 text-[13.5px] leading-snug text-subtle">
                  <span className="label shrink-0 text-accent">Fig. 2</span>
                  <span>{project.shotAlt2}</span>
                </figcaption>
              </figure>
            )}

            <figure className="mb-8">
              <div className="shot bg-band">
                <Signature slug={project.slug} className="p-5 sm:p-7" />
              </div>
              <figcaption className="mt-2.5 flex items-baseline gap-2.5 border-t border-line pt-2.5 text-[13.5px] leading-snug text-subtle">
                <span className="label shrink-0 text-accent">
                  Fig. {project.image2 ? 3 : 2}
                </span>
                <span>How the pieces fit together.</span>
              </figcaption>
            </figure>
            <Blocks blocks={project.sections} />
          </section>

          <section>
            <h2 className="mb-6 flex items-baseline gap-3.5 text-xl font-medium tracking-tight"><span className="label text-accent">III</span>Decisions</h2>
            <Blocks blocks={project.decisions} />
          </section>

          <section>
            <h2 className="flex items-baseline gap-3.5 text-xl font-medium tracking-tight"><span className="label text-accent">IV</span>What it can&rsquo;t do</h2>
            <p className="measure mt-2 mb-6 text-[15.5px] leading-relaxed text-muted">
              Each of these is stated in the product itself, not only here.
            </p>
            <div className="space-y-6">
              {project.limits.map((l) => (
                <Note key={l.title} title={l.title}>
                  {l.body[0]}
                </Note>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-8 lg:self-start">
          <h2 className="data text-[12px] tracking-wide text-subtle uppercase">Stack</h2>
          <FieldList className="mt-4" rows={project.stack.map((s) => ({ term: s.label, value: s.value }))} />
          <h2 className="data mt-8 text-[12px] tracking-wide text-subtle uppercase">Figures</h2>
          <dl className="mt-4 space-y-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="data block text-[19px] text-fg">{m.value}</span>
                  <span className="mt-0.5 block text-[13.5px] leading-snug text-muted">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <Link
        href={`/work/${next.slug}`}
        className="group mt-16 flex items-end justify-between gap-4 border-t border-line py-8"
      >
        <div>
          <p className="data text-[12px] text-subtle">Next</p>
          <p className="mt-1.5 text-2xl font-medium tracking-tight group-hover:text-accent">
            {next.name}
          </p>
        </div>
        <ArrowRight className="size-5 shrink-0 self-center text-subtle transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent" />
      </Link>
    </Container>
  );
}
