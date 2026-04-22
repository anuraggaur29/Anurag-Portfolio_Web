# Anurag Gaur Portfolio

A responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and SCSS. It is adapted from the MIT-licensed Pofology template from `mostafizurhimself/getprofile`.

## Features

- Home page with animated hero section
- About, skills, education, experience, services, projects, blog notes, and contact sections
- Project detail pages
- Blog detail pages
- Dark mode toggle
- Mobile responsive navigation

## Customize

Update the main profile details in:

```txt
src/data/profile.ts
```

Update portfolio content in:

```txt
src/data/works.ts
src/data/posts.ts
src/data/experiences.ts
src/data/educations.ts
src/data/services.ts
src/data/reviews.ts
```

Add a real resume file to `public/` and update `resumeUrl` in `src/data/profile.ts`.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## License

This project includes code adapted from Pofology, licensed under the MIT License. See `LICENSE`.
