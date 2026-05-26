import React from "react";
import ContactBanner from "../../../assets/images/contact-banner.png"
import './ContactHeroSection.scss'
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";

export default function ContactHeroSection() {
    return (
        <section className="contact-HeroSection">
            <div className="herobg-img">
                <div className="hero-grid">
                    <div className="grid-items">
                        <div className="items-content">
                            <button aria-label="Low spreads Fast execution  Regulated" className="topBtn-hero">
                                We’re Here to Help
                            </button>
                            <h1>We’re here to support you at <span> every </span> step</h1>
                            <p>At Paradise Global Markets, open communication and reliable support are part of how we work. Whether you have a question about your account, need platform assistance, or want to explore partnership opportunities, our team is here to help.</p>

                            <div className="btn-flex">
                                <OpenAccountBtn />
                                <TryDemoBtn />
                            </div>
                        </div>

                    </div>
                    <div className="hero-gif-img">
                        <div className="hero-gif">
                            <img src={ContactBanner} alt="ContactBanner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}