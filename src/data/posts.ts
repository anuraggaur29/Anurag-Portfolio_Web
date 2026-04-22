import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Survey On Vehicular Communication with AI/ML',
    publishedAt: 'Research Work',
    thumbnailUrl: '/images/posts/post-thumbnail-1.png',
    imageUrl: '/images/posts/post-01.png',
    authorName: 'Anurag',
    pdfUrl: '/papers/Survey_On_Vehicular_Communication_with_AI_ML.pdf',
    content: `
      <p>This paper surveys modern vehicular communication systems and explores how AI/ML methods can improve routing, safety, reliability, and real-time decision making in intelligent transport networks.</p>
      <p>
        <a href="/papers/Survey_On_Vehicular_Communication_with_AI_ML.pdf" target="_blank" rel="noopener noreferrer">
          Open Research Paper (PDF)
        </a>
      </p>
    `,
  },
  {
    id: 2,
    title: 'The Hidden Challenges of Generative AI Bias, Accuracy, and Ethical Concerns',
    publishedAt: 'Research Work',
    thumbnailUrl: '/images/posts/post-thumbnail-2.png',
    imageUrl: '/images/posts/post-02.png',
    authorName: 'Anurag',
    pdfUrl: '/papers/hidden-challenges-generative-ai-bias-accuracy-ethical-concerns.pdf',
    content: `
      <p>This paper discusses key limitations in generative AI systems, including bias propagation, factual inaccuracies, transparency issues, and the broader ethical implications of real-world deployment.</p>
      <p>
        <a href="/papers/hidden-challenges-generative-ai-bias-accuracy-ethical-concerns.pdf" target="_blank" rel="noopener noreferrer">
          Open Research Paper (PDF)
        </a>
      </p>
    `,
  },
];
