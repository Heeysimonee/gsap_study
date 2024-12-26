import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Props = {
  bg?: string;
  id: string;
};
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Copy = ({ bg = 'bg-stone-100', id }: Props) => {
  const copyContainer = useRef<HTMLDivElement>(null);
  const element = `#${id} > p`;

  useGSAP(
    () => {
      gsap.to(element, {
        scrollTrigger: element, // start the animation when ".box" enters the viewport (once)
        duration: 2,
        delay: 0.5,
        opacity: 1,
      });
    },
    { scope: copyContainer }
  );
  return (
    <div
      className={`copy-box min-h-[100dvh] w-full ${bg} flex items-center justify-center`}
      ref={copyContainer}
      id={id}
    >
      <p className='text-6xl text-stone-800 w-3/5 font-clash copy-text opacity-0'>
        Azteka.ai bridges the gap between what your customers want and how your business delivers.We’re not just another
        AI tool—we’re your insider expert, always ready to guide your customers and boost your sales.
      </p>
    </div>
  );
};
