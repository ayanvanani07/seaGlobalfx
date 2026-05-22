import React from "react";
import CardfooterSVG1 from "../../../assets/svgIcons/card-footerSVG1.svg"
import CardfooterSVG2 from "../../../assets/svgIcons/card-footerSVG2.svg"
import BtnArrow from "../../../assets/svgIcons/BtnArrow.svg"
import './accountTypes.scss'

export default function AccountTypes() {
    return (
        <section className="accountTypes-section">
            <div className="container3">
                <div className="title-section">
                    <h2>
                        <span>Account </span>
                        Types
                    </h2>
                    <p>Pick an account that matches your trading style and experience level. Our MT5 trading accounts are designed with transparent pricing, competitive spreads, and flexible conditions.</p>
                </div>
                <div className="card-grids">
                    <div className="grid-items">
                        <div className="card-topbar">
                            <h3>Pro</h3>
                        </div>
                        <div className="card-body">
                            <div className="text">
                                <p>A straightforward account with no separate commission, designed for ease of use and cost transparency.</p>
                            </div>
                            <div className="all-text">
                                <div className="text-alignment">
                                    <p>Minimum Deposit:</p>
                                    <span>$1,000</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Commission:</p>
                                    <span>$0</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Spread:</p>
                                    <span>From 20 Cents</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Leverage:</p>
                                    <span>50 to 500</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Currencies</p>
                                    <span>USD</span>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <img src={CardfooterSVG1} alt="CardfooterSVG1" className="CardfooterSVG1" />
                            <img src={CardfooterSVG2} alt="CardfooterSVG2" className="CardfooterSVG2" />
                            <div className="card-footer-btn">
                                <button aria-label="open account">
                                    <img src={BtnArrow} alt="BtnArrow" />
                                    <span>Open Account</span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="grid-items">
                        <div className="card-topbar">
                            <h3>Standard</h3>
                        </div>
                        <div className="card-body">
                            <div className="text">
                                <p>Built for traders who want tighter spreads and enhanced support while maintaining simple pricing.</p>
                            </div>
                            <div className="all-text">
                                <div className="text-alignment">
                                    <p>Minimum Deposit:</p>
                                    <span>$500</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Commission:</p>
                                    <span>$0</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Spread:</p>
                                    <span>25 Cents</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Leverage:</p>
                                    <span>1000</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Currencies</p>
                                    <span>USD</span>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <img src={CardfooterSVG1} alt="CardfooterSVG1" className="CardfooterSVG1" />
                            <img src={CardfooterSVG2} alt="CardfooterSVG2" className="CardfooterSVG2" />
                            <div className="card-footer-btn">
                                <button aria-label="open account">
                                    <img src={BtnArrow} alt="BtnArrow" />
                                    <span>Open Account</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-items">
                        <div className="card-topbar">
                            <h3>Plus</h3>
                        </div>
                        <div className="card-body">
                            <div className="text">
                                <p>Designed for active traders who prioritize pricing efficiency and execution quality. For cost-focused traders using raw pricing</p>
                            </div>
                            <div className="all-text">
                                <div className="text-alignment">
                                    <p>Minimum Deposit:</p>
                                    <span>$100</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Commission:</p>
                                    <span>$0</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Spread:</p>
                                    <span>From 30 Cents</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Leverage:</p>
                                    <span>50-500</span>
                                </div>
                                <div className="text-alignment">
                                    <p>Currencies</p>
                                    <span>USD</span>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <img src={CardfooterSVG1} alt="CardfooterSVG1" className="CardfooterSVG1" />
                            <div className="card-footer-btn">
                                <button aria-label="open account">
                                    <img src={BtnArrow} alt="BtnArrow" />
                                    <span>Open Account</span>
                                </button>
                            </div>
                            <img src={CardfooterSVG2} alt="CardfooterSVG2" className="CardfooterSVG2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}