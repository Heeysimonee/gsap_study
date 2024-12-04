import { Landing } from './components/Landing';
import { MouseFollower } from './components/parts/MouseFollower';

export const App = () => {
  return (
    <div className='w-full h-full relative'>
      <MouseFollower />
      <Landing />
    </div>
  );
};
