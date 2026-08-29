---
name: Farhan Rangkuti — Personal Site
description: Conventional structure with material character — warm paper, a text serif, small-caps metadata, one deep-rust accent, and real product screenshots.
colors:
  paper: "#f6f3ee"
  band: "#efebe3"
  raised: "#e8e3d9"
  line: "#ddd7cc"
  line-strong: "#c9c1b2"
  fg: "#1c1a17"
  muted: "#57534c"
  subtle: "#67625a"
  accent: "#9c3d1c"
  accent-soft: "#f3e6dd"
  on-accent: "#f6f3ee"
  dark-paper: "#14120f"
  dark-band: "#1c1a16"
  dark-line: "#2e2a23"
  dark-fg: "#f0ece5"
  dark-muted: "#b0a99e"
  dark-subtle: "#9a9287"
  dark-accent: "#e08a5f"
typography:
  display:
    fontFamily: "Petrona, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.012em"
  heading:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.012em"
  body:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "'Archivo Narrow', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
  data:
    fontFamily: "'Archivo Narrow', ui-sans-serif, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.005em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "40px"
  section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  tag:
    backgroundColor: "{colors.band}"
    textColor: "{colors.subtle}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  note:
    backgroundColor: "{colors.band}"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
    padding: "20px 20px 20px 24px"
  screenshot-frame:
    backgroundColor: "{colors.band}"
    rounded: "{rounded.none}"
    padding: "6px"
---

# Design System: Farhan Rangkuti — Personal Site

## Overview

**Conventional structure, with material character.** This is a settled middle
position, arrived at across three builds: a metaphor-led design was rejected as
a gimmick, and the plain neutral rebuild that replaced it was rejected as bland
and incoherent.

The structure is ordinary and the sections are named for what they hold — Work,
Research, Writing, About. There is **no governing metaphor and there must not be
one**. But the page is not neutral-by-default either: it carries a voice through
a warm paper ground, a text serif, small-caps metadata, a specific warm accent,
and numbered sections.

**The ground is a functional decision, not a decorative one.** Two of the three
featured products are dark-UI. Against stark white their screenshots read as
foreign objects pasted onto the page; against warm paper, with a band-toned mat
around each one, they sit *in* it. That single change is most of what separates
this from the version that felt incoherent.

**Ornament comes from printing, not from decoration.** Where the page carries
detail beyond the strictly necessary — grain, a masthead rule, figure numbers, a
drop cap — every one of them is a convention of a well-set printed document.
This is not arbitrary: the subject is a published researcher and the site argues
for careful evidence, so the details are the ones a journal or a proof sheet
would have. Nothing decorative may enter that does not come from that family.

**Anti-references, in both directions.** Not the themed build: no conceit, no
vocabulary borrowed from another domain, no numbered sections that stand for
something. And not the neutral build: no stark white, no deliberately voiceless
sans, no framework-default blue. Also not the warm-editorial cliché this palette
sits near: no cream, no ivory, no terracotta, no airy magazine spacing.

## Colors

Strategy: **restrained** — a warm neutral ramp plus one accent that marks
interactivity.

### Primary

**Deep Rust (`#9c3d1c`)** — links, the primary action, section numerals, and the
rule on a limitation note. **6.12:1** on paper and **5.70:1** on the band. In
dark mode it lifts to `#e08a5f` at 7.10:1.

**The Rust, Not Terracotta Rule.** The obvious accent for a warm paper ground is
terracotta, and it is both the default this palette must avoid and a genuine
accessibility failure: `#c1553a` measures **4.10:1** on this ground, under the
4.5 floor. The accent is deliberately deeper and browner than the expected
choice. Do not lighten it toward terracotta.

### Neutral

Warm greys, never cream. The ground carries a hint of warmth so it reads as
paper rather than as an unstyled page, but it stays grey enough to avoid ivory.

- **Paper (`#f6f3ee`)** — the page. **Band (`#efebe3`)** — section fills, tags,
  notes, and the screenshot mat. **Raised (`#e8e3d9`)** — a third step, used
  rarely.
- **Line (`#ddd7cc`)** for rules; **Line Strong (`#c9c1b2`)** for a screenshot
  border and hover states.
