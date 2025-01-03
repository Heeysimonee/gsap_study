import { DeviceContainer } from './DeviceContainer';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const InteractiveDemo = () => {
  const demoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create a timeline for better control
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: demoRef.current,
          start: '+=100 20%',
          end: 'bottom bottom',
          scrub: 5,
          // markers: true,
          preventOverlaps: true,
          fastScrollEnd: true,
          anticipatePin: 1,
        },
      });

      // Add multiple animations to the timeline
      tl.fromTo(
        '.device-demo',
        {
          scale: 1,
          borderRadius: 0,
          border: 0,
        },
        {
          delay: 0.5,
          scale: 0.7,
          borderRadius: '',
          border: '',
          ease: 'power1.inOut',
        }
      );
      tl.fromTo(
        '.demo-title',
        {
          alpha: 1,
        },
        {
          alpha: 0,
        }
      );
    },
    { scope: demoRef }
  );
  return (
    <div
      ref={demoRef}
      className='h-[100dvh] w-full bg-azteka-100 flex flex-col items-center justify-center'
    >
      <DeviceContainer />
    </div>
  );
};
