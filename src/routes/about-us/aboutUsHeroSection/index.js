import React from "react";
import UserIcon from '../../../assets/svgIcons/userIcon.svg'
import CompanyBanner from "../../../assets/images/company-banner.png"
import './aboutusHeroSection.scss'
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";

export default function AboutusHeroSection() {
    return (
        <section className="aboutUs-HeroSection">
            <div className="herobg">
                <div className="hero-grid">
                    <div className="grid-items">
                        <div className="items-content">
                            <button aria-label="Low spreads Fast execution  Regulated" className="topBtn-hero">
                                We're Here To Help
                            </button>
                            <h1 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">A Trusted Global Trading <br /><span> Partner  </span></h1>
                            <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Sea Global FX is a global trading broker focused on delivering a transparent, secure, and professionally managed trading environment.</p>

                            <div className="btn-flex">
                                <OpenAccountBtn />
                                <TryDemoBtn />
                            </div>
                        </div>
                    </div>
                    <div className="hero-gif-img " data-wow-offset="100">
                        <div className="hero-gif">
                            <img src={CompanyBanner} alt=" CompanyBanner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}