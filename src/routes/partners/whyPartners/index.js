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
            <div className="container-lg">
                <div className="section-title">
                    <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Why Partner With <span> Sea Global FX? </span></h2>
                </div>
                <div className="partners-grid">
                    <div className="grid-items animate__animated animate__fadeInUp wow" data-wow-offset="100">
                        <div className="card-Img">
                            <img src={Competitive} alt="alt
                            Competitive" />
                        </div>
                        <p>Competitive IB Commissions</p>
                    </div>
                    <div className="grid-items animate__animated animate__fadeInUp wow" data-wow-offset="200">
                        <div className="card-Img">
                            <img src={Competitive} alt="alt
                            Competitive" />
                        </div>
                        <p>Transparent Reporting</p>
                    </div>
                    <div className="grid-items animate__animated animate__fadeInUp wow" data-wow-offset="250">
                        <div className="card-Img">
                            <img src={Competitive} alt="alt
                            Competitive" />
                        </div>
                        <p>Global Client Reach</p>
                    </div>
                    <div className="grid-items animate__animated animate__fadeInUp wow" data-wow-offset="100">
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