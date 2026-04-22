import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Research Paper 1',
    publishedAt: 'Research Work',
    thumbnailUrl: '/images/posts/post-thumbnail-1.png',
    imageUrl: '/images/posts/post-01.png',
    authorName: 'Anurag',
    content: `
      <p>This section is reserved for my first research paper. I can use it to show the title, abstract, methodology, findings, tools used, and publication status.</p>
      <p>Once the paper details are final, this page can be updated with the paper PDF link, DOI, conference or journal name, and key contribution.</p>
      <blockquote>Research details coming soon.</blockquote>
    `,
  },
  {
    id: 2,
    title: 'Research Paper 2',
    publishedAt: 'Research Work',
    thumbnailUrl: '/images/posts/post-thumbnail-2.png',
    imageUrl: '/images/posts/post-02.png',
    authorName: 'Anurag',
    content: `
      <p>This section is reserved for my second research paper. It can highlight the problem statement, proposed approach, experiments, results, and future scope.</p>
      <p>I can add the final title, co-author details, publication venue, and download link when the paper is ready to share publicly.</p>
      <blockquote>Research details coming soon.</blockquote>
    `,
  },
];
