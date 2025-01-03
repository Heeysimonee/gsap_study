import { useEffect, useState } from 'react';
import { FeaturesMobile } from './FeaturesMobile';
import { FeaturesDesktop } from './FeaturesDesktop';

const copy =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cumque commodi qui. Nihil est, quae asperiores praesentium ut, debitis expedita impedit, nobis recusandae molestiae omnis eligendi error quis voluptate earum!';
const cards = [
  {
    title: 'Feature Title',
    text: copy,
    descriptions:
      '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut adipisci placeat aperiam suscipit dolor consequatur vel, unde sint possimus tempora praesentium animi nihil',
  },
  {
    title: 'Feature Title',
    text: copy,
    descriptions:
      '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut adipisci placeat aperiam suscipit dolor consequatur vel, unde sint possimus tempora praesentium animi nihil',
  },
  {
    title: 'Feature Title',
    text: copy,
    descriptions:
      '3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut adipisci placeat aperiam suscipit dolor consequatur vel, unde sint possimus tempora praesentium animi nihil',
  },
];

export const FeaturesContainer = () => {
  const [isMobile, setIsMobile] = useState(() => window.screen.width < 1024);
  useEffect(() => {
    setIsMobile(window.screen.width < 1024);
  }, []);
  return isMobile ? <FeaturesMobile cards={cards} /> : <FeaturesDesktop cards={cards} />;
};
