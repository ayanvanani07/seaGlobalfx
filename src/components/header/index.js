import React from "react";
import SeaGlobalFXLogo from "../../assets/logo/logo.svg";
import LoginIcon from "../../assets/svgIcons/loginIcon.svg";
// import MobileMenuIcon from "../../assets/svgIcons/menu.png";
import MobileMenuIcon from "../../assets/svgIcons/mobileMenu.svg"
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="container-2xl">
        <div className="header-align">
          <div className="logo">
            <img src={SeaGlobalFXLogo} alt="SeaGlobalFXLogo" />
          </div>
          <div className="left-nav">
            <nav>
              <div className="dropdownMenu">
                <div className="dropdown">
                  <a href="#" className="dropD">
                    Markets
                  </a>
                  <div className="element-show">
                    <div className="dropdown-ele">
                      <a href="#">Forex</a>
                      <a href="#">Indices</a>
                      <a href="#">Commodities</a>
                      <a href="#">Stocks</a>
                      <a href="#">Crypto</a>
                      <a href="#">ETFs</a>
                    </div>
                  </div>
                </div>
                <a href="#" className="noDropd">
                  Accounts
                </a>
                <div className="dropdown">
                  <div className="drop-hover">
                    <a href="#" className="dropD">
                      Trade
                    </a>
                    <div className="element-show">
                      <div className="dropdown-ele">
                        <a href="#">Plateforms</a>
                        <a href="#">Trading Solutions</a>
                        <a href="#">Trade and Achieve</a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="noDropd">
                  Partners
                </a>
                <div className="dropdown">
                  <a href="#" className="dropD">
                    Company
                  </a>
                  <div className="element-show">
                    <div className="dropdown-ele">
                      <a href="#">About-Us</a>
                      <a href="#">Contact-Us</a>
                    </div>
                  </div>
                </div>
                <a href="#" className="noDropd">
                  Blogs
                </a>
                <a href="#" className="noDropd">
                  Contact Us
                </a>
              </div>
            </nav>
            <div className="btn-login">
              <button aria-label="login">
                <img src={LoginIcon} alt="LoginIcon" />
                <span>Login</span>
              </button>
            </div>
            <div className="mobileMenubar">
              <img src={MobileMenuIcon} alt="MobileMenuIcon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
