import React from "react";
import DemoIcon from "../../assets/svgIcons/demoIcon.svg"
import './tryDemoBtn.scss'

export default function TryDemoBtn() {
    return (
        <section className="tryDemoBtn-section">
            <a href="-" aria-label="Try Demo">
                <button className="trydemo-btn" aria-label="Try Demo">
                    <img src={DemoIcon} alt="Demo Icon" />
                    <span>Try Demo</span>
                </button>
            </a>
        </section>
    )
}