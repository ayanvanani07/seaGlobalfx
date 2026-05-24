import React from "react";
import Competitive from "../../../assets/images/Competitive.svg"
import BlackLayerImg from "../../../assets/images/layer-black.png"
import './whyPartners.scss'

export default function WhyPartners() {
    return (
        <section className="whyPartners-section">
            <div className="blackLayer-Img">
                <img src={BlackLayerImg} alt="BlackLayerImg" />
            </div>
            <div className="container3">
                <div className="section-title">
                    <h2>Why Partner With <span> Sea Global FX? </span></h2>
                </div>
                <div className="partners-grid">
                    <div className="grid-items">
                        <div className="card-Img">
                            <img src={Competitive} alt="alt
                            Competitive" />
                        </div>
                        <p>Competitive IB Commissions</p>
                    </div>
                    <div className="grid-items">
                        <div className="card-Img">
                            <img src={Competitive} alt="alt
                            Competitive" />
                        </div>
                        <p>Transparent Reporting</p>
                    </div>
                    <div className="grid-items">
                        <div className="card-Img">
                            <img src={Competitive} alt="alt
                            Competitive" />
                        </div>
                        <p>Global Client Reach</p>
                    </div>
                    <div className="grid-items">
                        <div className="card-Img">
                            <img src={Competitive} alt="alt
                            Competitive" />
                        </div>
                        <p>Dedicated Partner Support</p>
                    </div>
                </div>
            </div>
        </section>
    )
}