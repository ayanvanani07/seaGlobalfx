import React from "react";
import SystemImg from '../../assets/svgIcons/system.png'
import KycImg from "../../assets/svgIcons/kyc.png"
import Fund from "../../assets/svgIcons/fund.png"
import Trading from "../../assets/svgIcons/trading.png"
import './openYourAccount.scss'
import OpenAccountBtn from "../openAccountBtn";

export default function OpenYourAccount() {
    return (
        <section className="openYourAccount-section">
            <div className="container-lg">
                <div className="section-title">
                    <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="100">Open Your Account in 4<span> Easy Steps</span></h2>
                    <p className="animate__animated animate__fadeInUp wow" data-wow-offset="200">Start trading with confidence through a fast, secure, and fully guided onboarding process—designed to get you from signup to your first trade with minimal friction.
                    </p>
                </div>
                <div className="steps-card-grid">
                    <div className="step-items animate__animated animate__fadeInUp wow" data-wow-offset="100">
                        <div className="counter"><span>1</span></div>
                        <h3>SignUp</h3>
                        <p>Create your account in minutes</p>
                        <div className="step-img">
                            <img src={SystemImg} alt="SystemImg" />
                        </div>
                    </div>
                    <div className="step-items animate__animated animate__fadeInUp wow" data-wow-offset="200">
                        <div className="counter"><span>2</span></div>
                        <h3>KYC Verification</h3>
                        <p>Fast & secure identity verification</p>
                        <div className="step-img">
                            <img src={KycImg} alt="KycImg" />
                        </div>
                    </div>
                    <div className="step-items animate__animated animate__fadeInUp wow" data-wow-offset="100">
                        <div className="counter"><span>3</span></div>
                        <h3>Fund Account</h3>
                        <p>Add funds securely to start trading</p>
                        <div className="step-img">
                            <img src={Fund} alt="Fund" />
                        </div>
                    </div>
                    <div className="step-items animate__animated animate__fadeInUp wow" data-wow-offset="200">
                        <div className="counter"><span>4</span></div>
                        <h3>Start Trading</h3>
                        <p>Access global markets instantly</p>
                        <div className="step-img">
                            <img src={Trading} alt="Trading" />
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