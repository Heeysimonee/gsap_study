import { InteractiveDemo } from './components/Demo/InteractiveDemo';
import { Landing } from './components/Landing/Landing';
import { Copy } from './components/common/Copy';
import { MouseFollower } from './components/common/MouseFollower';
import { Contacts } from './components/contacts/Contacts';
import { FeaturesContainer } from './components/features/FeaturesContainer';
import { Motivation } from './components/motivation/Motivation';

export const App = () => {
  return (
    <div className='w-full h-full relative'>
      <Landing />
      <Copy id='azteka-about' />
      <InteractiveDemo />
      <Motivation />
      <FeaturesContainer />
      <Contacts />
      <MouseFollower />
    </div>
  );
};
