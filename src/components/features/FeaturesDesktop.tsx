import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import { FeatureCard } from './FeatureCard';

type Props = { cards: { title: string; text: string; descriptions: string }[] };

gsap.registerPlugin(ScrollTrigger);

export const FeaturesDesktop = ({ cards }: Props) => {
  const featureRef = useRef<HTMLDivElement>(null);
  const [number, setNumber] = useState(0);

  useGSAP(
    () => {
      // Seleziona tutte le cards tranne la prima
      const cards = gsap.utils.toArray<HTMLElement>('.card:not(.card-0)');

      // Posizione iniziale delle cards (tranne la prima)
      gsap.set(cards, {
        y: (i) => cards[i].offsetHeight + i * 100, // Posizione iniziale più in basso
        opacity: 0,
      });

      // Timeline per l'animazione delle cards
      gsap
        .timeline({
          scrollTrigger: {
            trigger: featureRef.current,
            start: 'top top',
            end: '+=300%', // Aumenta la durata dello scroll
            scrub: 1,
            pin: true, // Blocca la sezione durante lo scroll
            onUpdate: (self) => {
              const newNumber = Math.floor(self.progress * 2);
              setNumber(newNumber < 3 ? newNumber : 2);
            },
          },
        })
        .to(cards, {
          y: (i) => (i + 1) * 10, // Posizione finale sovrapposte
          opacity: 1,
          stagger: 0.5,
          ease: 'power1.inOut',
        });
    },
    { scope: featureRef }
  );
  return (
    <div
      className='w-full min-h-[100dvh] bg-stone-100 p-10 lg:py-20 lg:px-36 flex flex-col lg:flex-row'
      id='features'
      ref={featureRef}
    >
      <div className='w-full lg:w-3/5 h-full'>
        <div className='flex items-center gap-4 '>
          <span className='border border-azteka-200 text-azteka-200 rounded-full px-4 py-2 h-10 text-nowrap'>
            CORE FEATURE
          </span>{' '}
          <div className=' aspect-square bg-azteka-100 text-stone-800 h-10 rounded-full flex items-center justify-center'>
            {number + 1}
          </div>
        </div>
        <div className='h-full w-full flex justify-center items-center py-20 lg:pr-20 text-4xl text-stone-800'>
          {cards[number].descriptions}
        </div>
      </div>
      <div className='w-full lg:w-2/5 h-full cards flex flex-col gap-5 lg:relative'>
        {cards.map((card, i) => (
          <FeatureCard
            key={i}
            {...card}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};
