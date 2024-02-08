import { Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { randomBytes, randomUUID } from 'crypto';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from './prisma';
if (!process.env.NEXTAUTH_SECRET) {
  console.error('환경 변수가 설정되지 않았습니다.');
  process.exit(1);
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const existUser = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!existUser) throw new Error('해당 이메일로 가입한 적이 없습니다.');

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          existUser.password
        );

        if (!passwordMatch) throw new Error('비밀번호 오류 입니다.');

        return existUser as any;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex');
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log('jwt callback :', { token, user });
      if (user) {
        token.id = user.id;
        token.profileImg = user.profileImg;
        token.provider = user.provider;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log('session callback :', { session, token });
      if (session.user) {
        session.user.id = token.id as string;
        session.user.image = token.profileImg as string;
        session.user.role = token.role as Role;
        session.user.provider = token.provider as string;
      }
      return session;
    },
  },
};
