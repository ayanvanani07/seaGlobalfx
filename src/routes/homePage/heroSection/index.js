import React from "react";
import "./heroSection.scss";
import OpenAccountBtn from "../../../components/openAccountBtn";
import TryDemoBtn from "../../../components/tryDemoBtn";
import HeroGif from "../../../assets/video/hero-coin.mp4"

export default function HomepageHeroSection() {
  return (
    <section className="heroBanner-section">
      <div className="herobg-img">
        <div className="hero-grid">
          <div className="grid-items">
            <div
              className="items-content animate__animated animate__fadeInUp "
            >
              <button
                aria-label="Low spreads Fast execution Regulated"
                className="topBtn-hero"
              >
                Low spreads • Fast execution • Regulated
              </button>

              <h1>
                Institutional-Grade Trading for <span> Global </span> Markets
              </h1>

              <p>
                Experience tight spreads with high-speed execution. Trade in a secure, fully regulated trading environment.
              </p>

              <div className="btn-flex">
                <OpenAccountBtn />
                <TryDemoBtn />
              </div>
            </div>
          </div>

          <div className="hero-gif-img">
            <div
              className="hero-gif animate__animated animate__fadeIn"
            >
              {/* <img src={HeroGif} alt="HeroGif" /> */}
              <video src={HeroGif} autoPlay loop muted playsInline height="560" width="560" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}