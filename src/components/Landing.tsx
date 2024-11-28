import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Landing = () => {
  const container = useRef<HTMLDivElement>(null);
  const test = 'Ciao! Hello! Bonjour!';
  const test2 = 'Come va? How are you? ca va?';
  const string1 = test.split('');
  const string2 = test2.split('');

  const { contextSafe } = useGSAP(
    () => {
      // gsap code here...
      gsap.from('.box', { autoAlpha: 0, stagger: 0.2, duration: 2 });
      gsap.to('.box', { y: 50, stagger: 0.2, ease: 'power1.out' }); // <-- automatically reverted
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  const handleMouseEnter = contextSafe((e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget;

    // Create a timeline for smoother transition
    const tl = gsap.timeline();

    tl.to(target, {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: '5rem',
      color: 'white',
      duration: 1,
      ease: 'power1.in',
    });
    // tl.from(target, {
    //   opacity: 1,
    // });
  });

  const handleMouseLeave = contextSafe((e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget;

    // Revert to original state
    const tl = gsap.timeline();

    tl.to(target, {
      fontFamily: 'inherit', // Reset to original font
      color: 'white', // Reset to original color
      duration: 0.5,
      delay: 2,
      ease: 'power1.in',
    });
    // tl.from(target, {
    //   opacity: 1,
    // });
  });

  return (
    <div
      className='bg-emerald-600 h-screen w-full flex flex-col items-center'
      ref={container}
    >
      <div className='box font-bold text-8xl text-white flex gap-2 font-afolkalips'>
        {string1.map((el, i) => (
          <span
            key={`1_${i}`}
            className='letter'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {el}
          </span>
        ))}
      </div>
      <div className='box font-bold text-8xl text-white flex gap-2 font-afolkalips'>
        {string2.map((el, i) => (
          <span
            key={`2_${i}`}
            className='letter'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};
