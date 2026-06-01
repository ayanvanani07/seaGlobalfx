import React from "react";
import BtnArrow from "../../assets/svgIcons/BtnArrow.svg"
import './openACBlackBtn.scss'

export default function OpenACBlackBtn() {
    return (
        <section className="openACBlackBtn-section">
            <a href="-" aria-label="Open Account">
                <button className="trydemo-btn" aria-label="Open Account">
                    <img src={BtnArrow} alt="BtnArrow" />
                    <span>Open Account</span>
                </button>
            </a>
        </section>
    )
}