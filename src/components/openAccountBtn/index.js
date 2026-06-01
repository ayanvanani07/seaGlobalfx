import React from "react";
import UserIcon from "../../assets/svgIcons/userIcon.svg"
import './openAccountBtn.scss'

export default function OpenAccountBtn() {
    return (
        <section className="openAccountBtn-section">
            <a href="-" aria-label="Open Account">
                <button className="openaccount-btn" aria-label="Open Account">
                    <img src={UserIcon} alt="UserIcon" />
                    <span>Open Account</span>
                </button>
            </a>
        </section>
    )
}