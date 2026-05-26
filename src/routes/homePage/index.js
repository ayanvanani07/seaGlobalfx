import React from "react";
import HomepageHeroSection from "./heroSection";
import MarqueeAnimate from "../../components/marquee";
import WhySeaGlobal from "./whySeaGlobal";
import OneMarket from "./oneMarket";
import MarketsOverview from "./marketsOverview";
import AccountTypes from "./accountTypes";
import EducationTradingTools from "./educationTradingTools";
import Testimonials from "./testimonials";
import FeaturedGlobalMedia from "./featuredGlobalMedia";
import Faq from "../../components/faq";
import OpenYourAccount from "../../components/openYourAccount";

export default function HomePage() {
  return (
    <div>
      <HomepageHeroSection />
      <MarqueeAnimate />
      <WhySeaGlobal />
      <OneMarket />
      <MarketsOverview />
      <AccountTypes />
      <EducationTradingTools />
      <Testimonials />
      <FeaturedGlobalMedia />
      <OpenYourAccount />
      <Faq />
    </div>
  );
}
