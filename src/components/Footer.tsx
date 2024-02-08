import Image from 'next/image';
import Link from 'next/link';
import { FiInstagram } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] py-20">
      <div className="container ">
        <div className="flex justify-between border-b pb-8 border-[#595959]">
          <div className="flex gap-4 pb-4">
            <Image
              src={'/images/LogoRed.png'}
              alt="Logo"
              width={130}
              height={0}
            />
            <div className="flex flex-col">
              <p className="font-bold text-[#595959]">Westloke Amps</p>
              <p className="font-normal text-[#595959]">
                westlokemusic@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-2 text-[#595959]">
            <FiInstagram className="text-xl mt-[3px]" />
            <div className="flex flex-col">
              <Link href={'@tweedfreak'}>@tweedfreak</Link>
              <Link href={'@tweedfreak'}>@westlokeamps</Link>
            </div>
          </div>
          <div className="flex gap-2 items-center text-[#595959] mb-8">
            <IoLocationSharp className="text-xl" />
            <p>3304 22th SE, Bothell 98021, Washington</p>
          </div>
        </div>
        <div className="py-6">
          <p className="text-[#8A8A8A] text-lg font-medium">ⒸWestloke 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
