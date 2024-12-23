import { Landing } from './components/Landing/Landing';
import { MouseFollower } from './components/common/MouseFollower';

export const App = () => {
  return (
    <div className='w-full h-full relative'>
      <MouseFollower />
      <Landing />
    </div>
  );
};
