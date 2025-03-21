import HeroSection from "@/components/hero-section";
import PopularGames from "@/components/popular-games";
import PopularSports from "@/components/popular-sports";
import Promotions from "@/components/promotions";
import RecentBets from "@/components/recent-bets";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="px-4 md:px-8 py-6 max-w-full">
        <HeroSection />
        <Promotions />
        <PopularGames />
        <PopularSports />
        <RecentBets />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
