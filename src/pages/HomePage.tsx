
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import RecommendedArtists from "@/components/home/RecommendedArtists";

const HomePage = () => {
  return (
    <div>
      <div className="p-6">
        <HeroSection />
        <FeaturedSection title="Made For You" seeAllLink="#" />
        <RecommendedArtists />
        <FeaturedSection title="Recently Played" seeAllLink="#" />
        <FeaturedSection title="New Releases" seeAllLink="#" />
      </div>
    </div>
  );
};

export default HomePage;
