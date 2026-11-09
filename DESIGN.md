---
name: Tobias Anuf
description: A single dark page where the work is shown as numbered research figures with plain captions, and the strongest result is plotted, not described.
colors:
  ground: "#121318"
  ink: "#ece8df"
  ink-dim: "#a7a39b"
  ink-faint: "#8a867e"
  rule: "#34363f"
  rule-strong: "#4a4d58"
  result: "#f2c14e"
  base: "#6d9cf7"
  media-black: "#000000"
typography:
  display:
    fontFamily: "STIX Two Text, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(3.25rem, 1.6rem + 6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "STIX Two Text, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "STIX Two Text, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 0.7vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "STIX Two Text, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.45
  caption:
    fontFamily: "STIX Two Text, Iowan Old Style, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
  focus: "2px"
  device: "1.75rem"
spacing:
  s-1: "0.25rem"
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4.5rem"
  s-9: "7rem"
  gutter: "clamp(1rem, 4vw, 3rem)"
  wrap: "1240px"
  masthead: "4rem"
components:
  masthead:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    height: "{spacing.masthead}"
  nav-link:
    textColor: "{colors.ink-dim}"
    typography: "{typography.label}"
    height: "2.75rem"
  nav-link-active:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  figure-caption:
    textColor: "{colors.ink-dim}"
    typography: "{typography.caption}"
    width: "68ch"
  figure-number:
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
  figure-state-control:
    textColor: "{colors.ink-dim}"
    typography: "{typography.label}"
    height: "2.75rem"
  chapter-title:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    padding: "0 0 1rem 0"
  link-row-primary:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "2.75rem"
  link-row:
    textColor: "{colors.ink-dim}"
    typography: "{typography.label}"
    height: "2.75rem"
  data-disclosure:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "2.75rem"
  device-screenshot:
    rounded: "{rounded.device}"
    width: "17rem"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    padding: "0.5rem 1rem"
---

# Design System: Tobias Anuf

## Overview

**Creative North Star: "Figure 1"**

The page reads like a short research paper set on a dark page. The work is the evidence: each project is a numbered figure (Fig. 1, Fig. 2 ...) that sits bare on the ground with a plain-spoken serif caption under it, and the single most important result is plotted as a chart rather than claimed in prose. Everything else (headings, lists, background) is set in type on the same graphite ground, ranked only by size and brightness.

It is quiet and legible rather than decorative. One ground, one warm paper-white ink with two dimmer steps, hairline rules to separate chapters, and exactly two colours that carry meaning, both sampled from the lane-overlay footage: yellow for Tobias's result, blue for the baseline that result beat. Nothing is boxed, lifted or tinted. The world rejects the split hero with pill buttons over a row of equal project cards.

Motion is evidence-driven and rare: the hero video plays continuously with a pause control in its caption, other videos play only while on screen, and Fig. 2's accuracy line draws itself once above the dashed baseline.

**Key Characteristics:**
- Numbered figures with captions under them are the primary content device.
- One graphite ground; hierarchy by scale and brightness, never by containers.
- Yellow and blue are data colours with fixed meanings, never decoration.
- STIX Two Text for name, headings, ledes and captions; Atkinson Hyperlegible for UI and body.
- Hairline rules (1px) are the only separators.

## Colors

A near-monochrome graphite and paper palette with two meaning colours lifted from the project footage.

### Primary
- **Result Yellow** (result): Tobias's own results and nothing else: the Fig. 2 accuracy line, its points and value labels, and inline result figures in prose (86.5%, 3.6×), always bold with tabular numerals. 11:1 on the ground.

### Secondary
- **Baseline Blue** (base): only the baseline a result beat: the dashed rule-based line in Fig. 2 and the word "blue" in its caption legend. Always paired with a yellow result; never appears on its own.

### Neutral
- **Graphite Ground** (ground): the single page background, also the masthead background and the browser theme colour.
- **Paper Ink** (ink): name, headings, figure numbers, email address, primary link, active nav, focus ring. 15:1 on the ground.
- **Dim Ink** (ink-dim): captions, body under ledes, metadata, secondary links and nav at rest. 7.4:1.
- **Faint Ink** (ink-faint): the quietest readable step: tool lists, skill and table column labels, fine print, list tick marks. 5.1:1; do not go dimmer for text.
- **Hairline** (rule): chapter rules, masthead bottom border, table row rules, chart grid.
- **Strong Hairline** (rule-strong): link underlines at rest, scrollbar thumb, middle-dot separators. Decorative only, never a text colour.
- **Media Black** (media-black): letterbox fill behind video and image media so footage edges read as the frame.

### Named Rules
**The Two Meanings Rule.** Yellow means "Tobias's result" and blue means "the baseline it beat". If a use of yellow or blue cannot be read as one of those two statements, it is wrong.

