import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import LinkedIn from "@/assets/icons/linkedin.svg"
import RSS from "@/assets/icons/rss.svg"

export const SITE = {
  title: "Crystal Zhou",
  description:
    "Personal site of Crystal Zhou (周晓玥) — software engineer working on ML infrastructure and inference systems.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

export const GITHUB_USERNAME = "crystalxyz"

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/crystalxyz", label: "GitHub", icon: GitHub },
  {
    href: "https://www.linkedin.com/in/crystal-xyz/",
    label: "LinkedIn",
    icon: LinkedIn,
  },
  { href: "mailto:crystal.zhou720@gmail.com", label: "Email", icon: Email },
  { href: "/rss.xml", label: "RSS", icon: RSS },
]

// Repo(s) featured under "My project" on the homepage. `description` is a
// fallback — the live GitHub description is preferred when available (fetched
// at build time). Add more entries here and the grid expands automatically.
export const PINNED_PROJECTS: { repo: string; description?: string }[] = [
  {
    repo: "harbor-framework/harbor",
    description:
      "Evaluation harness for agentic, terminal-based tasks (Terminal-Bench).",
  },
  {
    repo: "apache/datafusion",
    description:
      "Fast, extensible query engine for building data systems in Rust (Apache Arrow).",
  },
]
