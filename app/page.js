import Hero from "./_components/Hero";
import Search from "./_components/Search";
import { tailwindPadding } from "./_data/constants";

export default function Home() {
  return (
    <main className={`${tailwindPadding}`}>
      <Hero />
      <Search />
    </main>
  );
}
