import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const MouseFollower = () => {
  const circleRef = useRef(null);

  useGSAP(() => {
    if (!circleRef.current) return;
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
      if (!circleRef.current) return;
      const tl = gsap.timeline();

      tl.set(circleRef.current, {
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
  if (window.innerWidth < 1024) return null;

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none'>
      <div
        ref={circleRef}
        className='absolute w-10 h-10 bg-white/10  rounded-full border pointer-events-none z-[1000]'
      />
    </div>
  );
};
