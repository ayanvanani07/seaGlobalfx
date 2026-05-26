import React from "react";
import Platformbannerimg from "../../../assets/images/platforms-banner-img.png"
import UserIcon from '../../../assets/svgIcons/userIcon.svg'
import DemoIcon from "../../../assets/svgIcons/demoIcon.svg"
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";
import './plateformsHeroSection.scss'

export default function PlateFormsHeroSection() {
    return (
        <section className="plateForms-HeroSection">
            <div className="herobg-img">
                <div className="hero-grid">
                    <div className="grid-items">
                        <div className="items-content">
                            <button aria-label="Low spreads Fast execution  Regulated" className="topBtn-hero">
                                Desktop • Web • Mobile
                            </button>
                            <h1 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Trade Your Way with Powerful, Flexible Trading<span> Platforms </span></h1>
                            <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100"> Trade your way with Sea Global’s powerful and flexible trading platforms, designed to support different trading styles, experience levels, and market strategies—whether you trade from desktop, web, or mobile.</p>


                            <div className="btn-flex">
                                <OpenAccountBtn />
                                <TryDemoBtn />
                            </div>
                        </div>

                    </div>
                    <div className="hero-gif-img">
                        <div className="hero-gif animate__animated animate__zoomIn wow" data-wow-offset="100" >
                            <img src={Platformbannerimg} alt="Platformbannerimg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}