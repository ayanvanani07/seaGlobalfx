import react from "react";
import Stemp from "../../../assets/images/stemp.png"
import './readytoBecome.scss'
import TryDemoBtn from "../../../components/tryDemoBtn";
import OpenAccountBtn from "../../../components/openAccountBtn";

export default function ReadytoBecome() {
    return (
        <section className="readytoBecome-section">
            <div className="container3">
                <div className="readytoBecome-grid">
                    <div className="text-content">
                        <h3>Ready to Become a <span>Sea Global FX</span>Partner?</h3>
                        <h6>Join our growing global partner network and start building a sustainable forex partnership today.</h6>
                        <div className="btn-flex">
                            <OpenAccountBtn />
                            <TryDemoBtn />
                        </div>
                    </div>
                    <div className="earthImg">
                        <img src={Stemp} alt="Stemp" />
                    </div>

                </div>
            </div>

        </section>
    )
}