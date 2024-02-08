'use client';

import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Session : {JSON.stringify(session)}</h1>
      <h1>Status : {JSON.stringify(status)}</h1>
    </main>
  );
}
