import react from "react";
import UserIcon from "../../assets/svgIcons/userIcon.svg"
import './openAccountBtn.scss'

export default function OpenAccountBtn() {
    return (
        <section className="openAccountBtn-section">
            <a href="#">
                <button className="openaccount-btn">
                    <img src={UserIcon} alt="UserIcon" />
                    <span>Open Account</span>
                </button>
            </a>
        </section>
    )
}