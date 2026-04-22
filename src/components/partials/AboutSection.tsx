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
            Hi, I am {profile.name}, a full stack developer focused on building clean, responsive, and useful web
            experiences. I enjoy turning ideas into polished interfaces, connecting them with backend logic, and
            documenting projects so they are easy to understand.
          </p>
          <a className="btn mt-5" href={profile.resumeUrl}>
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Backend</h6>
              <p>78%</p>
            </div>
            <ProgressBar color="blue" progress={78} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Frontend</h6>
              <p>88%</p>
            </div>
            <ProgressBar color="amber" progress={88} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">TypeScript</h6>
              <p>76%</p>
            </div>
            <ProgressBar color="rose" progress={76} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">UI Polish</h6>
              <p>82%</p>
            </div>
            <ProgressBar color="green" progress={82} />
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="mt-1">Practice Hours</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">6+</h2>
            <p className="mt-1">Core Skills</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">2+</h2>
            <p className="mt-1">Years Learning</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
