/**
 * A diagram of each project's central mechanism. It sits alongside the
 * screenshot, not instead of it: the screenshot shows what the thing looks
 * like, the diagram shows how it works. Each one draws the idea the project turns
 * on — not a screenshot, which goes stale, and not decoration, which says
 * nothing. Pure SVG, no assets, no client JS.
 */

const frame = {
  className: "h-full w-full",
  fill: "none",
  "aria-hidden": true,
} as const;

/* QuantDesk — one price series, anomalies flagged, four verdicts underneath. */
function QuantDeskSignature() {
  const price =
    "M8 96 L26 88 L44 92 L62 74 L80 80 L98 62 L116 68 L134 47 L152 58 L170 44 L188 52 L206 33 L224 41 L242 28 L260 36 L278 22 L296 30 L314 18 L332 25 L350 12";
  const anomalies = [
    [98, 62],
    [206, 33],
    [296, 30],
  ];
  const lenses = [
    { label: "FLOW", w: 0.72, on: true },
    { label: "TREND", w: 0.86, on: true },
    { label: "VALUE", w: 0.34, on: false },
    { label: "QUALITY", w: 0.61, on: false },
  ];

  return (
    <svg {...frame} viewBox="0 0 360 200">
      {/* baseline grid */}
      {[24, 48, 72, 96].map((y) => (
        <line key={y} x1="8" y1={y} x2="352" y2={y} stroke="var(--color-line-strong)" strokeWidth="1" />
      ))}
      {/* volume ticks */}
      {Array.from({ length: 20 }, (_, i) => {
        const h = 4 + ((i * 7) % 13);
        return (
          <line
            key={i}
            x1={8 + i * 18}
            y1={112}
            x2={8 + i * 18}
            y2={112 - h}
            stroke="var(--color-subtle)"
            strokeWidth="2"
          />
        );
      })}
      <path d={price} stroke="var(--color-fg)" strokeWidth="1.5" strokeLinejoin="round" />
      {anomalies.map(([cx, cy]) => (
        <g key={cx}>
          <circle cx={cx} cy={cy} r="7" stroke="var(--color-accent)" strokeWidth="1" opacity="0.4" />
          <circle cx={cx} cy={cy} r="2.5" fill="var(--color-accent)" />
        </g>
      ))}
      {/* four lens verdicts */}
      {lenses.map((l, i) => {
        const y = 138 + i * 16;
        return (
          <g key={l.label}>
            <text
              x="8"
              y={y + 3.5}
              fill="var(--color-subtle)"
              fontSize="7"
              fontFamily="var(--font-label)"
              letterSpacing="1.2"
            >
              {l.label}
            </text>
            <line x1="64" y1={y} x2="352" y2={y} stroke="var(--color-line-strong)" strokeWidth="4" />
            <line
              x1="64"
              y1={y}
              x2={64 + 288 * l.w}
              y2={y}
              stroke={l.on ? "var(--color-accent)" : "var(--color-subtle)"}
              strokeWidth="4"
            />
          </g>
        );
      })}
    </svg>
  );
}

/* ScholarTrack — a field grid where "not stated" is drawn, not guessed. */
function ScholarTrackSignature() {
  const cols = 12;
  const rows = 6;
  // Deterministic: 0 = quoted, 1 = not stated, 2 = verified by a human.
  const state = (r: number, c: number) => {
    const n = (r * 7 + c * 5 + ((r * c) % 3)) % 11;
    if (n === 0 || n === 4) return 1;
    if (n === 7 && c > 1) return 2;
    return 0;
  };

  return (
    <svg {...frame} viewBox="0 0 360 200">
      <text
        x="8"
        y="14"
        fill="var(--color-subtle)"
        fontSize="7"
        fontFamily="var(--font-label)"
        letterSpacing="1.2"
      >
        DEADLINE · STIPEND · TUITION · IELTS · WORK EXP · DOCS
      </text>
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => {
          const s = state(r, c);
          const x = 8 + c * 29.5;
          const y = 26 + r * 26;
          if (s === 1) {
            return (
              <rect
                key={`${r}-${c}`}
                x={x}
                y={y}
                width="24"
                height="20"
                rx="2"
                stroke="var(--color-subtle)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            );
          }
          return (
            <g key={`${r}-${c}`}>
              <rect
                x={x}
                y={y}
                width="24"
                height="20"
                rx="2"
                fill={s === 2 ? "var(--color-accent)" : "var(--color-line-strong)"}
                opacity={s === 2 ? 0.85 : 1}
              />
              <rect
                x={x}
                y={y}
                width="24"
                height="20"
                rx="2"
                stroke={s === 2 ? "var(--color-accent)" : "var(--color-subtle)"}
                strokeWidth="1"
                opacity="0.6"
              />
            </g>
          );
        }),
      )}
      <g>
        <rect x="8" y="184" width="10" height="8" rx="1.5" fill="var(--color-line-strong)" />
        <text x="23" y="191" fill="var(--color-subtle)" fontSize="7" fontFamily="var(--font-label)">
          quoted
        </text>
        <rect
          x="72"
          y="184"
          width="10"
          height="8"
          rx="1.5"
          stroke="var(--color-subtle)"
          strokeDasharray="2 2"
        />
        <text x="87" y="191" fill="var(--color-subtle)" fontSize="7" fontFamily="var(--font-label)">
          not stated
        </text>
        <rect x="152" y="184" width="10" height="8" rx="1.5" fill="var(--color-accent)" />
        <text x="167" y="191" fill="var(--color-subtle)" fontSize="7" fontFamily="var(--font-label)">
          human-verified
        </text>
      </g>
    </svg>
  );
}

