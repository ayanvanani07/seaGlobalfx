import react from "react";
import SeaGlobalImg from "../../../assets/images/sea1.png"
import CoinImg from "../../../assets/images/coin2.png"
import './whySeaGlobal.scss'

export default function WhySeaGlobal() {
    return (
        <section className="whyseaglobal-section">
            <div className="container2">
                <div className="grid">
                    <div className="seaglobalImg-align">
                        <div className="imgAlignment">
                            <div className="imgGrid">
                                <div className="widthBox">
                                    <div className="main-Box">
                                        <div className="seaGlobalImg">
                                            <img src={SeaGlobalImg} alt="SeaGlobalImg" />
                                        </div>
                                    </div>
                                    <div className="coinImg">
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
                            <div className="mini-card">
                                <h3>Low Spreads</h3>
                                <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                            </div>
                            <div className="mini-card">
                                <h3>Low Spreads</h3>
                                <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                            </div>
                            <div className="mini-card">
                                <h3>Low Spreads</h3>
                                <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                            </div>
                            <div className="mini-card">
                                <h3>Low Spreads</h3>
                                <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                            </div>
                            <div className="mini-card">
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