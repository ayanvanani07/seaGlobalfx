import react from "react";
import LayerBlackBG from "../../../assets/images/layer-black.png"
import Mission from "../../../assets/images/mission.png"
import './ourVision.scss'

export default function OurVision() {
    return (
        <section className="ourVision-section">
            <div className="layer-black">
                <img src={LayerBlackBG} alt="LayerBlackBG" />
            </div>
            <div className="container2">
                <div className="ourVision-grid">
                    <div className="subgrid">
                        <div className="subgrid-items">
                            <h2>Our <span>Vision</span></h2>
                            <div className="box">
                                <p>To build a transparent and secure trading ecosystem where traders operate with confidence, clarity, and trust.</p>
                            </div>
                        </div>
                        <div className="subgrid-items">
                            <h2>Our <span>Vision</span></h2>
                            <div className="box">
                                <p>Our mission is to provide traders with reliable infrastructure, secure fund handling, professional tools, and responsive support — while maintaining high operational discipline and global best practices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items">
                        <img src={Mission} alt="mission" />
                    </div>

                </div>
            </div>
        </section>
    )
}