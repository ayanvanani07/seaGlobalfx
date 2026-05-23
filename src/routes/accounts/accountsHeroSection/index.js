import react from "react";
import EtfsBanner from "../../../assets/images/etfs-banner.png"
import UserIcon from '../../../assets/svgIcons/userIcon.svg'
import DemoIcon from "../../../assets/svgIcons/demoIcon.svg"
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";
import './accountsHeroSection.scss'

export default function AccountsHeroSection() {
    return (
        <section className="accounts-heroSection">
            <div className="herobg-img">
                <div className="hero-grid">
                    <div className="grid-items">
                        <div className="items-content">
                            <button aria-label="Low spreads Fast execution  Regulated" className="topBtn-hero">
                                Transparent pricing • Flexible conditions
                            </button>
                            <h1>Find the Best Account for Your <span> Goals </span></h1>
                            <p>Choose an account that matches your experience level, trading strategy, and cost preferences. Sea Global offers clearly defined account types with transparent pricing and flexible trading conditions, so you can select what’s right for you with confidence.</p>


                            <div className="btn-flex">
                                <OpenAccountBtn />
                                <TryDemoBtn />
                            </div>
                        </div>

                    </div>
                    <div className="hero-gif-img">
                        <div className="hero-gif">
                            <img src={EtfsBanner} alt="etfs - banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}