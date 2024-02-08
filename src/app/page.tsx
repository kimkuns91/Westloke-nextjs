'use client';

import Foorplan from '@/components/main/Foorplan';
import Hero from '@/components/main/Hero';
import Location from '@/components/main/Location';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Foorplan />
      <Location />
    </main>
  );
}
