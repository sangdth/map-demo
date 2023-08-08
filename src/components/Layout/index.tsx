import type { ReactNode } from 'react';
import Head from 'next/head';

export const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="Demo app for Google Maps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  );
};
