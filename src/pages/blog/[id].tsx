import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import { Post } from '@/types';
import { GetServerSideProps } from 'next';
import { posts } from '@/data/posts';

type Props = {
  post: Post;
};

const BlogSingle: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <AppLayout title="Research">
      <div className="container mb-10">
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{post.title}</h1>
          <p className="mt-4 flex items-center text-gray-400">
            <span>{post.publishedAt}</span>
            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span>{post.authorName}</span>
          </p>
        </div>
        <div>
          <section className="mt-10">
            <h2 className="text-xl font-semibold sm:text-2xl">Read Full Paper</h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
              <iframe
                src={post.pdfUrl}
                title={`${post.title} PDF`}
                className="h-[75vh] w-full"
              ></iframe>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              If the viewer does not load,{' '}
              <a
                className="font-medium text-primary-500 hover:underline"
                href={post.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                open the PDF in a new tab
              </a>
              .
            </p>
          </section>
          <article
            className="prose mt-10 max-w-full dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></article>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const post = posts.find((post) => post.id === Number(id));
  if (post) {
    return {
      props: {
        post,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default BlogSingle;
