import React from "react";
import BlackLayerImg from "../../../assets/images/layer-black.png"
import Tools from "../../../assets/images/tools.png"
import TickIcon from "../../../assets/images/tickIcon.svg"
import './partnerTools.scss'

export default function PartnerTools() {
    return (
        <section className="partnerTools-section">
            <div className="blackLayer-Img">
                <img src={BlackLayerImg} alt="BlackLayerImg" />
            </div>
            <div className="container-lg">
                <div className="tools-grid">
                    <div className="img-items">
                        <img src={Tools} alt="Tools" />
                    </div>
                    <div className="text-items">
                        <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Partner <span>Tools</span> & Dedicated Support</h2>
                        <div className="box-grid">
                            <div className="box-items animate__animated animate__fadeInUp wow" data-wow-offset="100">
                                <img src={TickIcon} alt="TickIcon" />
                                <p>Advanced performance analytics</p>
                            </div>
                            <div className="box-items animate__animated animate__fadeInUp wow" data-wow-offset="200">
                                <img src={TickIcon} alt="TickIcon" />
                                <p>Real-time commission tracking</p>
                            </div>
                            <div className="box-items animate__animated animate__fadeInUp wow" data-wow-offset="250">
                                <img src={TickIcon} alt="TickIcon" />
                                <p>Custom IB referral links</p>
                            </div>
                            <div className="box-items animate__animated animate__fadeInUp wow" data-wow-offset="100">
                                <img src={TickIcon} alt="TickIcon" />
                                <p>Dedicated partner manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}