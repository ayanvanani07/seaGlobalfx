import React from "react";
import UserIcon from '../../../assets/svgIcons/userIcon.svg'
import DemoIcon from "../../../assets/svgIcons/demoIcon.svg"
import "./forexHeroSection.scss";
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";
import HeroGif from "../../../assets/video/hero-coin.gif"

export default function ForexHeroSection() {
    return (
        <section className="forex-heroBanner-section">
            <div className="herobg-img">
                <div className="hero-grid">
                    <div className="grid-items">
                        <div className="items-content">
                            <button aria-label="Low spreads Fast execution  Regulated" className="topBtn-hero">
                                Low spreads • Fast execution • Regulated
                            </button>
                            <h1>Trade the World’s Most Liquid  <span> Financial  </span>  Market</h1>
                            <p>Experience tight spreads with high-speed execution. Trade in a secure, fully regulated trading environment.</p>


                            <div className="btn-flex">
                                <OpenAccountBtn />
                                <TryDemoBtn />
                            </div>
                        </div>

                    </div>
                    <div className="hero-gif-img">
                        <div className="hero-gif">
                            <img src={HeroGif} alt="HeroGif" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