**The One Ground Rule.** Every element sits directly on the graphite ground. No surface tints, panels or alternate section backgrounds.

## Typography

**Display Font:** STIX Two Text (with Iowan Old Style, Georgia, serif), self-hosted at 400, 400 italic and 600.
**Body Font:** Atkinson Hyperlegible (with system-ui, -apple-system, Segoe UI, sans-serif), self-hosted at 400 and 700.

**Character:** A scholarly text serif speaks (the name, chapter titles, ledes, outcomes and figure captions) and a hyperlegibility sans does the work (body, labels, nav, controls, chart axes). The pairing makes the page read as a paper without becoming hard to read on a phone.

### Hierarchy
- **Display** (600, clamp 3.25–6rem, 0.95, -0.03em): the name in the opening only. The closing "Write to me." uses the same voice at clamp 2.5–5rem, line-height 1.
- **Headline** (600, clamp 2.25–3.5rem, 1.1, -0.02em): chapter titles (Experience, Work, About), sitting on a hairline rule.
- **Title** (600, clamp 1.5–1.875rem, 1.1, -0.01em): role names and project names. Background column heads step down to 1.375rem.
- **Lede** (400 serif, clamp 1.25–1.5rem, 1.45): role outcomes, the About lead and closing text, capped at 34–64ch. The opening lede is a larger step (clamp 1.375–1.875rem, line-height 1.3, 34ch).
- **Caption** (400 serif, 1.0625rem, 1.45, max 68ch): figure captions in Dim Ink, led by a 600-weight "Fig. N" in Paper Ink. 1rem on phones.
- **Body** (400 sans, 1.0625rem, 1.6): paragraphs and lists, 56–60ch. 1rem under 680px.
- **Label** (400 sans, 0.9375rem): nav, metadata, link rows, tool lists, controls, table text. Primary links and "more" links go to 700.

### Named Rules
**The Serif Speaks, Sans Works Rule.** Anything that is the author talking about the work (name, titles, ledes, captions, email address) is serif; anything a visitor operates or scans (nav, controls, metadata, axes) is sans.

**The Tabular Numbers Rule.** Dates, table cells and every result figure use tabular lining numerals so numbers line up and read as data.

## Layout

A single centred column of chapters inside a 1240px wrap with a fluid gutter (1rem to 3rem). The masthead is sticky (4rem; 3.5rem on phones) and anchors offset by masthead height plus 1rem.

- **Opening:** a 7fr / 5fr grid. The name spans both columns; the lede sits left and the actions (status line, email with Copy, link row) sit right; Fig. 1 spans the full width beneath at a 1022:380 frame so it stays inside a 1440×900 first viewport. Under 1000px the order becomes name, lede, Fig. 1, actions.
- **Chapters:** 7rem top padding (4.5rem under 1000px); the title, a 1rem gap, a hairline rule, then 3rem (2rem on phones) before content.
- **Experience:** 5fr text / 7fr figure; Fig. 2 is sticky beside the text on desktop and static when stacked.
- **Work:** each piece alternates 7fr figure / 5fr text and its mirror, vertically centred, 4.5rem between pieces. A piece without media is text only, max 44rem.
- **Background:** three equal columns under a hairline rule, two under 1000px, one under 680px.
- **Breakpoints:** 1000px (all two-column grids stack) and 680px (nav collapses to a single Contact link, captions stack their control under the text, chart type scales up).
- **Spacing:** a nine-step scale from 0.25rem to 7rem; column gaps use clamp(2rem, 5vw, 5rem).

**The Readable Measure Rule.** Prose never runs wider than about 68ch; ledes stop at 34–46ch.

## Elevation & Depth

Completely flat. There are no shadows, no raised surfaces and no tinted layers. Depth comes only from brightness (Paper Ink, Dim Ink, Faint Ink) and size, and structure comes from 1px hairlines. The one inset line in the system is the 2px Paper Ink underline marking the active nav item.

**The No-Card Rule.** Nothing is boxed. Figures, roles, projects and background entries sit bare on the ground; if a grouping needs separating, use space or a hairline, never a container, border box or shadow.

## Shapes

Square by default: media frames, rules, tables and controls have no radius. Two exceptions are deliberate and narrow: the 2px radius on the focus ring, and the 1.75rem radius on phone screenshots, which reproduces the device silhouette rather than styling a card. The live-state dot is a small circle. Links are underlined (1px, 0.22em offset) rather than shaped.

## Components

