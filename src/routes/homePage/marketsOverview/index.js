import React from "react";
import Card3dImg from "../../../assets/svgIcons/Card3dImg.png"
import Doller from "../../../assets/images/doller.png"
import './marketsOverview.scss'

export default function MarketsOverview() {
    return (
        <section className="marketsOverview-section">
            <div className="container3">
                <div className="grid">
                    <div className="grid-items-mo">
                        <h2><span>Markets</span> Overview</h2>
                    </div>
                    <div className="grid-items-mo-card">
                        <div className="card-body">
                            <div className="card-img">
                                <img src={Card3dImg} alt="Card3dImg" />
                            </div>
                            <div className="card-content">
                                <h4>Forex</h4>
                                <p>Access major, minor, and selected exotic currency pairs with deep liquidity and competitive spreads.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items-mo-card">
                        <div className="card-body">
                            <div className="card-img">
                                <img src={Card3dImg} alt="Card3dImg" />
                            </div>
                            <div className="card-content">
                                <h4>Forex</h4>
                                <p>Access major, minor, and selected exotic currency pairs with deep liquidity and competitive spreads.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items-mo-card">
                        <div className="card-body">
                            <div className="card-img">
                                <img src={Card3dImg} alt="Card3dImg" />
                            </div>
                            <div className="card-content">
                                <h4>Forex</h4>
                                <p>Access major, minor, and selected exotic currency pairs with deep liquidity and competitive spreads.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items-mo-card">
                        <div className="card-body">
                            <div className="card-img">
                                <img src={Card3dImg} alt="Card3dImg" />
                            </div>
                            <div className="card-content">
                                <h4>Forex</h4>
                                <p>Access major, minor, and selected exotic currency pairs with deep liquidity and competitive spreads.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items-mo-card">
                        <div className="card-body">
                            <div className="card-img">
                                <img src={Card3dImg} alt="Card3dImg" />
                            </div>
                            <div className="card-content">
                                <h4>Forex</h4>
                                <p>Access major, minor, and selected exotic currency pairs with deep liquidity and competitive spreads.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items-mo-card">
                        <div className="card-body">
                            <div className="card-img">
                                <img src={Card3dImg} alt="Card3dImg" />
                            </div>
                            <div className="card-content">
                                <h4>Forex</h4>
                                <p>Access major, minor, and selected exotic currency pairs with deep liquidity and competitive spreads.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="doller">
                <img src={Doller} alt="Doller" />
            </div>
        </section>
    )
}