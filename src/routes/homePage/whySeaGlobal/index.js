import react from "react";
import SeaGlobalImg from "../../../assets/images/sea1.png"
import CoinImg from "../../../assets/images/coin2.png"
import './whySeaGlobal.scss'

export default function WhySeaGlobal() {
    return (
        <section className="whyseaglobal-section">
            <div className="container-xl">
                <div className="grid">
                    <div className="seaglobalImg-align">
                        <div className="imgAlignment">
                            <div className="imgGrid">
                                <div className="widthBox">
                                    <div className="main-Box">
                                        <div className="seaGlobalImg animate__animated animate__fadeIn wow" data-wow-offset="200">
                                            <img src={SeaGlobalImg} alt="SeaGlobalImg" />
                                        </div>
                                    </div>
                                    <div className="coinImg animate__animated animate__fadeIn wow" data-wow-offset="500">
                                        <img src={CoinImg} alt="CoinImg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items">
                        <h2>
                            Why
                            <span> Sea Global?</span>
                        </h2>
                        <div className="mini-cards-grid">
                            <div className="mini-card animate__animated animate__fadeInUp wow" data-wow-offset="200">
                                <h3>Low Spreads</h3>
                                <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                            </div>
                            <div className="mini-card animate__animated animate__fadeInUp wow" data-wow-offset="250">
                                <h3>Low Spreads</h3>
                                <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                            </div>
                            <div className="mini-card animate__animated animate__fadeInUp wow" data-wow-offset="300">
                                <h3>Low Spreads</h3>
                                <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                            </div>
                            <div className="mini-card animate__animated animate__fadeInUp wow" data-wow-offset="350">
                                <h3>Low Spreads</h3>
                                <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                            </div>
                            <div className="mini-card animate__animated animate__fadeInUp wow" data-wow-offset="400">
                                <h3>Low Spreads</h3>
                                <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}