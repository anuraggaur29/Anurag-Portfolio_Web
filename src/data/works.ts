import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Problem Solving & DSA Practice',
    category: 'DSA',
    thumbnailUrl: '/images/works/project-management-system.png',
    description:
      'A continuous problem-solving track focused on Data Structures & Algorithms, OOP concepts, clean implementation, and interview-style coding practice.',
    images: ['/images/works/project-management-system.png', '/images/works/work-02.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: 'Ongoing',
    featureList: [
      'Practicing arrays, strings, hashing, recursion, stacks, queues, trees, graphs, and dynamic programming',
      'Writing clean solutions with readable naming and clear edge-case handling',
      'Strengthening time and space complexity analysis',
      'Applying problem-solving patterns to coding interview preparation',
    ],
    attributes: [
      { name: 'Focus', value: 'Data Structures & Algorithms' },
      { name: 'Languages', value: 'Python, Java' },
      { name: 'Concepts', value: 'OOP, complexity analysis, problem solving' },
    ],
  },
  {
    id: 2,
    title: 'News Authenticity Classification System',
    category: 'Machine Learning',
    thumbnailUrl: '/images/works/digital-marketing-app.png',
    description:
      'An end-to-end ML system for news authenticity classification, built on 20,000+ news samples with real-time prediction access through a Telegram chatbot.',
    images: ['/images/works/digital-marketing-app.png', '/images/works/social-media-app.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: '2026',
    featureList: [
      'Built data ingestion, preprocessing, TF-IDF feature extraction, model training, and deployment workflow',
      'Evaluated multiple algorithms and selected Logistic Regression based on performance analysis',
      'Achieved 91.2% accuracy on the classification task',
      'Deployed real-time predictions via Telegram API, reducing manual verification effort by about 70%',
      'Wrote modular Python code with clear separation of concerns for future data-source expansion',
    ],
    attributes: [
      { name: 'Stack', value: 'Python, Scikit-Learn, TF-IDF, Telegram API' },
      { name: 'Dataset', value: '20,000+ news samples' },
      { name: 'Accuracy', value: '91.2%' },
    ],
  },
  {
    id: 3,
    title: 'E-commerce Funnel & Revenue Analysis',
    category: 'Data Analysis',
    thumbnailUrl: '/images/works/ecommerce.png',
    description:
      'A Python and SQL analysis project that processed 12,500+ user sessions to understand funnel performance, retention, customer value, and revenue opportunities.',
    images: ['/images/works/ecommerce.png', '/images/works/ecommerce-website-design.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: '2026',
    featureList: [
      'Designed SQL queries with JOINs, subqueries, GROUP BY, and window functions',
      'Built Browse to Cart to Purchase funnel logic and cohort analysis',
      'Identified 38% cart drop-off and key friction points',
      'Automated AOV, retention rate, and CLV calculations with reusable Python functions',
      'Proposed optimizations projected to improve conversion rate by 8-12%',
    ],
    attributes: [
      { name: 'Stack', value: 'Python, SQL, Pandas, MySQL' },
      { name: 'Records', value: '12,500+ sessions' },
      { name: 'Impact', value: '60% faster repeated analysis' },
    ],
  },
  {
    id: 4,
    title: 'SQL Customer Purchase Behavior Analysis',
    category: 'SQL',
    thumbnailUrl: '/images/works/erp-system.png',
    description:
      'A MySQL analysis project that segmented customers by purchase behavior and surfaced revenue concentration, repeat purchase, retention, and CLV insights.',
    images: ['/images/works/erp-system.png', '/images/works/point-of-sale.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: '2025',
    featureList: [
      'Wrote multi-table JOINs, HAVING filters, and correlated subqueries',
      'Analyzed 10,000+ transactions',
      'Found the top 10% of customers contributed 55% of revenue',
      'Calculated AOV, repeat purchase frequency, retention rate, and CLV improvement insights',
    ],
    attributes: [
      { name: 'Stack', value: 'SQL, MySQL' },
      { name: 'Records', value: '10,000+ transactions' },
      { name: 'Insight', value: 'Top 10% drove 55% revenue' },
    ],
  },
  {
    id: 5,
    title: 'Academic Performance Analyzer',
    category: 'Python Automation',
    thumbnailUrl: '/images/works/learning-management-system.png',
    description:
      'A Python and Pandas automation project for processing academic records, detecting subject-level trends, and generating structured reports.',
    images: ['/images/works/learning-management-system.png', '/images/works/project-management-system.png'],
    previewUrl: 'https://github.com/anuraggaur29',
    publishedAt: '2025',
    featureList: [
      'Automated grade processing for 500+ student records',
      'Reduced manual effort by about 80%',
      'Detected subject-level performance trends',
      'Generated structured reports from clean, specification-driven scripts',
    ],
    attributes: [
      { name: 'Stack', value: 'Python, Pandas' },
      { name: 'Records', value: '500+ students' },
      { name: 'Impact', value: '80% manual effort reduction' },
    ],
  },
  {
    id: 6,
    title: 'Anurag Portfolio Website',
    category: 'Portfolio',
    thumbnailUrl: '/images/works/portfolio-website.png',
    description:
      'A responsive personal portfolio built with Next.js, TypeScript, Tailwind CSS, dark mode, project pages, blog notes, and a contact section.',
    images: ['/images/works/portfolio-website.png', '/images/works/work-01.png'],
    previewUrl: 'https://github.com/anuraggaur29/Anurag-Portfolio_Web',
    publishedAt: 'April 2026',
    featureList: ['Responsive layout', 'Dark mode', 'Project detail pages', 'Resume-driven content'],
    attributes: [
      { name: 'Client', value: 'Personal' },
      { name: 'Role', value: 'Design and development' },
      { name: 'Stack', value: 'Next.js, TypeScript, Tailwind CSS' },
    ],
  },
];
