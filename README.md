# studio.jacksenechal.com — sales page (v1)

Static site: plain HTML + one CSS file + a few lines of vanilla JS, no build step, no framework.
Lives here in the monorepo as `ventures/marketplace/site/`; deployed as its own GitHub repo
(`locomotive-brain/studio-site` for now, transferring to Jack's account later, same as
`ci-proof`) so GitHub Pages can serve it directly from repo root.

## Deploying

This directory *is* the Pages site root. `.github/workflows/deploy-pages.yml` deploys on every
push to `main` via the standard `actions/{configure-pages,upload-pages-artifact,deploy-pages}`
flow — no build step, it just uploads the directory as-is.

To stand up a fresh copy of this as its own repo:

```
gh repo create <owner>/<repo> --public --source ventures/marketplace/site --push
gh api -X POST repos/<owner>/<repo>/pages -f build_type=workflow
```

Then confirm the Pages URL (`https://<owner>.github.io/<repo>/`) returns 200 once the deploy
workflow finishes.

## The three placeholders

All three live in `config.js`, documented inline there. One edit each, nothing else in
`index.html` or `app.js` needs to change:

1. **Stripe Payment Links** (`stripeLinks.basic/standard/premium`) — create one Payment Link per
   tier ($400/$900/$2,200) in the Stripe account from issue #51 (restricted API key stored in
   Bitwarden as `STRIPE_RESTRICTED_KEY`). Use test-mode links until a real purchase needs to
   complete; swap to live links before announcing the page anywhere real.
2. **Form endpoint** (`formEndpoint`) — see "Form endpoint" below.
3. **Contact email** (`contactEmail`) — the real brain-facing address lands via issue #52. Until
   then this intentionally renders as a non-working `hello@PLACEHOLDER` rather than a guess.

## Form endpoint

The estimate form POSTs to whatever `config.js`'s `formEndpoint` names. Two options:

- **(a) Formspree-style, no backend (current placeholder).** Create a Formspree form, point
  `formEndpoint` at `https://formspree.io/f/<form-id>`, and set the form's notification address
  to the real inbox once #52 lands. Netlify Forms works the same way if the site ever moves to
  Netlify hosting instead of Pages — same `action` + `name` attributes, no JS change needed.
- **(b) The brain's own intake endpoint (later).** Once the brain exposes an HTTP endpoint that
  can receive Stage 1 intake directly (`ventures/marketplace/RUNBOOK.md` Stage 1), point
  `formEndpoint` at that instead and the three-questions-within-the-hour loop closes without a
  third-party form service in between.

The form also carries a honeypot field (`#company`, visually hidden and out of tab order) — any
submission with that field filled is spam and should be discarded by whichever endpoint receives
it.

## DNS (Jack's step)

Once the real repo exists under Jack's account and Pages is enabled with the custom domain, add:

```
CNAME   studio   <owner>.github.io
```

The `CNAME` file in this directory already says `studio.jacksenechal.com` — GitHub Pages reads
that automatically once the DNS record resolves and the custom domain is set in the repo's Pages
settings. This v1 deploy does **not** set the custom domain via the API; the `CNAME` file is
enough preparation, DNS and the Pages-settings custom-domain field are Jack's to finish.

## Content sources

Tier pricing/scope: `ventures/marketplace/profile/upwork-catalog-listing.md`. Checklist
categories: `ventures/marketplace/templates/ci-proof/README.md`. Disclosure sentence: verbatim
from `ventures/marketplace/profile/upwork-profile-draft.md` / `RUNBOOK.md` ground rules. Site
stays off jacksenechal.com's main nav per `brain/memory/site-positioning.md` — it's a separate,
findable subdomain, not an unlinked landing page, since this is the sales page itself rather than
an Upwork-only portfolio link.
