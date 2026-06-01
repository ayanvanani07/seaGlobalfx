import react from "react";
import UserIcon from "../../assets/svgIcons/userIcon.svg"
import './becomePartnersbtn.scss'

export default function BecomePartnersbtn() {
    return (
        <section className="becomePartnersbtn-section">
            <a href="-" aria-label="Become a Partner">
                <button className="becomePartners-btn" aria-label="Become a Partner">
                    <img src={UserIcon} alt="UserIcon" />
                    <span>Become a Partner</span>
                </button>
            </a>
        </section>
    )
}