### Figure (signature)
The core device. Media sits bare, full width of its column, on a Media Black letterbox; the caption sits 0.75rem below.
- **Caption:** serif, Dim Ink, max 68ch, opening with a bold Paper Ink "Fig. N". Numbers run in reading order across the page.
- **Lead figure (Fig. 1):** caption spans the full width and carries a state control on the right: a dot, "Live, looping" / "Paused", and an underlined "Pause" / "Play" action, 2.75rem tall. On phones the control drops under the caption text.
- **Video behaviour:** Fig. 1 always plays (muted, looping) and is paused only by its control. Other figure videos play only while 35% on screen and show native controls under reduced motion.
- **Phone screenshots:** centred, max 17rem wide (18rem stacked), device radius, caption width matched to the image.

### Results Chart (Fig. 2)
An inline SVG plot of the strongest result. Hairline grid, sans axis labels in Dim Ink, the baseline as a 2px dashed Baseline Blue line with a bold blue label, the result as a 3.5px round-capped Result Yellow line with dots and serif bold value labels, and a secondary dotted yellow line at 75% opacity for the top-5 series. The caption doubles as the legend by naming the colours in their own colour.
- **Motion:** when 45% on screen the line draws over 1.4s on the system ease, the top-5 line follows 0.35s later, and points and values fade in at 0.9s. Drawn immediately under reduced motion.
- **Data disclosure:** "Show the numbers" sits under the caption as an underlined summary and opens a plain table with hairline row rules (max 28rem).
- **Phones:** axis text 24 and values 34 / 24 in SVG units so they stay readable when scaled down.

### Screenshot slider (Fig. 4)
A figure whose media is a horizontal scroll-snap strip of phone screenshots (one per view, 1.75rem corners). Below it: previous and next buttons (2.75rem square, 1px Ink Faint border, 2px corners, drawn chevrons) around a tabular "n / total" counter, then the figure caption, which changes per slide from each slide's own caption. Keyboard: arrow keys, Home and End on the focused strip. New slides (e.g. Apple Watch screens) are added as items; the counter and buttons adapt. Slides move instantly under reduced motion.

### Figure videos
Every figure video plays muted on a loop, with "Live, looping" and a Pause control in its caption (the dot is ink, grey when paused). Videos pause while off screen and resume when back in view, unless the visitor paused them. In Work, text sits on the left and the figure on the right; on phones the figure comes first.

### Navigation (masthead)
Sticky, Graphite Ground, hairline bottom rule. The name sits left in serif 600 at 1.25rem. Section links are label-size Dim Ink, 2rem apart, 2.75rem tall; hover and the current section go to Paper Ink, and the current section gets a 2px inset underline. Under 680px the links are replaced by a single Paper Ink "Contact" link.

### Links
- **Inline:** inherit colour, 1px underline in Strong Hairline at 0.22em offset; hover turns the underline Paper Ink (0.2s).
- **Link row:** label-size links in Dim Ink, 2.75rem tall; the first (Resume PDF) is Paper Ink and bold. Hover to Paper Ink.
- **Email address:** serif 600 at 1.375rem (clamp 1.5–2.25rem in the closing), 2px Dim Ink underline, wraps anywhere.
- **More link:** bold label-size underlined link closing a project or list.

### Copy control
A small text button beside the email address (2.5rem tall, 1px Ink Faint border, 2px corners, label size). Reads "Copy", becomes "Copied" for 2.4s, with a polite live-region note.

### Lists and entries
- **Role list:** unbulleted, a 0.6rem Faint Ink hairline tick at the left, Dim Ink text, 1rem apart, 60ch.
- **Tool list:** inline label-size Faint Ink terms separated by middle dots in Strong Hairline.
- **Skills / entries:** Faint Ink term labels over Paper Ink values; entries are a bold name, a Dim Ink meta line and an optional Faint Ink note.

## Do's and Don'ts

### Do:
- **Do** present every piece of work as a numbered figure with a serif caption under it, numbered in page order.
- **Do** plot the strongest quantitative result and keep its exact numbers one disclosure away.
- **Do** keep yellow for Tobias's results and blue for the baseline they beat, and name the colours in the caption so the legend is in the prose.
- **Do** rank content by size and the three ink steps (Paper, Dim, Faint) on the single graphite ground.
- **Do** separate chapters with a 1px hairline under a serif headline.
- **Do** keep every interactive target at least 2.75rem tall and give every element the 2px Paper Ink focus ring.
- **Do** honour reduced motion everywhere except Fig. 1, which keeps playing behind its visible pause control.

### Don't:
- **Don't** put content in cards, panels, tinted sections or anything with a shadow.
- **Don't** use yellow or blue for decoration, emphasis, links, hover states or status indicators.
- **Don't** set text in Strong Hairline or Hairline; Faint Ink is the dimmest text step.
- **Don't** build the split hero with pill buttons over a row of equal project cards.
- **Don't** round media frames or containers; the device radius is for phone screenshots only.
