# cedarwood.studio

The Cedarwood Studio landing site. Two static pages, one stylesheet, one SVG mark, **no
JavaScript and no build step**. Served from this repository's root by GitHub Pages.

```
index.html     hero · what we do · how we work · selected work · proof · estimate
about.html     Jack Senechal, the studio's stance, and the disclosure sentence
styles.css     the whole design system (tokens, layout, both themes)
favicon.svg    the studio mark, with its own dark-mode block
og.png         1200×630 social card, rendered from the mark and the headline
robots.txt     allow all · sitemap.xml · CNAME · .nojekyll
```

## Design

**Palette** — six tokens named from cedar anatomy, defined complete in `:root` and redefined
(never inverted) for dark:

| Token | Light | Dark | Role |
|---|---|---|---|
| `--sapwood` | `#eff0ea` | `#1a1714` | page ground — a pale green-grey, biased toward the accent |
| `--bark` | `#2e2721` | `#e7e5dc` | ink |
| `--heartwood` | `#a2452f` | `#d98c72` | the one warm accent: the pith, step numbers, figures, focus ring |
| `--shadow` | `#34503f` | `#93b79d` | forest-floor green — links and interactive state |
| `--lichen` | `#62665b` | `#9fa195` | secondary text |
| `--grain` | `#c9ccbe` | `#352f28` | hairlines and the ring divider |

All text pairs clear WCAG AA on their own ground in both themes; the smallest text
(`--lichen` at 13px) sits above 5:1 in light and 6.6:1 in dark. Dark mode is handled in three
states: bare `:root` (light), `@media (prefers-color-scheme: dark)` guarded as
`:root:not([data-theme="light"])`, and `:root[data-theme="dark"]`.

**Type** — Spectral Light/Regular for display (a quiet screen serif, set light at large sizes),
IBM Plex Sans for body, IBM Plex Mono for labels, figures and repository paths. Google Fonts,
each with a real fallback stack. Five-step scale, one fluid.

**Layout** — a single 44rem column with prose held to a 35rem measure, mobile-first, square
corners throughout. The one repeated motif is the **grain rule**: three hairlines at widening
intervals, the way growth rings read outward from the pith, used once per section boundary. The
mark is the end grain of a milled cedar billet — an off-centre pith, four rings, squared off by
the saw — drawn in SVG, not sourced.

**Motion** — effectively none: a 120 ms colour transition on links and the button, plus a
`prefers-reduced-motion` block. **Accessibility** — skip link, landmarks, visible focus ring,
`aria-labelledby` on every section.

## Placeholders

Two, and only two.

1. **The estimate form.** Both calls to action are currently `mailto:hello@cedarwood.studio`
   with a prefilled subject and a three-question body. The real form arrives with the inbound
   hardening work (locomotive **#54**); until then, the markup carries a commented `HOOK` at each
   call site — replace the anchor with a `POST` form whose `action` is the **Basin** endpoint
   (recommended in `docs/design/inbound-hardening.md` §9 over Formspree, whose honeypot is
   paywalled), keep the honeypot field, and leave the copy and the one-call-to-action rule alone.

2. **DNS.** `CNAME` says `cedarwood.studio`, and `og:url`, `canonical` and `sitemap.xml` all point
   there. The record itself is Jack's step:

   ```
   CNAME   cedarwood.studio   cedarwood-studio.github.io
   ```

   …then set the custom domain in this repository's Pages settings. Putting Cloudflare in front
   instead is the other option, and the one to take if email routing for
   `hello@cedarwood.studio` moves to Cloudflare Email Routing (which requires the domain's DNS to
   be on Cloudflare). Until the record resolves, the site is live at
   <https://cedarwood-studio.github.io/studio-site/> — the canonical tag deliberately points at
   the real domain, so the preview host does not get indexed as the site.

Not placeholders, but worth knowing: **the `[JACK: approve]` item** is the single disclosure
sentence on `about.html`, marked in an HTML comment at its location. Per charter D5 it lives on
the about page only, is never volunteered as a pitch, and is answered truthfully whenever asked.

## Content provenance

Positioning and the three offers: locomotive **#32** Notes (2026-10-27). Checklist categories:
`cedarwood-studio/ci-proof`'s README, which is the published list. Selected work: the two case
studies in `ventures/marketplace/profile/case-studies/`, using only facts not marked `[JACK]`,
client unnamed, no external links (the fuller writeups are not public). About-page facts:
`ventures/marketplace/profile/jack-facts.md`. No prices appear anywhere — estimate-first is the
model, and the Project Catalog is the only place tiers exist.

## Deploying

`.github/workflows/deploy-pages.yml` uploads this directory as-is on every push to `main`. There
is nothing to build. To check a change before pushing, open `index.html` from the filesystem —
every path is relative, so it works with no server.
