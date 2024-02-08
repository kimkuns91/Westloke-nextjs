'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { MdEmail, MdKey } from 'react-icons/md';
import Button from '../Button';
import IconInput from '../InputIcon';

const SignInForm = () => {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await signIn('credentials', {
        email: emailRef.current?.value ?? '',
        password: passwordRef.current?.value ?? '',
        redirect: false,
      });
      if (res && res.status === 401) {
        console.log();
        alert(res.error);
      } else {
        router.push('/');
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    /* eslint-disable-next-line */
    <div className="flex w-full max-w-[330px] mx-auto flex-col gap-4 min-h-screen justify-center z-20">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
        <IconInput
          icon={<MdEmail />}
          ref={emailRef}
          type="text"
          name="email"
          placeholder="name@flowbite.com"
        />
        <IconInput
          icon={<MdKey />}
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="········"
        />
        <Button type="submit" className="font-En">
          Login
        </Button>
      </form>
      <Button
        /* eslint-disable-next-line */
        className="bg-[#f2f2f2] text-[#5e5e5e] hover:bg-[#777] mt-4"
        onClick={() => {
          router.push('/signup');
        }}
      >
        Sign Up with your email
      </Button>
    </div>
  );
};
export default SignInForm;
