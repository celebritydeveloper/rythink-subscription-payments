import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

import { PageMeta } from '../types';

interface Props extends PropsWithChildren {
  meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta }: Props) {
  const router = useRouter();
  const meta = {
    title: 'Next.js Subscription Starter',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://subscription-starter.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <Navbar />
        <main id="skip">
          <section>
            <div className="w-[80%] mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-0">
              <div className="flex justify-between items-center">
                <h2 className="text-6xl font-extrabold text-white sm:text-center sm:text-6xl w-[40%]">
                Fast & Reliable {" "}
                  <span
                    className="text-pink-500">
                    Writing Assistant
                  </span>
                  .
                </h2>

                <div className="w-[40%]">
                  <video src="https://secondhand-sandy.vercel.app/feature-1.mp4"></video>
                </div>
              </div>
            </div>
              
          </section>
          <section>
            {children}
          </section>
        </main>
      <Footer />
    </>
  );
}
