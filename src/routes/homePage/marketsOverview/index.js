import React from "react";
import Card3dImg from "../../../assets/svgIcons/Card3dImg.png"
import Doller from "../../../assets/images/doller.png"
import './marketsOverview.scss'

export default function MarketsOverview() {
    return (
        <section className="marketsOverview-section">
            <div className="container-lg">
                <div className="grid">
                    <div className="grid-items-mo">
                        <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="50"><span>Markets</span> Overview</h2>
                    </div>
                    <div className="grid-items-mo-card animate__animated animate__fadeInUp wow" data-wow-offset="100">
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
                    <div className="grid-items-mo-card animate__animated animate__fadeInUp wow" data-wow-offset="150">
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
                    <div className="grid-items-mo-card animate__animated animate__fadeInUp wow" data-wow-offset="200">
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
                    <div className="grid-items-mo-card animate__animated animate__fadeInUp wow" data-wow-offset="50">
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
                    <div className="grid-items-mo-card animate__animated animate__fadeInUp wow" data-wow-offset="100">
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
                    <div className="grid-items-mo-card animate__animated animate__fadeInUp wow" data-wow-offset="150">
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