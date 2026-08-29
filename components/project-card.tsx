import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { Tag, ExternalLink, LiveDot } from "./ui";

/**
 * A project on an index page, led by a real screenshot of it running.
 *
 * The image is deliberately height-capped: a card has to fit on a laptop
 * screen together with the detail underneath it, so the capture is cropped
 * from the top rather than shown whole. The full-size figure lives on the case
 * study, where there is room for it.
 */
export function ProjectCard({
  project,
  priority = false,
  figure,
}: {
  project: Project;
  priority?: boolean;
  figure?: number;
}) {
  const phone = project.shape === "phone";
  // Crop only images that are TALLER than the frame. A capture already wider
  // than 8:3 needs no crop — cropping one scales it up and cuts the sides off,
  // which reads as a zoom rather than a crop.
  const needsCrop = project.imageW / project.imageH < 8 / 3;

  return (
    <article className="group">
      <Link
        href={`/work/${project.slug}`}
        aria-label={`${project.name} — case study`}
        className="block"
      >
        <div
          className={`shot transition-colors group-hover:border-fg ${
            phone ? "mx-auto w-fit" : ""
          }`}
        >
          <Image
            src={project.image}
            alt={project.shotAlt}
            width={project.imageW}
            height={project.imageH}
            priority={priority}
            sizes={phone ? "180px" : "(max-width: 1024px) 100vw, 1024px"}
            className={
              phone
                ? "h-[320px] w-auto"
                : needsCrop
                  ? // Taller on phones, where an 8:3 sliver would show nothing;
                    // short on laptops, so the card fits one screen with its detail.
                    "aspect-[16/10] w-full object-cover object-top sm:aspect-[8/3]"
                  : "w-full"
            }
          />
        </div>
      </Link>

      {figure !== undefined && (
        <p className="mt-2 flex items-baseline gap-2.5 border-t border-line pt-2 text-[13px] leading-snug text-subtle">
          <span className="label shrink-0 text-accent">Fig. {figure}</span>
          <span>{project.shotShort}</span>
        </p>
      )}

      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <h3 className="text-lg font-medium tracking-tight">
            <Link href={`/work/${project.slug}`} className="-my-1 inline-block py-1 hover:text-accent">
              {project.name}
            </Link>
          </h3>
          <LiveDot label={project.status} />
          <span className="data ml-auto text-subtle">{project.year}</span>
        </div>

        <p className="measure mt-2 text-[15.5px] leading-relaxed text-muted">{project.blurb}</p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.chips.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14.5px]">
          <Link
            href={`/work/${project.slug}`}
            className="-my-1 py-1 text-accent underline decoration-line-strong hover:decoration-current"
          >
            Read more
          </Link>
          {project.liveUrl && (
            <ExternalLink href={project.liveUrl} className="text-muted hover:text-fg">
              Live site
            </ExternalLink>
          )}
          <ExternalLink href={project.repoUrl} className="text-muted hover:text-fg">
            Source
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}