- **Foreground (`#1c1a17`)** at 15.7:1, **Muted (`#57534c`)** for prose at
  6.9:1, **Subtle (`#67625a`)** for small-caps furniture at 4.85:1.
- Dark mode is a second measured set on a warm near-black (`#14120f`), not a
  tint of the light one.

**The Both Grounds Rule.** Every text value is measured against the ground it
actually sits on — paper, band, or the dark equivalents — and both schemes are
audited on every pass. There is no theme toggle; the operating system already
knows.

## Typography

Two faces, doing two different jobs.

- **Petrona** — everything read: display, headings, prose. A text serif with
  enough character to give the page a voice and enough restraint to set three
  paragraphs. Italic is a working style for taglines and captions.
- **Archivo Narrow** — furniture only: small-caps field terms, section numerals,
  tags, buttons, and tabular data.

### Hierarchy

- **Display** (clamp 2.25→3rem, 500) — page titles, one per page.
- **Heading** (1.5rem, 500) — section headings, preceded by their numeral.
- **Body** (1.0625rem, 1.65 leading) — prose, `muted` for supporting text.
- **Label** (Archivo Narrow, 0.6875rem, uppercase, 0.1em) — furniture.
- **Data** (Archivo Narrow, 0.8125rem, tabular) — dates, figures, identifiers.

**The Furniture Rule.** Archivo Narrow only labels; it never sets a sentence. If
a line has a subject and a verb it is Petrona. This is what keeps the condensed
face reading as printed label stock rather than as a font choice.

**Drop cap.** The opening paragraph of an article takes a 3.6em accent drop cap.
One per article, on the first paragraph only — a second one is decoration rather
than a convention.

**Measure.** Prose holds to `66ch`.

## Layout

A single centred column: **`max-w-3xl`** for reading-first pages, **`max-w-5xl`**
where screenshots need room. Sections separated by a full-width hairline and
56px, never by cards.

**The Numeral Rule.** Major sections carry a Roman numeral in accent small-caps.
These are information, not ornament: each page states an order, and a reader who
wants the analysis list can go straight to II. A numeral is only earned where
the page genuinely has a sequence — never add one to a page with a single
section.

**The Masthead Rule.** The site header closes with a 2px foreground rule and a
1px hairline four pixels beneath it — thick over thin, the way a printed head is
set. Drawn with a border and a pseudo-element, never `box-shadow`, because this
system has no shadows even as a drawing technique.

**The Heading Rule.** A section heading's rule runs from the text to the column
edge, tying the numeral and the heading into the page's horizontal structure.

**Responsive.** Mobile-first. The case-study stack aside drops below the content
at 1024px; multi-column lists collapse; phone-shaped screenshots stay centred at
a fixed width rather than stretching. All four nav links survive every width.

## Elevation & Depth

**Flat.** No shadows, either scheme. Separation is a hairline plus one step of
surface value.

The one exception in spirit is the **screenshot mat**: a 6px band-coloured
padding inside the frame border. It is not elevation — it is a physical mat,
and its job is to stop a dark product UI from meeting warm paper edge-on.

## Shapes

**Zero radius everywhere.** Buttons, tags, notes, frames and inputs all have
square corners. The only round things are the live dot and, when supplied, the
profile photo. One rounded button breaks the page.

## Components

### Screenshot frame

The most important component. A `line-strong` border, a **6px band mat**, no
radius, `overflow: hidden`, image anchored `top center`. Desktop captures render
at `aspect-[16/10]`; phone captures at natural ratio in a 300–330px column.

**The Legibility Rule.** A screenshot is evidence, so its own text must be
readable. A capture wider than the reading column breaks out to the wide column
rather than being downscaled into it, and a panel is clipped to the part that
carries the argument rather than shown whole. A screenshot whose text cannot be
read has become decoration, which is the one thing it must not be.

**The One Screen Rule.** On an index page, a project card must fit a laptop
screen together with the detail beneath it — title, description, tags and links.
That caps the screenshot at roughly **355px** tall on desktop: the frame is
`aspect-[8/3]`, top-cropped, widening to `aspect-[16/10]` below the `sm`
breakpoint where an 8:3 sliver would show nothing. Measured at 1280×800 and
1440×900, the tightest card leaves 72px of headroom. The full-height figure
belongs on the case study, where there is room for it.

