import React from "react";
import IpadImg from "../../../assets/images/ipad.png"
import './platformHighlights.scss'

export default function PlatformHighlights() {
    return (
        <section className="platformHighlights-section">
            <div className="container3">
                <div className="section-grid">
                    <div className="grid-items">
                        <div className="ipad-img">
                            <img src={IpadImg} alt="IpadImg" />
                        </div>
                    </div>
                    <div className="grid-items">
                        <h2>Platform <span>Highlights</span></h2>
                        <div className="subgrid">
                            <div className="subgrid-box">
                                <h3>Advanced Charting & Indicators</h3>
                                <p>Analyze markets using multiple chart types, timeframes, and a wide range of technical indicators for informed decision-making.   </p>
                            </div>
                            <div className="subgrid-box">
                                <h3>Advanced Charting & Indicators</h3>
                                <p>Analyze markets using multiple chart types, timeframes, and a wide range of technical indicators for informed decision-making.   </p>
                            </div>
                            <div className="subgrid-box">
                                <h3>Advanced Charting & Indicators</h3>
                                <p>Analyze markets using multiple chart types, timeframes, and a wide range of technical indicators for informed decision-making.   </p>
                            </div>
                            <div className="subgrid-box">
                                <h3>Advanced Charting & Indicators</h3>
                                <p>Analyze markets using multiple chart types, timeframes, and a wide range of technical indicators for informed decision-making.   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}