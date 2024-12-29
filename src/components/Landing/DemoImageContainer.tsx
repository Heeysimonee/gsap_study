import MacDemo from '@/assets/MacDemo.png';
import MobileDemo from '@/assets/MobileDemo.png';
export const DemoImageContainer = () => {
  return (
    <div className='grow w-full relative overflow-y-hidden z-50'>
      <img
        className='hidden lg:block max-h-full object-scale-down absolute left-[20%] right-0 top-0'
        src={MacDemo}
        alt=''
      />
      <img
        className='max-h-full object-scale-down absolute  right-[20%] bottom-0'
        src={MobileDemo}
        alt=''
      />
    </div>
  );
};
