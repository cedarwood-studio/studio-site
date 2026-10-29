# cedarwood.studio

The Cedarwood Studio holding page. One static page, one stylesheet, one SVG mark, **no
JavaScript and no build step**. Served from this repository's root by GitHub Pages.

```
index.html     wordmark, one factual line, one contact line, footer
styles.css     the design system (tokens, layout, both themes)
favicon.svg    the studio mark, with its own dark-mode block
og.png         1200×630 social card, rendered from the mark and the headline
robots.txt     allow all · sitemap.xml · CNAME · .nojekyll
```

## Why this is a holding page

Jack (2026-10-29): the site's prior content, a full pitch with a services list, a five-step
process, published checklists, a two-case-study portfolio, and a proof section, promised things
the studio was not ready to stand behind, and some of it used the AI-driven language the voice
rule bans. Instruction was to nuke the content and keep only enough to show the studio is real
and owns its domain: no services, no process, no portfolio, no proof, no estimate form, no claims
about speed, quality, reliability, or delivery. `about.html` is deleted along with it; the
disclosure sentence it carried has no home until there is a real about page to carry it. The
portfolio and the fuller pitch return later, deliberately, once there is something true to put on
them.

## Design

**Palette** — six tokens named from cedar anatomy, defined complete in `:root` and redefined
(never inverted) for dark. `--panel` is kept in the tokens, unused on this page, for when a
portfolio page returns:

| Token | Light | Dark | Role |
|---|---|---|---|
| `--sapwood` | `#eff0ea` | `#1a1714` | page ground — a pale green-grey, biased toward the accent |
| `--bark` | `#2e2721` | `#e7e5dc` | ink |
| `--heartwood` | `#a2452f` | `#d98c72` | the one warm accent: the pith, focus ring, link hover |
| `--shadow` | `#34503f` | `#93b79d` | forest-floor green — links and interactive state |
| `--lichen` | `#62665b` | `#9fa195` | secondary text |
| `--grain` | `#c9ccbe` | `#352f28` | hairlines (the footer rule) |

All text pairs clear WCAG AA on their own ground in both themes; the smallest text
(`--lichen` at 13px) sits above 5:1 in light and 6.6:1 in dark. Dark mode is handled in three
states: bare `:root` (light), `@media (prefers-color-scheme: dark)` guarded as
`:root:not([data-theme="light"])`, and `:root[data-theme="dark"]`.

**Type** — Spectral Light/Regular for display (a quiet screen serif, set light at large sizes),
IBM Plex Sans for body. IBM Plex Mono (labels, figures, repository paths) is still a token
(`--font-mono`) but nothing on this page uses it, so its font file is not loaded; it comes back
with the content that needs it. Five-step scale, one fluid.

**Layout** — a single 44rem column, mobile-first, square corners throughout. The mark is the end
grain of a milled cedar billet, an off-centre pith, four rings, squared off by the saw, drawn in
SVG, not sourced.

**Motion** — effectively none: a 120 ms colour transition on links, plus a
`prefers-reduced-motion` block. **Accessibility** — skip link, landmarks, visible focus ring.

## Content

Everything visible, verbatim:

- Wordmark: "Cedarwood Studio"
- One line: "A software and infrastructure studio. Jack Senechal, principal. California."
- One contact line: `hello@cedarwood.studio` (`mailto:`)
- Footer: "© 2026 Cedarwood Studio"

Nothing else. No contact form; the plain `mailto:` link is enough until there is a reason to add
one. No separate about page, no portfolio, no pricing, no process.

## DNS

`CNAME` says `cedarwood.studio`, and `og:url`, `canonical`, and `sitemap.xml` all point there. The
record itself is Jack's step:

```
CNAME   cedarwood.studio   cedarwood-studio.github.io
```

…then set the custom domain in this repository's Pages settings. Putting Cloudflare in front
instead is the other option, and the one to take if email routing for `hello@cedarwood.studio`
moves to Cloudflare Email Routing (which requires the domain's DNS to be on Cloudflare). Until the
record resolves, the site is live at <https://cedarwood-studio.github.io/studio-site/>, the
canonical tag deliberately points at the real domain, so the preview host does not get indexed as
the site.

## Deploying

`.github/workflows/deploy-pages.yml` uploads this directory as-is on every push to `main`. There
is nothing to build. To check a change before pushing, open `index.html` from the filesystem,
every path is relative, so it works with no server.
