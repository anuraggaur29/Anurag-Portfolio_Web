# Anurag Portfolio Website

Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and SCSS.

## Features

- Modern portfolio homepage with sections for about, education, services, projects, and contact
- Dedicated project and research detail pages
- Embedded PDF viewer for research papers
- Responsive layout for desktop, tablet, and mobile
- Dark mode support

## Research Papers Included

- Survey On Vehicular Communication with AI/ML
- The Hidden Challenges of Generative AI Bias, Accuracy, and Ethical Concerns

Paper files are served from:

```txt
public/papers/
```

## Project Structure (Data Files)

Update profile and content here:

```txt
src/data/profile.ts
src/data/works.ts
src/data/posts.ts
src/data/educations.ts
src/data/services.ts
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Deploy on Netlify

This project is configured for Netlify using `netlify.toml` and the Next.js runtime plugin.

1. Push your latest code to GitHub.
2. In Netlify, choose **Add new site** -> **Import an existing project**.
3. Select this repository: `anuraggaur29/Anurag-Portfolio_Web`.
4. Build command: `npm run build`
5. Node version: `20` (already set in `netlify.toml`).
6. Deploy.

Important static files:

- Resume: `public/Anurag_latest_resume.pdf`
- Research papers: `public/papers/`

## License

This project is licensed under the MIT License. See `LICENSE`.
