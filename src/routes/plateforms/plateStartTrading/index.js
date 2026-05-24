import React from "react";
import './plateStartTrading.scss'
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";
import Home from "../../../assets/images/home.png"

export default function PlateStartTrading() {
    return (
        <section className="plateStartTrading-section">
            <div className="container3">
                <div className="startTrading-grid">
                    <div className="text-content">
                        <h3>Start Trading on a <br/> <span>Platform </span>That Fits You</h3>
                        <h6>Choose the trading platform that matches your experience level and strategy, and access global markets with Sea Global’s reliable trading infrastructure.</h6>
                        <div className="btn-flex">
                            <OpenAccountBtn />
                            <TryDemoBtn />
                        </div>
                    </div>
                    <div className="earthImg">
                        <img src={Home} alt="Home" />
                    </div>

                </div>
            </div>

        </section>
    )
}