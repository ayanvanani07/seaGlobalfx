import React from "react";
import './tradingHours.scss'

export default function TradingHours() {
    return (
        <section className="tradingHours-section">
            <div className="container3">
                <div className="card-highlight-grid">
                    <div className="card-grid">
                        <h3>
                            Trading Hours

                        </h3>
                        <h4>
                            Monday To Friday
                        </h4>
                        <p>Market opening and closing times may vary by instrument, public holidays, and daylight saving changes.</p>
                    </div>
                    <div className="card-grid">
                        <h3>Contract Specs</h3>
                        <p>Each instrument has defined contract specifications to ensure transparency and consistent trading conditions.</p>
                        <p>Full details are available within the trading platform and instrument specification pages.</p>
                    </div>
                    <div className="card-grid">
                        <h3>What Traders Should Know</h3>
                        <ul>
                            <li>Margin requirements may increase during periods of high volatility</li>
                            <li>Swap rates differ by instrument and may change based on market conditions</li>
                            <li>Tick size determines the minimum price movement for each instrument</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}