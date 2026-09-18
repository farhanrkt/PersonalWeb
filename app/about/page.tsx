import type { Metadata } from "next";
import Image from "next/image";
import { site, background, education, certifications, capabilities } from "@/lib/site";
import { Container, PageTitle, ExternalLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, education, certifications and CV for Farhan Rangkuti — data scientist in Bogor, Indonesia.",
};

export default function AboutPage() {
  return (
    <Container wide>
      <PageTitle
        title="About"
        intro="Where I've worked and what I've been trained in. Where a certification can be verified publicly, it links to the issuer's record — the ones that can't are listed plainly rather than dressed up as checkable."
      />

      {site.photo && (
        <div className="pb-10">
          <Image
            src={site.photo}
            alt={`${site.name}, ${site.role}`}
            width={160}
            height={160}
            className="rounded-full border border-line"
          />
        </div>
      )}

      <section className="border-t border-line py-12">
        <h2 className="mb-8 flex items-baseline gap-3.5 text-xl font-medium tracking-tight"><span className="label text-accent">I</span>Experience</h2>
        <ol className="space-y-9">
          {background.map((b) => (
            <li key={b.role + b.org} className="grid gap-x-10 gap-y-2 lg:grid-cols-[13rem_1fr]">
              <div>
                <p className="data text-[12.5px] text-subtle">{b.period}</p>
                <p className="mt-1 text-[14.5px] leading-snug text-muted">
                  {b.org}
                  <span className="block text-subtle">{b.where}</span>
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="text-[17px] font-medium tracking-tight">{b.role}</h3>
                <p className="measure mt-2 text-[16px] leading-relaxed text-muted">{b.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line py-12">
        <h2 className="mb-6 flex items-baseline gap-3.5 text-xl font-medium tracking-tight"><span className="label text-accent">II</span>Education</h2>
        <div className="grid gap-x-10 gap-y-2 lg:grid-cols-[13rem_1fr]">
          <p className="data text-[12.5px] text-subtle">{education.period}</p>
          <div>
            <h3 className="text-[17px] font-medium tracking-tight">{education.school}</h3>
            <p className="mt-1 text-[16px] text-muted">
              {education.degree} · GPA {education.grade}
            </p>
            <p className="measure mt-3 text-[15.5px] leading-relaxed text-muted">
              Final project: <span className="italic">{education.thesis}</span> — presented at
              ICICyTA 2024, awarded Best Paper (1st) and Best Presenter (8th), and published on
              IEEE Xplore.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-12">
        <h2 className="mb-6 text-xl font-medium tracking-tight">
          Certifications{" "}
          <span className="data text-[13px] font-normal text-subtle">
            {certifications.length} total
          </span>
        </h2>
        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <li key={c.name} className="text-[15.5px] leading-snug">
              {c.credential ? (
                <ExternalLink href={c.credential} className="hover:text-accent">
                  {c.name}
                </ExternalLink>
              ) : (
                c.name
              )}
              <span className="data mt-0.5 block text-[12px] text-subtle">
                {c.issuer}
                {c.year ? ` · ${c.year}` : ""}
                {c.credential ? " · verifiable" : ""}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line py-12">
        <h2 className="mb-6 flex items-baseline gap-3.5 text-xl font-medium tracking-tight"><span className="label text-accent">III</span>Skills</h2>
        <dl className="divide-y divide-line border-y border-line">
          {capabilities.map((g) => (
            <div key={g.label} className="grid gap-2 py-4 sm:grid-cols-[13rem_1fr] sm:gap-10">
              <dt className="text-[14.5px] text-subtle">{g.label}</dt>
              <dd className="flex flex-wrap gap-x-4 gap-y-1.5 text-[15.5px] text-muted">
                {g.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-line py-12">
        <h2 className="mb-4 flex items-baseline gap-3.5 text-xl font-medium tracking-tight"><span className="label text-accent">IV</span>CV</h2>
        <p className="measure text-[16px] leading-relaxed text-muted">
          The same record as a one-page PDF, for application systems that want a file. The page
          above is fuller — the CV omits several certifications for space.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[15px]">
          <a
            href="/farhan-rangkuti-cv.pdf"
            download
            className="rounded bg-accent px-4 py-2 font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Download CV (PDF)
          </a>
          <a href={`mailto:${site.email}`} className="-my-1 py-1 text-muted hover:text-fg">
            {site.email}
          </a>
          <ExternalLink href={site.linkedin} className="text-muted hover:text-fg">
            LinkedIn
          </ExternalLink>
        </div>
      </section>
    </Container>
  );
}
