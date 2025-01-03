type Props = { title: string; description: string; image: string };
export const MotivationCard = ({ title, description, image }: Props) => {
  return (
    <div className='w-full h-full md:w-[480px] bg-azteka-300 flex flex-col justify-between items-center rounded-xl  gap-0 md:gap-10'>
      <div className='w-full p-10 md:pb-0 md:pt-10 md:px-10 text-center text-white flex flex-col gap-2 '>
        <h4 className='text-azteka-100 text-xl'>{title}</h4>
        <p className='font-thin'>{description}</p>
      </div>
      <div className='grow flex flex-col justify-end w-full md:w-2/3 overflow-hidden'>
        <img
          className='h-[300px] bg-white rounded-xl md:rounded-b-none object-cover object-center'
          src={image}
        />
      </div>
    </div>
  );
};
