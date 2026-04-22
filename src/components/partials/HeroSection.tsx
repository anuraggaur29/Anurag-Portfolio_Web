import { profile } from '@/data/profile';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  const roles = useMemo(() => ['Full Stack Developer', 'AI & ML Student', 'Data Analyst', 'Problem Solver'], []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentRole = roles[roleIndex];

  useEffect(() => {
    const delay = isDeleting ? 35 : 70;
    const pause = visibleLetters === currentRole.length && !isDeleting ? 1200 : delay;
    const timeout = window.setTimeout(() => {
      if (!isDeleting && visibleLetters < currentRole.length) {
        setVisibleLetters((count) => count + 1);
        return;
      }

      if (!isDeleting && visibleLetters === currentRole.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && visibleLetters > 0) {
        setVisibleLetters((count) => count - 1);
        return;
      }

      setIsDeleting(false);
      setRoleIndex((index) => (index + 1) % roles.length);
    }, pause);

    return () => window.clearTimeout(timeout);
  }, [currentRole, isDeleting, roles.length, visibleLetters]);

  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/man.png" width={180} height={180} alt={profile.name} />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">{profile.name}</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a{' '}
          <span className="min-w-[10rem] text-primary-500">
            {currentRole.slice(0, visibleLetters)}
            <span aria-hidden="true">|</span>
          </span>
        </div>
        <div className="mt-4 flex gap-5">
          <Link legacyBehavior href={profile.linkedin}>
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500" aria-label="LinkedIn">
              <FiLinkedin size={25} />
            </a>
          </Link>
          <Link legacyBehavior href={`mailto:${profile.email}`}>
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500" aria-label="Email">
              <FiMail size={25} />
            </a>
          </Link>
          <Link legacyBehavior href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500" aria-label="Phone">
              <FiPhone size={25} />
            </a>
          </Link>
          <Link legacyBehavior href={profile.github}>
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500" aria-label="GitHub">
              <FiGithub size={25} />
            </a>
          </Link>
        </div>
        <Link legacyBehavior href="/contact">
          <a className="btn mt-5 px-8">Hire Me</a>
        </Link>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
