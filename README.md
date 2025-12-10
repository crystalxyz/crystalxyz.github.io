# crystalxyz.github.io

Static personal site built with GitHub Pages (Markdown + Cayman theme) with dedicated pages for academics, highlighted projects, and blog posts.

## Structure
- `index.md` — landing page that links to your key sections.
- `academics.md` — outline degrees, research, and teaching.
- `projects.md` — spotlight projects with links and notes.
- `blog.md` — list posts or link to external writing.
- `_config.yml` — sets the site title, description, and Cayman theme.
- `Gemfile` — pins the GitHub Pages/Jekyll tooling for local preview.
- `.gitignore` — ignores Jekyll build artifacts.
- `assets/css/style.scss` — overrides the Cayman theme with a brighter gradient style.

## Usage
Edit the Markdown files directly (no HTML required) and push to GitHub Pages. Replace placeholder text with your own details and links; GitHub Pages will build the site automatically using the chosen theme.

### Local preview with GitHub Pages / Jekyll
1) Ensure Ruby and Bundler are installed (macOS: `brew install ruby` then `gem install bundler`).  
2) From this folder run `bundle install` (once) to install the `github-pages` gem set.  
3) Start the dev server: `bundle exec jekyll serve`.  
4) Open the URL shown (typically http://127.0.0.1:4000) to preview.

### Styling
- The Cayman theme handles layout; `assets/css/style.scss` imports the theme and layers custom gradients, fonts, and colors.  
- Tweak the `:root` color variables, backgrounds, and type settings in that file to further tune the vibe.

### Deploy on GitHub Pages
Push to the repository and enable GitHub Pages in repo settings, targeting the default branch (root). GitHub will build the site using the same `github-pages` configuration.
