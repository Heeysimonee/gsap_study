import AztekaLogo from '@/assets/Azteka.svg';

const navMap = [
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Features',
    link: '#features',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

export const Header = () => {
  return (
    <div className='w-full p-10 flex flex-col lg:flex-row gap-10 justify-center items-center relative'>
      <img
        src={AztekaLogo}
        className='lg:absolute lg:left-10'
      />
      <div className='flex gap-10 text-stone-100 font-light text-lg'>
        {navMap.map((el, i) => (
          <a
            className='text-white hover:text-azteka-green-100 hover:font-semibold transition-all duration-300'
            key={i}
            href={el.link}
          >
            {el.name}
          </a>
        ))}
      </div>
    </div>
  );
};
