import React from "react";
import BlackLayerImg from "../../../assets/images/layer-black.png"
import EmailFill from "../../../assets/images/email-fill.svg"
import CallFill from "../../../assets/images/call-fill.svg"
import ClockFill from "../../../assets/images/clock-fill.svg"
import './waysToReachUs.scss'

export default function WaysToReachUs() {
    return (
        <section className="waysToReachUs-section">
            <div className="container-xl">
                <div className="blackLayer-Img">
                    <img src={BlackLayerImg} alt="BlackLayerImg" />
                </div>

                <div className="section-title">
                    <h2>Ways To Reach  <span> Us</span></h2>
                </div>

                <div className="reach-us-grid">
                    <div className="grid-items">
                        <div className="img-icon">
                            <img src={EmailFill} alt="EmailFill" />
                        </div>
                        <a href="#">support@seaglobalfx.com</a>
                    </div>
                    <div className="grid-items">
                        <div className="img-icon">
                            <img src={CallFill} alt="CallFill" />

                        </div>
                        <a href="#">+971 58 261 9955</a>
                    </div>
                    <div className="grid-items">
                        <div className="img-icon">
                            <img src={ClockFill} alt="ClockFill" />
                        </div>
                        <p>Monday to Friday – 24 Hours

                            <span>(Excluding public holidays)</span>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}