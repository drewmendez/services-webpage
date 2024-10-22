import Navbar from "@/components/navbar";
import SellingProcess from "@/sections/selling-process";
import Expertise from "@/sections/expertise";
import HeroSection from "@/sections/hero-section";
import MarketingPlan from "@/sections/marketing-plan";
import BuyingProcess from "@/sections/buying-process";
import MoreService from "@/sections/more-service";
import MarketExposure from "@/sections/market-exposure";
import MarqueeContainer from "@/sections/marquee-container";
import GlobalPartners from "@/sections/global-partners";
import DronePhotography from "@/sections/drone-photography";
import WorkWithUs from "@/sections/work-with-us";
import Footer from "@/sections/footer";
import ScrollToTop from "@/components/scroll-to-top";
import Actions from "@/components/actions";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarketingPlan />
      <Expertise />
      <SellingProcess />
      <BuyingProcess />
      <MoreService />
      <MarqueeContainer />
      <MarketExposure />
      <GlobalPartners />
      <DronePhotography />
      <WorkWithUs />
      <Footer />
      <ScrollToTop />
      <Actions />
    </>
  );
}
