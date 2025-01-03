import { FeatureCard } from './FeatureCard';

type Props = { cards: { title: string; text: string; descriptions: string }[] };

export const FeaturesMobile = ({ cards }: Props) => {
  return (
    <div className='w-full min-h-[100dvh] bg-stone-100 p-10  flex flex-col gap-10'>
      {cards.map((card, i) => (
        <div className='flex flex-col gap-5'>
          <div className='flex items-center w-full justify-between gap-4 '>
            <span className='border border-azteka-200 text-azteka-200 rounded-full px-4 py-2 h-10 text-nowrap'>
              CORE FEATURE
            </span>{' '}
            <div className=' aspect-square bg-azteka-100 text-stone-800 h-10 rounded-full flex items-center justify-center'>
              {i + 1}
            </div>
          </div>
          <p className='text-sm text-stone-800'>{card.descriptions}</p>
          <FeatureCard
            {...card}
            index={i}
          />
        </div>
      ))}
    </div>
  );
};
