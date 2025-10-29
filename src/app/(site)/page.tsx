import ProfileCard from "@/components/profile-card";
import HeroSection from "@/components/hero-section";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hidden lg:flex">
        <div className="w-1/5 bg-[#363638]"></div>
        <div className="w-4/5 bg-white"></div>
      </div>

      <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-[#363638] via-[#363638] to-[#2a2a2c]"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 w-full">
        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-8 lg:gap-12 items-center">
          <div className="w-full mt-16 md:mt-20 lg:mt-0">
            <ProfileCard />
          </div>

          <div className="w-full">
            <HeroSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
