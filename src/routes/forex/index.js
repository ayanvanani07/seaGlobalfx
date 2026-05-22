import react from "react";
import ForexHeroSection from "./forexHeroSection";
import MarqueeAnimate from "../../components/marquee";
import Faq from "../../components/faq";
import WhyTradeForex from "./whyTradeForex";
import AvailableInstruments from "./availableInstruments";
import TradingHours from "./tradingHours";
import TradeThisMarket from "./tradethisMarket";
import StartTrading from "./startTrading";


export default function Forex() {
    return (
        <div>
            <ForexHeroSection />
            <MarqueeAnimate />
            <WhyTradeForex />
            <AvailableInstruments />
            <TradingHours />
            <TradeThisMarket />
            <StartTrading />
            <Faq />
        </div>
    )
}