import react from "react";
import AboutusHeroSection from "./aboutUsHeroSection";
import Faq from "../../components/faq";
import AboutSeaGlobal from "./aboutSeaGlobal";
import OurVision from "./ourVision";
import WhyChoose from "./whyChoose";
import ClientFund from "./clientFund";
import ReliableFunding from "./reliableFunding";
import ProfessionalTrading from "./professionalTrading";

export default function AboutUs() {
    return (
        <div>
            <AboutusHeroSection />
            <AboutSeaGlobal />
            <OurVision />
            <WhyChoose />
            <ClientFund />
            <ReliableFunding />
            <ProfessionalTrading />
            <Faq />
        </div>
    )
}
