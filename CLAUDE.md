@AGENTS.md
@DESIGN.md

## UI / Design Rules

This project follows the Apple design language defined in `DESIGN.md`. Whenever you build or modify UI:

1. **Read DESIGN.md first.** Reference its color tokens, typography tokens, components, and Do's/Don'ts.
2. **Use the design tokens defined in `app/globals.css` `@theme` block** — never inline hex. Use `bg-primary`, `text-ink`, `bg-parchment`, etc.
3. **Single accent color.** Every interactive element uses Action Blue (`bg-primary` / `text-primary`). No second accent.
4. **Pill CTAs.** Primary buttons are full pill (`rounded-full`) — the signature Apple action shape.
5. **Tile rhythm.** Full-page sections are edge-to-edge tiles (alternating `canvas` / `parchment` / `tile-1` dark). Color change IS the divider — no borders/shadows between sections.
6. **Typography.**
   - Headlines: weight 600 (NOT 700) with negative letter-spacing (`tracking-tight` or tighter at display sizes).
   - Body: 17px / weight 400 (NOT 16px). Use `text-[17px]`.
   - Weight ladder is 300 / 400 / 600 / 700 — weight 500 is deliberately absent.
7. **Single shadow.** The only drop-shadow allowed is on photographic product imagery. UI cards/buttons have NO shadow.
8. **Active state.** All buttons use `active:scale-95` transition.
9. **Korean/Japanese fonts.** Korean text uses Noto Sans KR (default). Japanese characters (kana/kanji) use `.font-jp` class (Noto Sans JP). Latin falls through to `system-ui` which resolves to SF Pro on macOS/iOS.
10. **Don't add gradients, decorative borders, or non-product shadows.** When you need emphasis: switch the surface (light → dark tile) instead of adding chrome.
11. **Responsive is mandatory, mobile-first.** Every page must work on a 360px phone up to a 1440px+ desktop. Follow DESIGN.md "Responsive Behavior" breakpoints. Tailwind mapping:
    - default (mobile, <640px) → small/phone scale
    - `sm:` (640px+) → large phone
    - `md:` (768px+) → tablet
    - `lg:` (1024px+) → desktop
    - Typography scales (approximate Apple ladder): hero-display 28→34→40→56px across mobile→sm→md→lg. Tile headlines 34→40px (mobile→md). Section padding 48→64→80px (mobile→md→lg).
    - Touch targets ≥ 44×44px. Pill CTA padding never goes below `py-3 px-5` on mobile.
    - Never assume desktop layout; always test the mobile breakpoint mentally before finishing a component.
