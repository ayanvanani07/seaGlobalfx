import React from "react";
import Mt4 from "../../../assets/svgIcons/mt4.svg"
import Mt5 from "../../../assets/svgIcons/mt5.png"
import Web from "../../../assets/svgIcons/web.png"
import Mobile from "../../../assets/svgIcons/mobile.png"
import MobileImg from "../../../assets/svgIcons/mobileImg.png"
import Thinkpad from "../../../assets/svgIcons/thinkpad.png"
import Star from "../../../assets/svgIcons/star.png"
import './tradeThisMarket.scss'

export default function TradeThisMarket() {
    return (
        <section className="tradeThisMarket-section">
            <div className="mobileImg animate__animated animate__fadeInLeft wow" data-wow-offset="100">
                <img src={MobileImg} alt="mobileImg" />
            </div>
            <div className="laptopImg animate__animated animate__fadeInRight wow" data-wow-offset="100">
                <img src={Thinkpad} alt="thinkpadLaptopImg" />
            </div>
            <div className="starImg animate__animated  animate__rotateIn wow" data-wow-offset="100">
                <img src={Star} alt="StartImg" />
            </div>
            <div className="container-xl">
                <h2><span>Trade </span>this Market on</h2>
                <p>Access this market using Sea Global’s supported trading platforms, built for speed, stability, and flexibility across desktop, web, and mobile environments.</p>

                <div className="plateform-flex animate__animated  animate__fadeIn wow" data-wow-offset="100">
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