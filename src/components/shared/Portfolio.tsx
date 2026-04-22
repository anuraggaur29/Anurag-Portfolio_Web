import React from 'react';
import styles from '@/styles/modules/Portfolio.module.scss';
import Link from 'next/link';
import { FiLink as LinkIcon } from 'react-icons/fi';
import { UrlObject } from 'url';
import classNames from 'classnames';

type Props = {
  category: string;
  title: string;
  href: string | UrlObject;
};

const Portfolio = ({ category, title, href }: Props) => {
  return (
    <div className={classNames(styles['portfolio'], 'bg-white dark:bg-gray-700')}>
      <div className={styles['portfolio-content']}>
        <span className={styles['portfolio-category']}>{category}</span>
        <Link legacyBehavior href={href}>
          <a className={styles['portfolio-title']}>{title}</a>
        </Link>
        <Link legacyBehavior href={href}>
          <a className={styles['portfolio-link']}>
            <LinkIcon className="h-5 text-white" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
