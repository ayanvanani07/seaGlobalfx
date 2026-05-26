import React from "react";
import './getinTouch.scss'

export default function GetinTouch() {
    return (
        <section className="getinTouch-section">
            <div className="container-sm ">
                <div className="contact-from-grid">
                    <div className="content-items">
                        <h2> Get in<span>Touch</span></h2>

                        <div className="list-card">
                            <div className="list-items">
                                <p>General Enquiries</p>
                            </div>
                            <div className="list-items">
                                <p>Technical Support</p>
                            </div>
                            <div className="list-items">
                                <p>Complaints</p>
                            </div>
                            <div className="list-items">
                                <p>Partnerships / IB</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-from-items">
                        <form>
                            <h3>Let’s Connect</h3>
                            <div className="userInputs">
                                <input type="text" placeholder="Your Name" name="name" />
                            </div>
                            <div className="userInputs">
                                <input type="email" placeholder="Email Address" name="email" />
                            </div>
                            <div className="userInputs">
                                <textarea name="message" placeholder="Messege"></textarea>
                            </div>
                            <div className="checkboxField">
                                <input type="checkbox" name="agree" />
                                <p>
                                    You agree to our friendly
                                    <a href="#"> Privacy policy.</a>
                                </p>
                            </div>
                            <div className="submitBtn">
                                <button>Send Message</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}