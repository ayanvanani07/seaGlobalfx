import React from "react";
import UserIcon from '../../../assets/svgIcons/userIcon.svg'
import DemoIcon from "../../../assets/svgIcons/demoIcon.svg"
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";
import BannerIMg from "../../../assets/images/forex-bannerIMg.png"
import "./forexHeroSection.scss";

export default function ForexHeroSection() {
    return (
        <section className="forex-heroBanner-section">
            <div className="herobg-img">
                <div className="hero-grid">
                    <div className="grid-items">
                        <div className="items-content">
                            <button aria-label="Low spreads Fast execution  Regulated" className="topBtn-hero">
                                Tight spreads • Fast execution • Deep liquidity
                            </button>
                            <h1>Trade the World’s Most Liquid  <span> Financial  </span>  Market</h1>
                            <p>Access global Forex markets through Sea Global’s secure trading infrastructure, offering transparent pricing, fast execution, and reliable liquidity across market conditions.</p>


                            <div className="btn-flex">
                                <OpenAccountBtn />
                                <TryDemoBtn />
                            </div>
                        </div>

                    </div>
                    <div className="hero-gif-img">
                        <div className="hero-gif">
                            <img src={BannerIMg} alt="BannerIMg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
