import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import AVector from '@/assets/AVector.svg';
import { Header } from '../common/Header';
import { DemoImageContainer } from './DemoImageContainer';
import { ScrambleText } from './ScrambleText';
import { Button } from '../common/Button';

gsap.registerPlugin(useGSAP, TextPlugin);
const line1 = 'What do you'.split('').map((char) => (char === ' ' ? '\u00A0' : char));
const line2 = 'need today?'.split('').map((char) => (char === ' ' ? '\u00A0' : char));
const newTest = [...line1, ...line2];
const originalLine1 = '!@#$%^&*()!'.split('');
const originalLine2 = '_+-=[]{}|;:'.split('');

export const Landing = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targetsLine1 = gsap.utils.toArray('.letter-line1') as HTMLDivElement[];
      const targetsLine2 = gsap.utils.toArray('.letter-line2') as HTMLDivElement[];
      const test = [...targetsLine1, ...targetsLine2];
      const tl = gsap.timeline();
      test.forEach((obj, i) => {
        tl.to(
          obj,
          {
            delay: 0.05 * i,
            text: { value: newTest[i] },
            ease: 'sine.inOut',
          },
          0
        );
      });
    },
    { scope: container }
  );
  return (
    <div
      className='h-screen w-full items-center flex flex-col gap-10 bg-azteka-green-200'
      ref={container}
    >
      <Header />
      <div className='text-8xl text-stone-100 w-full flex flex-col items-center font-clash font-bold'>
        <ScrambleText
          list={originalLine1}
          identifier='letter-line1'
        />
        <ScrambleText
          list={originalLine2}
          identifier='letter-line2'
        />
      </div>
      <div className='flex justify-center gap-10 font-semibold text-stone-800 text-sm'>
        <Button
          title='Book a demo'
          onClick={() => console.log('boh')}
        />

        <Button
          title='Try it now'
          iconRight='prime:arrow-circle-right'
          style={2}
          onClick={() => console.log('boh')}
        />
      </div>
      <DemoImageContainer />
      <img
        src={AVector}
        alt=''
        className='absolute bottom-0 left-0 aspect-square object-cover h-[300px]'
      />
    </div>
  );
};
