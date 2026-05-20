import react from "react";
import DemoIcon from "../../assets/svgIcons/demoIcon.svg"
import './tryDemoBtn.scss'

export default function TryDemoBtn() {
    return (
        <section className="tryDemoBtn-section">
            <a href="#">
                <button className="trydemo-btn">
                    <img src={DemoIcon} alt="Demo Icon" />
                    <span>Try Demo</span>
                </button>
            </a>
        </section>
    )
}