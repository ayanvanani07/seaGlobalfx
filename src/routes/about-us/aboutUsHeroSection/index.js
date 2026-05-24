import React from "react";
import UserIcon from '../../../assets/svgIcons/userIcon.svg'
import CompanyBanner from "../../../assets/images/company-banner.png"
import './aboutusHeroSection.scss'
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";

export default function AboutusHeroSection() {
    return (
        <section className="aboutUs-HeroSection">
            <div className="herobg-img">
                <div className="hero-grid">
                    <div className="grid-items">
                        <div className="items-content">
                            <button aria-label="Low spreads Fast execution  Regulated" className="topBtn-hero">
                                We're Here To Help
                            </button>
                            <h1>A Trusted Global Trading <br /><span> Partner  </span></h1>
                            <p>Sea Global FX is a global trading broker focused on delivering a transparent, secure, and professionally managed trading environment.</p>

                            <div className="btn-flex">
                                <OpenAccountBtn />
                                <TryDemoBtn />
                            </div>
                        </div>

                    </div>
                    <div className="hero-gif-img">
                        <div className="hero-gif">
                            <img src={CompanyBanner} alt=" CompanyBanner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}