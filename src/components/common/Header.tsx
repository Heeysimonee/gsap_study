import AztekaLogo from '@/assets/Azteka.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const navMap = [
  {
    name: 'About',
    link: '#azteka-about',
  },
  {
    name: 'Features',
    link: '#features',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];
gsap.registerPlugin();
export const Header = () => {
  const headerContainer = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: headerContainer });
  const handleScrollTo = contextSafe((target: string) => {
    gsap.to(window, { duration: 1, scrollTo: { y: target } });
  });
  return (
    <div
      className='w-full p-10 flex flex-col lg:flex-row gap-10 justify-center items-center relative'
      ref={headerContainer}
    >
      <img
        src={AztekaLogo}
        className='lg:absolute lg:left-10'
      />
      <div className='flex gap-10 text-stone-100 font-light text-lg'>
        {navMap.map(({ link, name }, i) => (
          <button
            className='text-white hover:text-azteka-100 hover:font-semibold transition-all duration-300'
            key={i}
            onClick={() => handleScrollTo(link)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};
