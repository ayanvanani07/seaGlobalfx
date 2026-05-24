import react from "react";
import UserIcon from "../../assets/svgIcons/userIcon.svg"
import './becomePartnersbtn.scss'

export default function BecomePartnersbtn() {
    return (
        <section className="becomePartnersbtn-section">
            <a href="#">
                <button className="becomePartners-btn">
                    <img src={UserIcon} alt="UserIcon" />
                    <span>Become a Partner</span>
                </button>
            </a>
        </section>
    )
}