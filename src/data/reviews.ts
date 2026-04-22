import { Review } from '@/types';

export const reviews: Review[] = [
  {
    author: {
      name: 'Clean Interfaces',
      imageUrl: '/images/avatar/avatar-1.png',
      designation: 'Frontend focus',
      company: 'React and Next.js',
    },
    comment:
      'I care about pages that feel simple to use, load quickly, and stay readable across mobile and desktop screens.',
  },
  {
    author: {
      name: 'Practical Builds',
      imageUrl: '/images/avatar/avatar-2.png',
      designation: 'Project focus',
      company: 'Full stack labs',
    },
    comment:
      'Every project is treated as a chance to practice structure, debugging, documentation, and real deployment habits.',
  },
  {
    author: {
      name: 'Reliable Growth',
      imageUrl: '/images/avatar/avatar-3.png',
      designation: 'Learning focus',
      company: 'CS fundamentals',
    },
    comment:
      'I keep strengthening the foundations: programming logic, APIs, databases, version control, and clear communication.',
  },
];
