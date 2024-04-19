import { tailwindPadding } from "./_data/constants";
import Hero from "./_components/Hero";
import Feature from "./_components/Feature";
import CallToAction from "./_components/CallToAction";

export default function Home() {
  return (
    <div className={`bg-gray-100`}>
      {/* Hero Section */}
     <Hero />

      {/* Features Section */}
      <Feature />

      {/* Call to Action Section */}
    <CallToAction />
    </div>
  );
}
