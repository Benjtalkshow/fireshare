import { SignUp } from "@clerk/nextjs";
import Logo from "../../../_components/Logo";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/cloudimage.jpeg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-center md:text-left text-2xl pb-10 font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to <span className="text-teal-600">FireShare</span>
            </h1>
            <SignUp />
          </div>
        </main>
      </div>
    </section>
  );
}
