import { profile } from '@/data/profile';
import ProgressBar from '@/components/shared/ProgressBar';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        <div className="">
          <p className="text-justify">
            Hi, I am {profile.name}, a Computer Science undergraduate specializing in AI & ML. I build end-to-end
            solutions across Python, SQL, data analysis, and machine learning, with a focus on clean code, strong
            problem solving, and practical deployments.
          </p>
          <a className="btn mt-5" href={profile.resumeUrl}>
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Python</h6>
              <p>88%</p>
            </div>
            <ProgressBar color="blue" progress={88} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">SQL</h6>
              <p>84%</p>
            </div>
            <ProgressBar color="amber" progress={84} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">ML</h6>
              <p>82%</p>
            </div>
            <ProgressBar color="rose" progress={82} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">DSA</h6>
              <p>80%</p>
            </div>
            <ProgressBar color="green" progress={80} />
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">20k+</h2>
            <p className="mt-1">News Samples</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">91.2%</h2>
            <p className="mt-1">ML Accuracy</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">12.5k+</h2>
            <p className="mt-1">Sessions Analyzed</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">8.1</h2>
            <p className="mt-1">Current CGPA</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Skills Summary</h3>
          <div className="mt-4 space-y-3 text-sm leading-6 text-gray-500 dark:text-gray-200">
            <p>
              <span className="font-semibold text-gray-700 dark:text-gray-100">Languages:</span>{' '}
              {profile.skills.languages.join(', ')}
            </p>
            <p>
              <span className="font-semibold text-gray-700 dark:text-gray-100">Libraries:</span>{' '}
              {profile.skills.libraries.join(', ')}
            </p>
            <p>
              <span className="font-semibold text-gray-700 dark:text-gray-100">Databases:</span>{' '}
              {profile.skills.databases.join(', ')}
            </p>
            <p>
              <span className="font-semibold text-gray-700 dark:text-gray-100">Tools:</span>{' '}
              {profile.skills.tools.join(', ')}
            </p>
            <p>
              <span className="font-semibold text-gray-700 dark:text-gray-100">Core Concepts:</span>{' '}
              {profile.skills.concepts.join(', ')}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-500 dark:text-gray-200">
            {profile.certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
