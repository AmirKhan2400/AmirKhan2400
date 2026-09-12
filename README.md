# AmirHossein Dourodian — personal portfolio

A static, responsive Noir Sidebar portfolio built with React, TypeScript, Vite, plain CSS, and Lucide React. No backend or client-side router is needed.

## Develop

Use Node.js 22 LTS and npm.

```sh
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The build runs strict TypeScript checks and produces the static site in `dist/`.

## Edit content

| Content                                                        | File                      |
| -------------------------------------------------------------- | ------------------------- |
| Name, title, social links, photo                               | `src/data/profile.ts`     |
| Projects, technology lists, repository and optional demo links | `src/data/projects.ts`    |
| Experience entries                                             | `src/data/experience.ts`  |
| Skill groups                                                   | `src/data/skills.ts`      |
| Intro copy                                                     | `src/components/Hero.tsx` |
| Colors, typography, spacing, responsive rules                  | `src/styles/global.css`   |

Before publishing your final portfolio:

- Email and LinkedIn are configured in `profile.ts`; edit them there if they change.
- The primary "Let's work together" button opens an email to the address in `profile.ts`.
- Your sidebar photo is `public/profile.jpg`. Replace that file to update it.
- Optionally add project screenshots to `public/` and set each project's `image` to its relative filename. Built-in concept previews are illustrative placeholders, not screenshots.
- Neuroland uses the supplied Google Play developer link. Optional project `github` and `demo` URLs can be added in `projects.ts`.

Use public asset filenames without a leading slash. Components prefix them with Vite's base URL for compatibility with repository subpaths.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example `AmirKhan2400.github.io`) and push this project to its `main` branch, including `package-lock.json`.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
3. Push to `main`, or run **Deploy portfolio to GitHub Pages** manually from the Actions tab.

The workflow installs the locked dependencies, typechecks, builds, uploads only `dist/`, and deploys using GitHub's official Pages actions. The deployment job reports the published URL.

`base: './'` in `vite.config.ts` supports both `https://AmirKhan2400.github.io/` and `https://AmirKhan2400.github.io/repository-name/`. Section navigation uses URL hashes, so no SPA rewrite or 404 workaround is needed. If your default branch has another name, update the workflow's branch filter.

Google Fonts supplies DM Sans and Manrope, with local sans-serif fallbacks. All other runtime assets are served from the static build. Motion respects the visitor's reduced-motion setting.

Workflow reference: [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
