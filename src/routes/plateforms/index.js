import react from "react";
import PlateFormsHeroSection from "./plateformsHeroSection";
import MarqueeAnimate from "../../components/marquee";
import VideoIframe from "./videoIframe";
import PlatformHighlights from "./platformHighlights";
import StartTrading from "../forex/startTrading";
import TradeThisMarket from "../forex/tradethisMarket";

export default function Plateforms() {
    return (
        <div>
            <PlateFormsHeroSection />
            <MarqueeAnimate />
            <VideoIframe />
            <PlatformHighlights />
        </div>
    )
}