import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';
const Location = () => {
  return (
    <div className="container flex flex-col ustify-center py-20">
      <h3 className="text-2xl font-bold mb-2">MADE IN USA</h3>
      <div className="flex gap-2 items-center text-[#9F9F9F] mb-8">
        <IoLocationSharp />
        <p>3304 22th SE, Bothell 98021, Washington</p>
      </div>
      <Image
        src={'/images/Location.png'}
        alt="Foorplan"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </div>
  );
};
export default Location;
