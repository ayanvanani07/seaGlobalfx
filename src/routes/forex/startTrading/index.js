import React from "react";
import Earth from "../../../assets/svgIcons/earth.png"
import './startTrading.scss'
import TryDemoBtn from "../../../components/tryDemoBtn";
import OpenAccountBtn from "../../../components/openAccountBtn";

export default function StartTrading() {
    return (
        <section className="startTrading-section">
            <div className="container-lg">
                <div className="startTrading-grid">
                    <div className="text-content">
                        <h3 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Start Trading <span>Forex</span>Today</h3>
                        <h6 className="animate__animated animate__fadeInUp wow" data-wow-offset="200">Trade forex market with Sea Global’s professional trading infrastructure, competitive pricing, and reliable execution—designed to support traders at every level.</h6>
                        <div className="btn-flex">
                            <OpenAccountBtn />
                            <TryDemoBtn />
                        </div>
                    </div>
                    <div className="earthImg">
                        <img src={Earth} alt="Earth" />
                    </div>

                </div>
            </div>

        </section>
    )
}