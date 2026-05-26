import React from "react";
import './tradingHours.scss'

export default function TradingHours() {
    return (
        <section className="tradingHours-section">
            <div className="container-lg">
                <div className="card-highlight-grid">
                    <div className="card-grid">
                        <h3 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">
                            Trading Hours

                        </h3>
                        <h4 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">
                            Monday To Friday
                        </h4>
                        <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Market opening and closing times may vary by instrument, public holidays, and daylight saving changes.</p>
                    </div>
                    <div className="card-grid">
                        <h3 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Contract Specs</h3>
                        <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Each instrument has defined contract specifications to ensure transparency and consistent trading conditions.</p>
                        <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Full details are available within the trading platform and instrument specification pages.</p>
                    </div>
                    <div className="card-grid">
                        <h3 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">What Traders Should Know</h3>
                        <ul className="animate__animated animate__fadeInUp wow" data-wow-offset="100">
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