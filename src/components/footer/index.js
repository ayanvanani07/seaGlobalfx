import React from "react";
import FooterLogo from "../../assets/logo/footer-logo.svg";
import FacebookIcon from "../../assets/svgIcons/facebook.svg";
import FacebookIconBlack from "../../assets/svgIcons/facebook-black.png";
import TwitterIcon from "../../assets/svgIcons/twitter.svg";
import TwitterIconBlack from "../../assets/svgIcons/twitter-black.png";
import InstagramIcon from "../../assets/svgIcons/instagram.svg";
import InstagramIconBlack from "../../assets/svgIcons/instagram-black.png";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer-align">
        <div className="container-lg">
          <div className="footer-grid">
            <div className="grid-items">
              <div className="footer-logo">
                <img src={FooterLogo} alt="FooterLogo" />
              </div>
              <p>
                Sea Global – Delivering advanced trading solutions across Forex,
                Commodities, Indices, and Digital Assets, supported by secure
                infrastructure and transparent trading conditions.
              </p>
              <div className="social-icons">
                <div className="icons">
                  <img
                    src={FacebookIcon}
                    alt="FacebookIcon"
                    className="icon-white"
                  />
                  <img
                    src={FacebookIconBlack}
                    alt="FacebookIconBlack"
                    className="icon-black"
                  />
                </div>
                <div className="icons">
                  <img
                    src={TwitterIcon}
                    alt="TwitterIcon"
                    className="icon-white"
                  />
                  <img
                    src={TwitterIconBlack}
                    alt="TwitterIconBlack"
                    className="icon-black"
                  />
                </div>
                <div className="icons">
                  <img
                    src={InstagramIcon}
                    alt="InstagramIcon"
                    className="icon-white"
                  />
                  <img
                    src={InstagramIconBlack}
                    alt="InstagramIconBlack"
                    className="icon-black"
                  />
                </div>
              </div>
            </div>
            <div className="sub-grid">
              <div className="sub-grid-items">
                <h3>Company Information</h3>
                <div className="heading-line"></div>
                <p>
                  Registered Address: 1st Floor, The Sotheby Building,, Rodney
                  Bay, Gros-Islet, Castries, Saint Lucia – 838
                </p>
                <p>
                  Physical Address: <br />
                  1st Floor, The Sotheby Building,, Rodney Bay, Gros-Islet,
                  Castries, Saint Lucia – 838
                </p>
                <p>Registration Number: 2025- 00352</p>
                <a href="-" aria-label="email">Email: support@seaglobalfx.com</a>
                <a href="-" aria-label="phone">
                  Phone: <br />
                  +971 58 261 9955
                </a>
              </div>
              <div className="sub-grid-items">
                <h3>Quick Links</h3>
                <div className="heading-line"></div>
                <a href="-" aria-label="Accounts">Accounts</a>
                <a href="-" aria-label="Platforms">Platforms</a>
                <a href="-" aria-label="Blogs">Blogs</a>
                <a href="-" aria-label="About Us">About Us</a>
                <a href="-" aria-label="Trading Solutions">Trading Solutions</a>
              </div>
              <div className="sub-grid-items">
                <h3>Support</h3>
                <div className="heading-line"></div>
                <a href="-" aria-label="Terms of Service">Terms of Service</a>
                <a href="-" aria-label="Privacy Policy">Privacy Policy</a>
                <a href="-" aria-label="Telegram Group">Telegram Group</a>
                <a href="-" aria-label="Refund Policy">Refund Policy</a>
              </div>
            </div>
            <div className="grid-items last-grid">
              <h5>Subscribe to Newsletter</h5>
              <p>
                Get Monthly insights from founders around the globe. No spam
                promise.
              </p>
              <div className="email-input">
                <input type="email" placeholder="Enter your Email" />
                <div className="inputbtn">
                  <button aria-label="Submit">Submit</button>
                </div>
              </div>
              <div className="checkBox-input">
                <input
                  id="privacy-policy"
                  type="checkbox"
                  aria-label="I agree to the Privacy Policy"
                />
                <label htmlFor="privacy-policy">
                  I agree to the Privacy Policy
                </label>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Risk warning <br />
              Trading in Foreign Exchange and Contracts for Difference carries a
              high level of risk to your capital and unexpected price movements.
              A key risk of leveraged trading is that if a market moves against
              your position, you can incur additional liabilities far in excess
              of your initial margin deposit. Only speculate with money you can
              afford to lose. The products listed on this website may not be
              suitable for all customers; therefore, ensure you fully understand
              the risks involved and seek independent financial advice if
              necessary.
            </p>
            <p>
              Restricted Countries <br />
              Sea Global Ltd. does not provide services to residents of the
              United States, Canada, North Korea, and Cuba, or any other
              sanctioned jurisdiction where such services would be contrary to
              local law or regulation.
            </p>
            <p>
              Disclaimer
              <br />
              Sea Global Ltd. operates solely as an execution service and does
              not offer advisory services. Occasionally, Sea Global Ltd. may
              release general market insights; however, such communications
              should not be interpreted as advice, an invitation, or an
              endorsement for any financial instrument. Sea Global Ltd. bears no
              liability for the application of this content or any outcomes
              thereof. The completeness of this information is not guaranteed,
              and reliance upon it is at the sole discretion and risk of the
              user.
            </p>
          </div>
        </div>
      </footer>
      <div className="copyright-bar">
        <p>© 2025 Sea Global. All rights reserved.</p>
      </div>
    </>
  );
}
