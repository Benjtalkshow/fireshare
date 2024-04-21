import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-transparent sm:flex justify-center items-center w-full pb-5 sm:pb-0 sm:h-screen">
      <SignIn />
    </section>
  );
}
