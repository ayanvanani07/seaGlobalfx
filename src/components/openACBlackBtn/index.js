import react from "react";
import BtnArrow from "../../assets/svgIcons/BtnArrow.svg"
import './openACBlackBtn.scss'

export default function OpenACBlackBtn() {
    return (
        <section className="openACBlackBtn-section">
            <a href="#">
                <button className="trydemo-btn">
                    <img src={BtnArrow} alt="BtnArrow" />
                    <span>Open Account</span>
                </button>
            </a>
        </section>
    )
}