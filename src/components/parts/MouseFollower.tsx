import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const MouseFollower = () => {
  const circleRef = useRef(null);

  useGSAP(() => {
    // Create a smooth follow effect
    const handleMouseMove = (event: MouseEvent) => {
      gsap.to(circleRef.current, {
        x: event.clientX,
        y: event.clientY,
        xPercent: -50,
        yPercent: -50,
        ease: 'power1.out',
        duration: 0.5,
      });
    };

    const stickCircle = (e: MouseEvent) => {
      const tl = gsap.timeline();

      tl.set('.circle', {
        x: e.pageX,
        y: e.pageY,
      });
    };

    // Add event listener
    window.addEventListener('wheel', stickCircle);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener
    return () => {
      window.removeEventListener('wheel', stickCircle);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='fixed inset-0 overflow-hidden'>
      <div
        ref={circleRef}
        className='absolute w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full pointer-events-none border'
      />
    </div>
  );
};
