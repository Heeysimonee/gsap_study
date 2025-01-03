import { Icon } from '@iconify/react';

type Props = {
  title: string;
  onClick: () => void;
  style?: 1 | 2;
  iconLeft?: string;
  iconRight?: string;
};
const stylesList = [
  'bg-azteka-100 text-stone-800 justify-center',
  'border border-azteka-100 text-azteka-100 justify-between',
];
export const Button = ({ title, onClick, style = 1, iconLeft = undefined, iconRight = undefined }: Props) => {
  return (
    <button
      className={`rounded-full py-2 px-4 min-w-[150px] cursor-pointer ${stylesList[style - 1]} flex items-center`}
      onClick={onClick}
    >
      {iconLeft && (
        <Icon
          icon={iconLeft}
          width='20'
          height='20'
        />
      )}
      {title}
      {iconRight && (
        <Icon
          icon={iconRight}
          width='20'
          height='20'
        />
      )}
    </button>
  );
};
