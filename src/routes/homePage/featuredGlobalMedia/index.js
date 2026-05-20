import React from "react";
import MarketInsider from "../../../assets/svgIcons/markets-insider.svg"
import TechBullionLogo from "../../../assets/svgIcons/TechBullionLogo.webp"
import ManilaLogoMain from "../../../assets/svgIcons/manila-logo-main.png"
import DigitalJournal from "../../../assets/svgIcons/Digital-Journal.webp"
import ApIcon from "../../../assets/svgIcons/ap-icon.png"
import Marquee from "react-fast-marquee";
import './featuredinGlobalMedia.scss'

export default function FeaturedGlobalMedia() {
    return (
        <section className="featuredGlobalMedia-section">
            <div className="flexbox">
                <div className="content">
                    <h2>Featured in <br /> <span>Global</span> Media</h2>
                    <p>Our brand and market insights have been featured across leading financial and industry media outlets, reinforcing our reputation as a trusted market participant.</p>

                </div>
                <div className="marquee-animations">
                    <Marquee>
                        <div className="mini-card-marquee">
                            <div className="companyLogo">
                                <img src={MarketInsider} alt="MarketInsider" />
                            </div>
                            <div className="companyLogo">
                                <img src={TechBullionLogo} alt="TechBullionLogo" />
                            </div>
                            <div className="companyLogo">
                                <img src={ManilaLogoMain} alt="ManilaLogoMain" />
                            </div>
                            <div className="companyLogo">
                                <img src={DigitalJournal} alt="DigitalJournal" />
                            </div>
                            <div className="companyLogo">
                                <img src={ApIcon} alt="ApIcon" />
                            </div>
                            <div className="companyLogo">
                                <img src={ManilaLogoMain} alt="ManilaLogoMain" />
                            </div>
                        </div>
                    </Marquee>
                    <div className="spacer-marquee">
                    </div>
                    <Marquee direction="right">
                        <div className="mini-card-marquee">
                            <div className="companyLogo">
                                <img src={MarketInsider} alt="MarketInsider" />
                            </div>
                            <div className="companyLogo">
                                <img src={TechBullionLogo} alt="TechBullionLogo" />
                            </div>
                            <div className="companyLogo">
                                <img src={ManilaLogoMain} alt="ManilaLogoMain" />
                            </div>
                            <div className="companyLogo">
                                <img src={DigitalJournal} alt="DigitalJournal" />
                            </div>
                            <div className="companyLogo">
                                <img src={ApIcon} alt="ApIcon" />
                            </div>
                            <div className="companyLogo">
                                <img src={ManilaLogoMain} alt="ManilaLogoMain" />
                            </div>
                        </div>
                    </Marquee>
                    <div className="spacer-marquee"></div>
                    <Marquee direction="left" >
                        <div className="mini-card-marquee">
                            <div className="companyLogo last-marquee">
                                <img src={DigitalJournal} alt="DigitalJournal" />
                            </div>

                            <div className="companyLogo">
                                <img src={MarketInsider} alt="MarketInsider" />
                            </div>

                            <div className="companyLogo">
                                <img src={ManilaLogoMain} alt="ManilaLogoMain" />
                            </div>

                            <div className="companyLogo">
                                <img src={ApIcon} alt="ApIcon" />
                            </div>
                            <div className="companyLogo last-marquee" >
                                <img src={TechBullionLogo} alt="TechBullionLogo" />
                            </div>
                            <div className="companyLogo">
                                <img src={ManilaLogoMain} alt="ManilaLogoMain" />
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    )
}