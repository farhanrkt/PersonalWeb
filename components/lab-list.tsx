import { labProjects } from "@/lib/lab";
import { ExternalLink, LiveDot } from "./ui";

/**
 * The lab's smaller projects as a typeset index, never as cards: none of them
 * has a screenshot or a case study, and a card without either would be a
 * frame around nothing.
 */
export function LabList({ heading = "h3" }: { heading?: "h3" | "h4" }) {
  const H = heading;
  return (
    <ul className="divide-y divide-line border-y border-line">
      {labProjects.map((p) => (
        <li key={p.name} className="grid gap-x-10 gap-y-2 py-5 lg:grid-cols-[13rem_1fr]">
          <div>
            <H className="text-[16.5px] font-medium tracking-tight">{p.name}</H>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1">
              <LiveDot label={p.status} />
              <span className="data text-[12px] text-subtle">{p.category}</span>
            </div>
          </div>
          <div className="min-w-0">
            <p className="measure text-[15.5px] leading-relaxed text-muted">{p.desc}</p>
            {p.note && (
              <p className="measure mt-1.5 text-[14.5px] leading-relaxed text-subtle italic">
                {p.note}
              </p>
            )}
            <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[14.5px]">
              {p.writeUp && (
                <ExternalLink href={p.writeUp} className="text-accent hover:opacity-80">
                  Write-up
                </ExternalLink>
              )}
              <span className="data text-[12px] text-subtle">{p.access}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
