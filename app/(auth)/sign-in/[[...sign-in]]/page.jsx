import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-transparent flex justify-center items-center w-full h-screen">
      <SignIn />
    </section>
  );
}
