import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: 1,
    title: 'How I approach a new web project',
    publishedAt: 'April 2026',
    thumbnailUrl: '/images/posts/post-thumbnail-1.png',
    imageUrl: '/images/posts/post-01.png',
    authorName: 'Anurag Gaur',
    content: `
      <p>I start by understanding the goal of the page, the users who will visit it, and the actions they should be able to complete without friction.</p>
      <p>After that, I break the project into layout, components, data, states, and deployment. This keeps the work clear and makes it easier to debug.</p>
      <blockquote>Good projects are easier to improve when the first version is organized.</blockquote>
      <p>For portfolio work, I focus on responsive design, readable code, meaningful project descriptions, and simple deployment instructions.</p>
    `,
  },
  {
    id: 2,
    title: 'What I am learning in full stack development',
    publishedAt: 'March 2026',
    thumbnailUrl: '/images/posts/post-thumbnail-2.png',
    imageUrl: '/images/posts/post-02.png',
    authorName: 'Anurag Gaur',
    content: `
      <p>My current focus is strengthening the connection between frontend interfaces and backend services.</p>
      <p>On the frontend, I practice React, Next.js, TypeScript, component structure, and Tailwind CSS. On the backend, I work with REST APIs, routing, models, authentication ideas, and database basics.</p>
      <blockquote>The goal is to build projects that are not only visible, but understandable.</blockquote>
      <p>I also keep improving Git workflow, documentation, and deployment so each project is ready to share.</p>
    `,
  },
  {
    id: 3,
    title: 'Why clean portfolio projects matter',
    publishedAt: 'February 2026',
    thumbnailUrl: '/images/posts/post-thumbnail-3.png',
    imageUrl: '/images/posts/post-03.png',
    authorName: 'Anurag Gaur',
    content: `
      <p>A portfolio is more than a list of screenshots. It should explain the problem, the role, the stack, and the choices made during development.</p>
      <p>Clean project pages help visitors understand the thinking behind the work and make the developer easier to evaluate.</p>
      <blockquote>Clear work builds trust faster than vague claims.</blockquote>
      <p>That is why I document features, tools, challenges, and next improvements for every serious project I build.</p>
    `,
  },
];
