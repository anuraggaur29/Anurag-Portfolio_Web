import { Review } from '@/types';

export const reviews: Review[] = [
  {
    author: {
      name: 'Analytical Builder',
      imageUrl: '/images/avatar/avatar-1.png',
      designation: 'Data and ML focus',
      company: 'Python, SQL, Scikit-Learn',
    },
    comment:
      'I like building complete workflows, from raw data and features to model evaluation, insights, and usable deployment.',
  },
  {
    author: {
      name: 'Clean Coder',
      imageUrl: '/images/avatar/avatar-2.png',
      designation: 'Engineering focus',
      company: 'DSA, OOP, modular code',
    },
    comment:
      'I care about writing clean, efficient code from specifications with clear function boundaries and reusable logic.',
  },
  {
    author: {
      name: 'High Ownership',
      imageUrl: '/images/avatar/avatar-3.png',
      designation: 'Project focus',
      company: 'End-to-end delivery',
    },
    comment:
      'I take projects from problem identification to data-backed recommendations, reports, and deployable solutions.',
  },
];
