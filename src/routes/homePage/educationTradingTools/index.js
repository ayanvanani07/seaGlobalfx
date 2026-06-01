import React from "react";
import ArrowRotate from "../../../assets/svgIcons/rotate-arrow.svg"
import Market from "../../../assets/svgIcons/market.svg"
import './educationTradingTools.scss'

export default function EducationTradingTools() {
    return (
        <section className="educationTradingTools-section-card">
            <div className="container-lg">
                <div className="card-align">
                    <div className="section-card-grid">
                        <div className="card-grid-items">
                            <div className="right-content">
                                <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="50">
                                    <span>Education &</span>
                                    Trading Tools
                                </h2>
                                <p className="animate__animated animate__fadeInUp wow" data-wow-offset="50">Enhance your trading knowledge and decision-making with our education hub and professional trading tools, designed to support traders at every stage of their journey.</p>
                            </div>
                        </div>
                        <div className="mini-card-grid">
                            <div className="sub-grid-card">
                                <div className="card">
                                </div>
                                <div className="card">
                                    <h3>Know Your Markets</h3>
                                    <div className="arrowRotate">
                                        <img src={ArrowRotate} alt="ArrowRotate" />
                                    </div>
                                    <div className="card-img">
                                        <img src={Market} alt="Market" />
                                    </div>
                                </div>
                                <div className="card">
                                    <h3>Trading Calculators</h3>
                                    <div className="arrowRotate">
                                        <img src={ArrowRotate} alt="ArrowRotate" />
                                    </div>
                                    <div className="card-img">
                                        <img src={Market} alt="Market" />
                                    </div>
                                </div>
                            </div>
                            <div className="sub-grid-card">
                                <div className="card">
                                    <h3>Market Analysis</h3>
                                    <div className="arrowRotate">
                                        <img src={ArrowRotate} alt="ArrowRotate" />
                                    </div>
                                    <div className="card-img">
                                        <img src={Market} alt="Market" />
                                    </div>
                                </div>
                                <div className="card">
                                    <h3>Economic Calendar</h3>
                                    <div className="arrowRotate">
                                        <img src={ArrowRotate} alt="ArrowRotate" />
                                    </div>
                                    <div className="card-img">
                                        <img src={Market} alt="Market" />
                                    </div>
                                </div>
                                <div className="card">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
