import react from "react";
import Building from "../../../assets/images/billding.png"
import Outlinevec from "../../../assets/images/outline-vec.png"
import './officeandRegistration.scss'

export default function OfficeandRegistration() {
    return (
        <section className="officeandRegistration-details-section">
            <div className="container-xl">
                <div className="details-section">
                    <h2>Office and Registration <span> Details </span></h2>
                    <div className="address-details">
                        <div>
                            <h3>Registered Address</h3>
                            <p>1st Floor, The Sotheby Building, Rodney Bay, Gros- Islet, Castries, Saint Lucia – 838</p>
                        </div>
                        <div>
                            <h3>Physical Address</h3>
                            <p>1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838</p>
                        </div>
                    </div>
                    <div className="vector-img">
                        <img src={Outlinevec} alt="Outlinevec" />
                    </div>
                </div>
            </div>
            <div className="buidingImg">
                <img src={Building} alt="building" />
            </div>
        </section>
    )
}