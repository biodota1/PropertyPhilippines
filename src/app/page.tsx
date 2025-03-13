import FeaturedProperties from "./components/FeaturedProperties";
import FeaturedText from "./components/FeaturedText";
import Hero from "./components/Hero";
import SocialConnect from "./components/SocialConnect";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedText />
      <h2 className="px-[5%] text-2xl md:text-3xl font-bold pb-5">
        Featured Properties
      </h2>
      <FeaturedProperties />
      <SocialConnect />
    </div>
  );
}
