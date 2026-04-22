import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Anurag Portfolio Website',
    category: 'Next.js',
    thumbnailUrl: '/images/works/portfolio-website.png',
    description:
      'A responsive personal portfolio built with Next.js, TypeScript, Tailwind CSS, dark mode, portfolio pages, blog notes, and a contact section.',
    images: ['/images/works/portfolio-website.png', '/images/works/work-01.png'],
    previewUrl: 'https://github.com/anuraggaur29/Anurag-Portfolio_Web',
    publishedAt: 'April 2026',
    featureList: ['Responsive layout', 'Dark mode', 'Project detail pages', 'Blog-ready content'],
    attributes: [
      { name: 'Client', value: 'Personal' },
      { name: 'Role', value: 'Design and development' },
      { name: 'Stack', value: 'Next.js, TypeScript, Tailwind CSS' },
    ],
  },
  {
    id: 2,
    title: 'Full Stack Experiments Lab',
    category: 'Web App',
    thumbnailUrl: '/images/works/project-management-system.png',
    description:
      'A structured lab of full stack experiments for practicing reusable components, form flows, API thinking, and project organization.',
    images: ['/images/works/project-management-system.png', '/images/works/work-02.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: '2026',
    featureList: ['Reusable components', 'Form-driven UI', 'Readable folder structure', 'GitHub documentation'],
    attributes: [
      { name: 'Client', value: 'Academic practice' },
      { name: 'Role', value: 'Developer' },
      { name: 'Stack', value: 'HTML, CSS, JavaScript, React' },
    ],
  },
  {
    id: 3,
    title: 'Student Dashboard Concept',
    category: 'Dashboard',
    thumbnailUrl: '/images/works/learning-management-system.png',
    description:
      'A dashboard concept for student workflows with clear navigation, progress cards, task summaries, and learning resources.',
    images: ['/images/works/learning-management-system.png', '/images/works/work-03.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: '2026',
    featureList: ['Progress overview', 'Course sections', 'Task cards', 'Mobile-friendly layout'],
    attributes: [
      { name: 'Client', value: 'Concept project' },
      { name: 'Role', value: 'Frontend developer' },
      { name: 'Stack', value: 'React, Tailwind CSS' },
    ],
  },
  {
    id: 4,
    title: 'E-Commerce Storefront',
    category: 'Frontend',
    thumbnailUrl: '/images/works/ecommerce.png',
    description:
      'A storefront interface for browsing products, comparing cards, and presenting a clean purchase journey.',
    images: ['/images/works/ecommerce.png', '/images/works/ecommerce-website-design.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: '2025',
    featureList: ['Product cards', 'Category layout', 'Responsive grid', 'Checkout-ready structure'],
    attributes: [
      { name: 'Client', value: 'Practice build' },
      { name: 'Role', value: 'Frontend developer' },
      { name: 'Stack', value: 'React, CSS, JavaScript' },
    ],
  },
  {
    id: 5,
    title: 'Task Management UI',
    category: 'Productivity',
    thumbnailUrl: '/images/works/social-media-app.png',
    description:
      'A productivity interface focused on clean task states, priority labels, and fast scanning for daily work.',
    images: ['/images/works/social-media-app.png', '/images/works/digital-marketing-app.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: '2025',
    featureList: ['Task cards', 'Status columns', 'Priority labels', 'Responsive interactions'],
    attributes: [
      { name: 'Client', value: 'Practice build' },
      { name: 'Role', value: 'UI developer' },
      { name: 'Stack', value: 'TypeScript, React' },
    ],
  },
  {
    id: 6,
    title: 'API-Ready Backend Starter',
    category: 'Backend',
    thumbnailUrl: '/images/works/erp-system.png',
    description:
      'A backend starter concept for organizing routes, models, controllers, and API documentation before connecting a frontend.',
    images: ['/images/works/erp-system.png', '/images/works/point-of-sale.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: '2025',
    featureList: ['Route planning', 'Controller structure', 'Database model outline', 'API documentation'],
    attributes: [
      { name: 'Client', value: 'Learning project' },
      { name: 'Role', value: 'Backend developer' },
      { name: 'Stack', value: 'Node.js, Express, MongoDB' },
    ],
  },
];
