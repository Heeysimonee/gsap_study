type Props = {
  index: number;
  text: string;
  title: string;
};

export const FeatureCard = ({ index, title, text }: Props) => {
  return (
    <div
      className={`card card-${index} w-full h-full max-h-[600px] rounded-xl lg:rounded-bl-[90px] ${
        index > 0 ? 'bg-azteka-200' : 'bg-azteka-300'
      } lg:absolute p-10 z-[${index}] flex flex-col gap-10`}
    >
      <h4 className='text-azteka-100 text-center text-2xl'>{title}</h4>
      <p className='text-white'>{text}</p>
    </div>
  );
};
