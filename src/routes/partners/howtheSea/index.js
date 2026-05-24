import React from "react";
import Register from '../../../assets/images/Register.svg'
import Refer from "../../../assets/images/Refer.svg"
import Clients from "../../../assets/images/Clients.svg"
import Earn from "../../../assets/images/Earn.svg"
import './howtheSea.scss'
import OpenAccountBtn from "../../../components/openAccountBtn";

export default function HowtheSea() {
    return (
        <section className="howtheSea-section">
            <div className="container3">
                <div className="section-title">
                    <h2>How the Sea Global FX IB Program <span>Works</span></h2>
                </div>
                <div className="howtheSea-card-grid">
                    <div className="step-items">
                        <div className="counter"><span>1</span></div>
                        <h3>Register as a Partner</h3>
                        <p>Complete the online IB registration form.</p>
                        <div className="step-img">
                            <img src={Register} alt="Register" />
                        </div>
                    </div>
                    <div className="step-items">
                        <div className="counter"><span>2</span></div>
                        <h3>Refer Clients</h3>
                        <p>Share your unique IB referral link or code.</p>
                        <div className="step-img">
                            <img src={Refer} alt="Refer" />
                        </div>
                    </div>
                    <div className="step-items">
                        <div className="counter"><span>3</span></div>
                        <h3>Clients Start Trading</h3>
                        <p>Referred clients trade forex and CFDs on Seaglobal FX.</p>
                        <div className="step-img">
                            <img src={Clients} alt="Clients" />
                        </div>
                    </div>
                    <div className="step-items">
                        <div className="counter"><span>4</span></div>
                        <h3>Earn Commissions</h3>
                        <p>Receive commissions based on client trading activity and rebate structure.</p>
                        <div className="step-img">
                            <img src={Earn} alt="Earn" />
                        </div>
                    </div>
                </div>
                <div className="btncenter">
                    <OpenAccountBtn />
                </div>
            </div>
        </section>
    )
}