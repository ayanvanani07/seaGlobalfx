import react from "react";
import Disclosures from '../../../assets/images/disclosures.png'
import Secure from "../../../assets/images/Secure.png"
import Transparent from "../../../assets/images/Transparent.png"
import Professional from "../../../assets/images/Professional.png"
import './whyChoose.scss'
import OpenAccountBtn from "../../../components/openAccountBtn";


export default function WhyChoose() {
    return (
        <section className="howtheSea-section">
            <div className="container-lg">
                <div className="section-title">
                    <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Why Choose <span>Sea Global FX?</span></h2>
                    <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Trade with confidence through Sea Global, a broker committed to global standards, robust compliance, and professional-grade trading infrastructure. Every aspect of our service is designed to protect clients, ensure fairness, and deliver a reliable trading environment.</p>
                </div>
                <div className="howtheSea-card-grid">
                    <div className="step-items animate__animated animate__fadeInUp wow" data-wow-offset="100">
                        <div>
                            <div className="counter"><span>1</span></div>
                            <h3>Clear regulatory disclosures</h3>
                        </div>
                        <div className="step-img">
                            <img src={Disclosures} alt="Disclosures" />
                        </div>
                    </div>
                    <div className="step-items animate__animated animate__fadeInUp wow" data-wow-offset="150">
                        <div>
                            <div className="counter"><span>2</span></div>
                            <h3>Secure handling of client funds and data</h3>
                        </div>
                        <div className="step-img">
                            <img src={Secure} alt="Secure" />
                        </div>
                    </div>
                    <div className="step-items animate__animated animate__fadeInUp wow" data-wow-offset="100">
                        <div>
                            <div className="counter"><span>3</span></div>
                            <h3>Transparent trading conditions and pricing</h3>
                        </div>
                        <div className="step-img">
                            <img src={Transparent} alt="Transparent" />
                        </div>
                    </div>
                    <div className="step-items animate__animated animate__fadeInUp wow" data-wow-offset="200">
                        <div>
                            <div className="counter"><span>4</span></div>
                            <h3>Professional tools and infrastructure</h3>
                        </div>
                        <div className="step-img">
                            <img src={Professional} alt="Professional" />
                        </div>
                    </div>
                </div>
                <div className="btncenter animate__animated animate__fadeInUp wow" data-wow-offset="100">
                    <OpenAccountBtn />
                </div>
            </div>
        </section>
    )
}