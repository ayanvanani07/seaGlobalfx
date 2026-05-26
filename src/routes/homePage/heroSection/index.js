import React from "react";
import UserIcon from '../../../assets/svgIcons/userIcon.svg'
import DemoIcon from "../../../assets/svgIcons/demoIcon.svg"
import "./heroSection.scss";
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";
import HeroGif from "../../../assets/video/hero-coin.gif"

export default function HomepageHeroSection() {
  return (
    <section className="heroBanner-section">
      <div className="herobg-img">
        <div className="hero-grid">
          <div className="grid-items">
            <div className="items-content">
              <button aria-label="Low spreads Fast execution  Regulated" className="topBtn-hero animate__animated animate__fadeInUp wow" data-wow-offset="200">
                Low spreads • Fast execution • Regulated
              </button>
              <h1 className="animate__animated animate__fadeInUp wow" data-wow-offset="200">Institutional-Grade Trading for  <span> Global </span>  Markets</h1>
              <p className="animate__animated animate__fadeInUp wow" data-wow-offset="200">Experience tight spreads with high-speed execution. Trade in a secure, fully regulated trading environment.</p>


              <div className="btn-flex animate__animated animate__fadeInUp wow" data-wow-offset="200">
                <OpenAccountBtn />
                <TryDemoBtn />
              </div>
            </div>

          </div>
          <div className="hero-gif-img">
            <div className="hero-gif animate__animated animate__zoomIn wow" data-wow-offset="200">
              <img src={HeroGif} alt="HeroGif" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
