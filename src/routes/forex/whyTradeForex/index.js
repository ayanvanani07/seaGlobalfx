import React from "react";
import Liquidity from "../../../assets/svgIcons/Liquidity.svg"
import './whyTradeForex.scss'

export default function WhyTradeForex() {
    return (
        <section className="whyTradeForex-section">
            <div className="container-lg">
                <div className="content-grid">
                    <div className="text-content">
                        <h1 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Why Trade Forex with  <span> Sea Global</span></h1>
                        <p className="animate__animated animate__fadeInUp wow" data-wow-offset="150"> The foreign exchange market offers continuous opportunities driven by global economic activity. Trading Forex with Sea Global gives you access to deep liquidity, efficient execution, and the flexibility required to operate across different market conditions.</p>
                    </div>
                    <div className="box-content">
                        <div className="box-container">
                            <div className="box">
                                <div className="box-text">
                                    <img src={Liquidity} alt="Liquidity" />
                                    <h3>High Liquidity</h3>
                                    <p>Forex is the most liquid financial market in the world, allowing for smoother price movement and efficient trades.</p>
                                </div>
                                <div className="box-line"></div>
                            </div>
                            <div className="box animate__animated animate__fadeInUp wow" data-wow-offset="50">
                                <div className="box-text">
                                    <img src={Liquidity} alt="Liquidity" />
                                    <h3>24/5 Market Access</h3>
                                    <p>Trade currency markets around the clock during the trading week, enabling participation across major global sessions.</p>
                                </div>
                                <div className="box-line"></div>
                            </div>
                            <div className="box animate__animated animate__fadeInUp wow" data-wow-offset="50">
                                <div className="box-text">
                                    <img src={Liquidity} alt="Liquidity" />
                                    <h3>Market Volatility</h3>
                                    <p>Currency price movements create frequent trading opportunities for both short-term and longer-term strategies.</p>
                                </div>
                                <div className="box-line"></div>
                            </div>
                            <div className="box animate__animated animate__fadeInUp wow" data-wow-offset="50">
                                <div className="box-text">
                                    <img src={Liquidity} alt="Liquidity" />
                                    <h3>Major & Minor Pairs</h3>
                                    <p>Access a wide range of currency pairs, including major, minor, and selected exotic pairs tied to global economies.</p>
                                </div>
                            </div>
                            <div className="box animate__animated animate__fadeInUp wow" data-wow-offset="50">
                                <div className="box-text">
                                    <img src={Liquidity} alt="Liquidity" />
                                    <h3>Risk Management Tools</h3>
                                    <p>Utilize advanced order types and platform tools to manage exposure and control risk effectively.</p>
                                </div>
                            </div>
                            <div className="box animate__animated animate__fadeInUp wow" data-wow-offset="50">
                                <div className="box-text">
                                    <img src={Liquidity} alt="Liquidity" />
                                    <h3>Fast Execution</h3>
                                    <p>Sea Global’s trading infrastructure is optimized for low-latency execution, helping reduce slippage during volatile conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}