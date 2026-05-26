import react from "react";
import About from "../../../assets/images/about.png"
import './aboutSeaGlobal.scss'

export default function AboutSeaGlobal() {
    return (
        <section className="aboutSeaGlobal-section">
            <div className="container-xl">
                <div className="section-grid">
                    <div className="img-items animate__animated animate__fadeInUp wow" data-wow-offset="200">
                        <img src={About} alt="About" />
                    </div>
                    <div className="text-items">
                        <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">About <span>Sea Global FX</span></h2>
                        <p className="animate__animated animate__fadeInUp wow" data-wow-offset="200">Sea Global FX is a global trading broker focused on delivering a transparent, secure, and professionally managed trading environment.</p>
                        <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100">We are committed to maintaining clear operational standards, robust infrastructure, and reliable client support. Our approach is built on trust, responsibility, and long-term relationships with traders across global markets.
                        </p>
                        <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Every feature, process, and service at Sea Global FX is designed to support fair trading conditions and help clients trade with clarity and confidence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}