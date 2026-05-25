import react from "react";
import BlackLayerImg from "../../../assets/images/layer-black.png"
import Lock from "../../../assets/images/lock.png"
import './clientFund.scss'

export default function ClientFund() {
    return (
        <section className="clientFund-section">
            <div className="blackLayer-Img">
                <img src={BlackLayerImg} alt="BlackLayerImg" />
            </div>
            <div className="container2">
                <div className="tools-grid">
                    <div className="img-items">
                        <img src={Lock} alt="Lock" />
                    </div>
                    <div className="text-items">
                        <div className="section-text">
                            <h2>Client Fund  <span>Protection</span></h2>
                            <p>Protecting client funds is a core priority at Sea Global. Our fund-handling framework is designed to promote</p>
                            <p>security, transparency, and responsible risk management across all regulated entities.</p>
                        </div>
                        <div className="box-grid">
                            <div className="box-items">
                                <h3>Segregated Client Accounts</h3>
                                <p>Client funds are held separately from company operating funds in accordance with applicable regulatory requirements.</p>
                            </div>
                            <div className="box-items">
                                <h3>Funds Held with Tier-1 Banks</h3>
                                <p>Client funds are maintained with reputable, well-capitalized financial institutions to support fund security and stability.</p>
                            </div>
                            <div className="box-items">
                                <h3>Strict Internal Risk Controls</h3>
                                <p>Robust internal policies and monitoring systems are in place to manage financial, operational, and counterparty risk.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}