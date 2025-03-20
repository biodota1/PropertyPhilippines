import FeaturedProperties from "./components/FeaturedProperties";
import FeaturedText from "./components/FeaturedText";
import Hero from "./components/Hero";
import SocialConnect from "./components/SocialConnect";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedText />
      <FeaturedProperties />
      <SocialConnect />
    </div>
  );
}
