import react from "react";
import Mt4 from "../../../assets/svgIcons/mt4.svg"
import Mt5 from "../../../assets/svgIcons/mt5.png"
import Web from "../../../assets/svgIcons/web.png"
import Mobile from "../../../assets/svgIcons/mobile.png"
import MobileImg from "../../../assets/svgIcons/mobileImg.png"
import Thinkpad from "../../../assets/svgIcons/thinkpad.png"
import Star from "../../../assets/svgIcons/star.png"
import './plateTradethisMarket.scss'

export default function PlatTradethisMarket() {
    return (
        <section className="platTradethisMarket-section">
            <div className="mobileImg">
                <img src={MobileImg} alt="mobileImg" />
            </div>
            <div className="laptopImg">
                <img src={Thinkpad} alt="thinkpadLaptopImg" />
            </div>
            <div className="starImg">
                <img src={Star} alt="StartImg" />
            </div>
            <div className="container2">
                <h2><span>Trade </span>this Market on</h2>
                <p>Access this market using Sea Global’s supported trading platforms, built for speed, stability, and flexibility across desktop, web, and mobile environments.</p>

                <div className="plateform-flex">
                    <div className="mt4">
                        <img src={Mt4} alt="Mt4" />
                        <span>MT4</span>
                    </div>
                    <div className="mt5">
                        <img src={Mt5} alt="mt5" />
                        <span>MT5</span>
                    </div>
                    <div className="web">
                        <img src={Web} alt="Web" />
                        <span>Web <br />   Platform</span>

                    </div>

                    <div className="mobile">
                        <img src={Mobile} alt="mobile" />
                        <span>Mobile  <br /> App</span>
                    </div>
                </div>
            </div>
        </section>
    )
}