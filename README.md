# Hive UI

Framework agnostic UI library.

### Color Shades:

| Step | Name          | Role                                      | Category       |
|------|---------------|-------------------------------------------|----------------|
| 1    | Base          | App background                            | Backgrounds    |
| 2    | BG Subtle     | Subtle background                         | Backgrounds    |
| 3    | BG            | Component background                      | Interactive bg |
| 4    | BG Hover      | Component background — hover              | Interactive bg |
| 5    | BG Active     | Component background — active/selected    | Interactive bg |
| 6    | Line          | Subtle border / divider (non-interactive) | Borders        |
| 7    | Border        | Default border (interactive elements)     | Borders        |
| 8    | Border Hover  | Hover border / focus ring base            | Borders        |
| 9    | Solid         | Solid background                          | Solid fills    |
| 10   | Solid Hover   | Solid background — hover                  | Solid fills    |
| 11   | Text          | Low-contrast text (AA)                    | Text           |
| 12   | Text Contrast | High-contrast text (AAA)                  | Text           |

---

## Step-by-Step Guide

### Step 1 — App Background
The base page/app background when tinted by this color.
- Rarely used directly except for a themed page/section (e.g. a full "danger zone" page background)
- **Contrast target:** none — it's a background, not meant to hold text directly

### Step 2 — Subtle Background
A gentle tinted surface, one level up from the page background.
- Alert/banner backgrounds
- Card or panel background (for gray: default card bg)
- Sidebar background (gray)

### Step 3 — Component Background
Default background for a colored interactive component at rest.
- Subtle button / tag / chip background
- Input field background (gray)
- Toast/alert body background
- Code block background (gray)

### Step 4 — Component Background (Hover)
Hover state for anything using step 3.
- Hover bg for subtle buttons, tags, ghost buttons
- Table row hover, list item hover (gray)

### Step 5 — Component Background (Active)
Pressed/active/selected state, one step darker than hover.
- Active/pressed bg for subtle buttons
- Selected row or list item background
- Selection highlight (`::selection`)

### Step 6 — Subtle Border (Non-Interactive)
Borders and dividers that aren't meant to draw attention or respond to interaction.
- Dividers inside a themed card
- Default separators (gray)
- Non-interactive card borders

### Step 7 — Default Border (Interactive)
The standard border for interactive elements at rest.
- Input, button, dropdown, card borders
- Default border for inputs (gray) — your everyday border color
- Unchecked checkbox/radio border (gray)

### Step 8 — Border Hover / Focus Base
Hover or focus state for step-7 borders.
- Input border on hover/focus
- Focus ring base color (often layered with alpha/glow)
- Hover border on cards, dropdowns

### Step 9 — Solid Fill
The strongest, most saturated step — your color's "signature" shade.
- Solid button background (primary CTA, destructive "Delete" button)
- Badge/chip solid variant
- Checked checkbox/radio/switch background
- Active nav item background
- Progress bar fill
- Chart/data-viz series color

### Step 10 — Solid Fill (Hover)
Hover state for anything using step 9.
- Hover on solid/primary buttons
- Hover on destructive buttons

### Step 11 — Low-Contrast Text (AA)
Meets WCAG AA (~4.5:1) against steps 1–2. Use for secondary/muted content.
- Secondary or muted text
- Placeholder text, helper text, captions, timestamps
- Icon default color
- Error/warning message text below a field
- Default link color (in text-heavy contexts)

### Step 12 — High-Contrast Text (AAA)
Meets WCAG AAA (~7:1) against steps 1–2. Use for primary/critical text.
- Headings and primary body text
- High-emphasis labels
- Link hover/visited state
- Anywhere AAA compliance is required

---

## Cross-Cutting Scenarios (not tied to a single step)

| Scenario                 | Recommended tokens                                                                       |
|--------------------------|------------------------------------------------------------------------------------------|
| Focus ring               | Step 8 (or 7/8 for error states on invalid fields), often with alpha glow layered on top |
| Colored shadow/glow      | Alpha version of step 9 (e.g. `--primary-a9`)                                            |
| Overlay / modal backdrop | **Not** from this scale — use `blackA` / `whiteA` alpha scale instead                    |
| Skeleton loading         | Gray steps 3–4, animated between them                                                    |
| Scrollbar                | Gray step 6 (track), gray step 8 (thumb)                                                 |
| Disabled state           | Gray steps 3–4 (bg), gray step 8–9 (border/text), reduced opacity optional               |
| Soft badge/tag           | bg step 3 + text step 11 + border step 6–7                                               |
| Solid badge/tag          | bg step 9 + white/contrast text                                                          |

---

## Acknowledgements

This project uses [Radix Colors](https://www.radix-ui.com/colors) by [WorkOS](https://workos.com) for its color system.