**The Crop Only Downward Rule.** A card frame crops an image only when the
image is *taller* than the frame. A capture already wider than 8:3 is shown
whole, because `object-cover` on a too-wide source scales it up to fill the
height and cuts the sides off — which reads as a zoom, not a crop, and hides
content at the same time. Compare the image's ratio to the frame's and skip the
crop when it is already short enough; a 3:1 panel at 946px is 315px tall and
needs no help.

**The Capture, Not The Crop Rule.** When a top-crop would waste the frame on a
sparse header, re-capture the source clipped to the region that carries the
argument rather than fudging it with `object-position`. QuantDesk's page header
is mostly empty dark space; its card image is a clip of the four-lens verdict
panel, not the top of the page.

**The Real Screenshot Rule.** Every product image is captured from the live
application after it has been driven into a real working state — a ticker
actually analysed, a list actually populated, a lesson actually begun. Empty
states, mockups and illustrations standing in for the product are not permitted.
Each carries alt text describing what is on screen.

### Figure

Every screenshot and diagram is a numbered figure. A hairline above the caption,
then `Fig. n` in accent small-caps, then the description. Numbering restarts per
page.

**The Figure Rule.** Numbering images is not ornament — it is how a reader
refers to one, and it commits the page to describing what each image shows
rather than letting it float as decoration. If an image cannot earn a caption
that says something, it should not be on the page.

### Paper grain

A fixed, non-interactive noise layer over the whole viewport at **3.2% opacity**
(5% in dark). It exists so the ground reads as a material rather than a blank
canvas. It must stay far below the threshold where it could affect text
legibility; if it becomes visible as texture rather than felt as tooth, it is
too strong.

### Limitation note

Band fill, a **2px accent rule on the left edge**, a label reading *Limitation*
or *Aside*, then a heading and one paragraph. Used wherever a claim needs
qualifying: "what it can't do" on a case study, an aside in an article, the
caveat on the research page.

**The Limitation Is Not A Footnote Rule.** A limitation gets its own labelled
block near the claim it qualifies, never a parenthetical at the end. This is the
one place the accent appears on a non-interactive element, and it is earned:
the whole site argues that stating limits is the point.

### Field list

Small-caps term, `data`-set value, two columns. Used for stack, role, dates and
credential metadata. This is what makes dense information read as printed rather
than as grey small text.

### Tags, buttons, navigation

Tags: small-caps, band fill, hairline border, never interactive, never coloured.
Buttons: accent fill with `on-accent` text, or hairline-bordered for secondary.
Navigation: name left, four links right, hairline base, all links at all widths.

### Diagrams

Each project carries an SVG diagram of its mechanism, shown **alongside** its
screenshot: the screenshot shows what it looks like, the diagram shows how it
works. Drawn only in `line-strong`, `subtle`, `fg` and `accent` so it re-inks in
both schemes. `aria-hidden`, with the explanation in adjacent prose.

## Do's and Don'ts

### Do:

- **Capture screenshots from the live product**, in a real working state, and mat them.
- **Measure contrast against the actual ground**, in both schemes.
- **Give a limitation its own labelled block** near the claim it qualifies.
- **Set furniture in Archivo Narrow and sentences in Petrona**, always.
- **Keep prose at 66ch** and supporting text in `muted`.
- **Use tabular numerals** wherever figures are read down a column.

### Don't:

- **Don't introduce a metaphor, theme, or conceptual frame.** Standing constraint.
- **Don't drift the accent toward terracotta** — it is the default here and it fails contrast.
- **Don't warm the paper into cream or ivory.**
- **Don't add shadows**, and don't round anything.
- **Don't set prose or navigation in the condensed face.**
- **Don't number a page that has no sequence.**
- **Don't ship a mockup or empty-state capture** where a real screenshot belongs.
- **Don't write superlatives.**
- **Don't add ornament from outside the printing family.** No gradients, no
  glows, no illustrative flourishes. If a detail would not appear on a proof
  sheet or in a journal, it does not belong here.
- **Don't use `box-shadow` even to draw a line.** Borders and pseudo-elements
  do that job; keeping the shadow property unused keeps the rule unambiguous.
