import { Landing } from './components/Landing/Landing';
import { Copy } from './components/common/Copy';
import { MouseFollower } from './components/common/MouseFollower';

export const App = () => {
  return (
    <div className='w-full h-full relative'>
      <Landing />
      <Copy id='azteka-about' />
      <MouseFollower />
    </div>
  );
};
