import React from "react";
import LeftLayer from "../../../assets/images/left-layer.png"
import RightLayer from "../../../assets/images/right-layer.svg"
import CardfooterSVG1 from "../../../assets/svgIcons/card-footerSVG1.svg"
import CardfooterSVG2 from "../../../assets/svgIcons/card-footerSVG2.svg"
import OpenACBlackBtn from "../../../components/openACBlackBtn";
import './OurForexPartners.scss'

export default function OurForexPartners() {
    return (
        <section className="ourForexPartners-section">
            <div className="leftLayer">
                <img src={LeftLayer} alt="leftlayer" />
            </div>
            <div className="rightlayer">
                <img src={RightLayer} alt="rightLayer" />
            </div>
            <div className="container5">
                <div className="section-title">
                    <h2>Our Forex Partner <span>Program</span></h2>
                </div>

                <div className="introducingbroker-card">
                    <div className="card-title">
                        <h3>Introducing Broker (IB) Program</h3>
                    </div>

                    <div className="card-content">
                        <div className="card-body">
                            <div className="content">
                                <p>Suitable for:</p>
                                <ul>
                                    <li>Trading educators</li>
                                    <li>Signal providers</li>
                                    <li>Trading communities</li>
                                    <li>Professional marketers with trader audiences</li>
                                </ul>
                            </div>
                            <div className="content-divider"></div>
                            <div className="content">
                                <p>Key Benefits:</p>
                                <ul>
                                    <li>Earn commissions based on client trading activity</li>
                                    <li>Flexible rebate structures</li>
                                    <li>Dedicated IB account manager</li>
                                    <li>Long-term partnership model</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="cardfooterSVG1">
                                <img src={CardfooterSVG1} alt="CardfooterSVG1" />
                            </div>
                            <div className="cardfooterSVG2">
                                <img src={CardfooterSVG2} alt="CardfooterSVG2" />
                            </div>
                            <div className="openACBlackBtn">
                                <OpenACBlackBtn />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}