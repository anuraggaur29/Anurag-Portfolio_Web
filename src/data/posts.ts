import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Building an end-to-end ML classification pipeline',
    publishedAt: 'April 2026',
    thumbnailUrl: '/images/posts/post-thumbnail-1.png',
    imageUrl: '/images/posts/post-01.png',
    authorName: 'Anurag',
    content: `
      <p>My news authenticity project follows the full machine learning lifecycle: data ingestion, preprocessing, TF-IDF feature extraction, training, evaluation, and deployment.</p>
      <p>I compared multiple classification algorithms and selected Logistic Regression based on performance analysis, reaching 91.2% accuracy on 20,000+ news samples.</p>
      <blockquote>The strongest ML projects are useful beyond the notebook.</blockquote>
      <p>That is why I connected the model to a Telegram chatbot so non-technical users could get real-time predictions without manually checking every article.</p>
    `,
  },
  {
    id: 2,
    title: 'Using SQL and Python to understand revenue funnels',
    publishedAt: 'March 2026',
    thumbnailUrl: '/images/posts/post-thumbnail-2.png',
    imageUrl: '/images/posts/post-02.png',
    authorName: 'Anurag',
    content: `
      <p>For funnel analysis, I combine SQL for efficient data slicing with Python for reusable metric calculations and reporting.</p>
      <p>In the e-commerce analysis project, I processed 12,500+ user sessions, created Browse to Cart to Purchase logic, and identified a 38% cart drop-off.</p>
      <blockquote>Good analysis should lead to a decision, not just a chart.</blockquote>
      <p>The final recommendations were projected to improve conversion rate by 8-12%, connecting data work directly to business impact.</p>
    `,
  },
  {
    id: 3,
    title: 'Why clean automation matters in analytics',
    publishedAt: 'February 2026',
    thumbnailUrl: '/images/posts/post-thumbnail-3.png',
    imageUrl: '/images/posts/post-03.png',
    authorName: 'Anurag',
    content: `
      <p>Automation is valuable when it turns repetitive manual work into reliable scripts that can be reused and extended.</p>
      <p>In my Academic Performance Analyzer, I used Python and Pandas to process 500+ student records and generate structured reports.</p>
      <blockquote>Clean scripts make repeated work faster, safer, and easier to explain.</blockquote>
      <p>The project reduced manual effort by about 80% while surfacing subject-level performance trends.</p>
    `,
  },
];
