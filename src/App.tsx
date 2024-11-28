import { Landing } from './components/Landing';
import { MouseFollower } from './components/parts/MouseFollower';

export const App = () => {
  // const page = useRef<HTMLDivElement>(null);
  // const { contextSafe } = useGSAP(() => {}, { scope: page });

  // const moveCircle: MouseEventHandler<HTMLDivElement> = contextSafe((e) => {
  //   const tl = gsap.timeline();
  //   tl.to('.circle', {
  //     x: e.pageX,
  //     y: e.pageY,
  //     ease: 'elastic.in',
  //   });
  // });

  // const stickCircle: MouseEventHandler<HTMLDivElement> = contextSafe((e) => {
  //   const tl = gsap.timeline();

  //   tl.set('.circle', {
  //     x: e.pageX,
  //     y: e.pageY,
  //   });
  // });
  return (
    <div className='w-full h-full relative'>
      <MouseFollower />
      <Landing />
    </div>
  );
};
