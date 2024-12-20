import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import AztekaLogo from '../assets/Azteka.svg';

gsap.registerPlugin(useGSAP, TextPlugin);

export const Landing = () => {
  const container = useRef<HTMLDivElement>(null);
  const replace = 'What do you need today?'.split('').map((char) => (char === ' ' ? '\u00A0' : char));
  const original = '!@#$%^&*()_+-=[]{}|;:%^'.split('');
  const dur = 0.5;
  const hold = 4;
  console.log(replace.length);
  console.log(original.length);

  const { contextSafe } = useGSAP(
    () => {
      const targets = gsap.utils.toArray('.letter');
      console.log(targets);
      targets.forEach((obj, i) => {
        let tl = gsap.timeline({
          delay: 0.05 * i,
          repeat: -1,
          repeatDelay: (targets.length - 1) * (dur + hold) - dur,
          defaults: {
            ease: 'none',
            duration: dur,
          },
        });
        console.log(replace[i]);
        // tl.from(obj, { opacity: 0 });
        // tl.to(obj, { opacity: 1 });
        tl.to(obj, { delay: 0.5, text: { value: replace[i] } });
      });
    },
    { scope: container }
  );

  return (
    <div
      className='h-screen w-full items-center flex flex-col gap-5 bg-azteka-green-200'
      ref={container}
    >
      <div className=' w-full px-10 py-20 flex justify-center items-center relative'>
        <img
          src={AztekaLogo}
          className='absolute left-10'
        />
        <div className='flex gap-2 text-white'>
          <button className='text-white'>About</button>
          <button className='text-white'>Features</button>
          <button className='text-white'>Contact</button>
        </div>
      </div>
      <div
        className='text-8xl text-azteka-green-100 w-full justify-center font-clash font-bold flex flex-wrap'
        id='scramble'
      >
        {original.map((el, i) => (
          <div
            key={i}
            className={`letter pointer-events-none inline-block whitespace-pre`}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};
