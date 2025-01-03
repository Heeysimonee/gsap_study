import { MotivationCard } from './MotivationCard';
import business from '@/assets/business.jpg';
import customer from '@/assets/customer.jpg';

export const Motivation = () => {
  return (
    <div className='min-h-[100dvh] w-full p-10 md:pt-10 md:px-10 md:pb-0 flex flex-col justify-between gap-10'>
      <div className='text-800 flex flex-col gap-5 w-full lg:w-3/5'>
        <h2 className='font-semibold text-xl md:text-4xl'>WHY AZTEKA?</h2>
        <h3 className='text-xl md:text-4xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur temporibus vero eos sit. Ea
          laborum molestiae exercitationem.
        </h3>
        <p className='md:text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio perferendis voluptate repudiandae?
          Earum porro maiores doloremque cumque nemo exercitationem aut necessitatibus numquam.
        </p>
      </div>
      <div className='grow flex flex-col md:flex-row  justify-center items-center gap-10'>
        <MotivationCard
          title='For Business'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deserunt modi, porro suscipit quasi perferendis eius minus architecto ratione sit cumque nobis incidunt ipsa, dolorem quibusdam aperiam doloremque et reiciendis.'
          image={business}
        />
        <MotivationCard
          title='For Customers'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deserunt modi, porro suscipit quasi perferendis eius minus architecto ratione sit cumque nobis incidunt ipsa, dolorem quibusdam aperiam doloremque et reiciendis.'
          image={customer}
        />
      </div>
    </div>
  );
};