/* LinguaKu — forgetting curves, reset each time a card is actually answered. */
function LinguaKuSignature() {
  const threshold = 108;
  const reviews = [8, 74, 158, 258, 344];
  const segs = reviews.slice(0, -1).map((x, i) => {
    const next = reviews[i + 1];
    const span = next - x;
    // Decay from full retention down to the threshold, flattening as stability grows.
    const c1x = x + span * 0.42;
    const c2x = x + span * 0.62;
    return `M${x} 40 C ${c1x} ${40 + 34 + i * 6} ${c2x} ${threshold - 4} ${next} ${threshold}`;
  });

  return (
    <svg {...frame} viewBox="0 0 360 200">
      <line
        x1="8"
        y1={threshold}
        x2="352"
        y2={threshold}
        stroke="var(--color-subtle)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <text
        x="8"
        y={threshold - 6}
        fill="var(--color-subtle)"
        fontSize="7"
        fontFamily="var(--font-label)"
        letterSpacing="1.2"
      >
        RECALL THRESHOLD
      </text>
      {segs.map((d, i) => (
        <path key={i} d={d} stroke="var(--color-fg)" strokeWidth="1.5" opacity={0.45 + i * 0.18} />
      ))}
      {reviews.map((x, i) => (
        <g key={x}>
          <line
            x1={x}
            y1={34}
            x2={x}
            y2={threshold + 8}
            stroke="var(--color-accent)"
            strokeWidth="1"
            opacity="0.28"
          />
          <circle cx={x} cy={i === 0 ? 40 : threshold} r="3" fill="var(--color-accent)" />
        </g>
      ))}
      {/* the seven-rung card ladder */}
      {Array.from({ length: 7 }, (_, i) => {
        const x = 8 + i * 50;
        const active = i < 3;
        return (
          <g key={i}>
            <rect
              x={x}
              y={150}
              width="42"
              height="18"
              rx="2"
              fill={active ? "var(--color-line-strong)" : "none"}
              stroke={active ? "var(--color-accent)" : "var(--color-subtle)"}
              strokeWidth="1"
              opacity={active ? 0.9 : 0.55}
            />
            <text
              x={x + 21}
              y={162}
              textAnchor="middle"
              fill={active ? "var(--color-accent)" : "var(--color-subtle)"}
              fontSize="8"
              fontFamily="var(--font-label)"
            >
              L{i}
            </text>
          </g>
        );
      })}
      <text
        x="8"
        y="188"
        fill="var(--color-subtle)"
        fontSize="7"
        fontFamily="var(--font-label)"
        letterSpacing="1.2"
      >
        EXPOSURE → RECOGNITION → RECALL → FREE PRODUCTION
      </text>
    </svg>
  );
}

const map: Record<string, () => React.ReactElement> = {
  quantdesk: QuantDeskSignature,
  scholartrack: ScholarTrackSignature,
  linguaku: LinguaKuSignature,
};

export function Signature({ slug, className = "" }: { slug: string; className?: string }) {
  const Draw = map[slug];
  if (!Draw) return null;
  return (
    <div className={`overflow-hidden ${className}`}>
      <Draw />
    </div>
  );
}
