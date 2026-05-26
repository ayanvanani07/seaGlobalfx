import React from "react";
import UserIcon from '../../../assets/svgIcons/userIcon.svg'
import Partners from "../../../assets/images/Partners.png"
import './partnersHeroSection.scss'
import BecomePartnersbtn from "../../../components/becomePartnerBtn";

export default function PartnersHeroSection() {
    return (
        <section className="partners-HeroSection">
            <div className="herobg-img">
                <div className="hero-grid">
                    <div className="grid-items">
                        <div className="items-content">
                            <button aria-label="Low spreads Fast execution  Regulated" className="topBtn-hero">
                                Seaglobal FX IB Partners Program
                            </button>
                            <h1 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Grow Your Forex <br /><span> Business  </span>With Us</h1>
                            <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Build long-term revenue by partnering with Seaglobal FX, a global forex broker focused on transparency, advanced trading technology, and partner success.</p>

                            <div className="btn-flex">
                                <BecomePartnersbtn />
                            </div>
                        </div>

                    </div>
                    <div className="hero-gif-img">
                        <div className="hero-gif animate__animated animate__zoomIn wow" data-wow-offset="100">
                            <img src={Partners} alt="Partners" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}