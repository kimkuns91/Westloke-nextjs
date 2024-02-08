'use client';

import NavMenu from '@/libs/constants/navMenu';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Profile from './Profile';

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <header className="bg-[#141414] py-6">
      <div className="container flex items-center justify-between">
        <Link href={'/'}>
          <Image src={'/images/Logo.png'} width={100} height={0} alt="Logo" />
        </Link>
        <div className="gap-20 text-white items-center font-semibold text-lg hidden sm:flex">
          {NavMenu.map((menu, index) => (
            <Link key={index} href={menu.url}>
              {menu.menu}
            </Link>
          ))}
          {session ? (
            <Profile name={session.user.name} />
          ) : (
            <div className="flex gap-10 text-white items-center font-semibold text-lg">
              <Link href={'/signin'}>Sign In</Link>
              <Link
                className="border py-2 px-4 border-white rounded-md"
                href={'/signup'}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
