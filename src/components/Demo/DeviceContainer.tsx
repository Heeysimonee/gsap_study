import video from '../../assets/demo-video.mp4';
export const DeviceContainer = () => {
  return (
    <div className='device-demo border-[10px] border-stone-900  bg-zinc-100 w-full h-full rounded-2xl scale-110 relative overflow-hidden'>
      <h2 className='absolute inset-0 m-auto demo-title text-center  w-fit h-fit  text-xk lg:text-4xl  text-slate-200 font-semibold '>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <video
        src={video}
        className='w-full h-full object-cover'
        autoPlay
        muted={true}
        preload='none'
        playsInline
        loop
      ></video>
    </div>
  );
};
