import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col py-24 justify-between relative w-full bg-[url('/images/Main.png')] bg-center">
      <div className="container text-white">
        <h2 className="text-4xl font-bold my-4">WESLOKE AMPS</h2>
        <p className="text-xl font-medium">MADE IN REDMOND, WASHINGTON, USA</p>
        <Link
          href={'/amplifiers'}
          className="flex items-center text-2xl font-bold my-12 transition-all ease-in-out hover:opacity-30"
        >
          <p>Shop Amplifiers</p>
          <FaAngleRight />
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src={'/images/LogoWhite.png'}
          alt="user profile picture"
          width={200}
          height={0}
        />
      </div>
    </div>
  );
};
export default Hero;
