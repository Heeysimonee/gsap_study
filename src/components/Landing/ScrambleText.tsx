export const ScrambleText = ({ list, identifier }: { list: string[]; identifier: string }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {list.map((el, i) => (
        <div
          key={i}
          className={`${identifier} pointer-events-none inline-block whitespace-pre`}
        >
          {el}
        </div>
      ))}
    </div>
  );
};
