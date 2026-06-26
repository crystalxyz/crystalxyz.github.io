# crystalxyz.github.io

## Tech

- **Astro** (static output) — no UI/CSS framework, native CSS design system
- **Bun** as the package manager / runner
- Content collections for **blog**, **projects**, and **authors**
- Build-time **GitHub contributions calendar** (no API key)
- Deployed to **GitHub Pages** via GitHub Actions

## Develop

```bash
bun install        # install dependencies
bun dev            # local dev server (http://localhost:4321)
bun run build      # production build to dist/
bun run preview    # preview the production build
```

## Editing content

- **Site config / nav / socials:** `src/consts.ts`
- **Theme & accent colors:** `src/styles/color.css` (`--ember-*`, `--accent`)
- **Homepage (hero + GitHub calendar + latest posts):** `src/pages/index.astro`
- **About page:** `src/pages/about.astro`
- **Author profile:** `src/content/authors/crystal.md`
- **Blog posts:** `src/content/blog/<slug>/index.md`
- **Projects:** `src/content/projects/<slug>.md`

Blog post frontmatter requires `title`, `description`, `date`, and `authors`
(a reference to a file in `src/content/authors/`). Projects require `name`,
`description`, and `link`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Bun
and publishes `dist/` to GitHub Pages.

> **One-time setup:** in the repo, go to **Settings → Pages → Build and
> deployment → Source** and select **GitHub Actions** (the repo previously used
> the legacy Jekyll branch build).

## Credits

Template: [astro-erudite](https://github.com/jktrn/astro-erudite) by
[jktrn / enscribe](https://enscribe.dev) (MIT — see `LICENSE`).
