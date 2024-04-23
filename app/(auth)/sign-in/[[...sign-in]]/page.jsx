import { SignIn } from "@clerk/nextjs";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Sign In | FireShares</title>
        <meta
          name="description"
          content="Sign in to access your account on our website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-transparent sm:flex justify-center items-center w-full pb-5 sm:pb-0 sm:h-screen">
        <SignIn />
      </section>
    </>
  );
}