import react from "react";
import PartnersHeroSection from "./partnersHeroSection";
import MarqueeAnimate from "../../components/marquee";
import WhyPartners from "./whyPartners";
import OurForexPartners from "./ourForexPartners";
import HowtheSea from "./howtheSea";
import PartnerTools from "./partnersTools";
import ReadytoBecome from "./readytoBecome";
import Faq from "../../components/faq";

export default function Partners() {
    return (
        <div>
            <PartnersHeroSection />
            <MarqueeAnimate />
            <WhyPartners />
            <OurForexPartners />
            <HowtheSea />
            <PartnerTools />
            <ReadytoBecome />
            <Faq />
        </div>
    )
}