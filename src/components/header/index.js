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
            <img src={SeaGlobalFXLogo} alt="SeaGlobalFXLogo" loading="lazy" />
          </div>
          <div className="left-nav">
            <nav>
              <div className="dropdownMenu">
                <div className="dropdown">
                  <a href="-" className="dropD" aria-label="Markets">
                    Markets
                  </a>
                  <div className="element-show">
                    <div className="dropdown-ele">
                      <a href="-" aria-label="Forex">Forex</a>
                      <a href="-" aria-label="Indices">Indices</a>
                      <a href="-" aria-label="Commodities">Commodities</a>
                      <a href="-" aria-label="Stocks">Stocks</a>
                      <a href="-" aria-label="Crypto">Crypto</a>
                      <a href="-" aria-label="ETFs">ETFs</a>
                    </div>
                  </div>
                </div>
                <a href="-" className="noDropd" aria-label="Accounts">
                  Accounts
                </a>
                <div className="dropdown">
                  <div className="drop-hover">
                    <a href="-" className="dropD" aria-label="Trade">
                      Trade
                    </a>
                    <div className="element-show">
                      <div className="dropdown-ele">
                        <a href="-" aria-label="Platforms">Platforms</a>
                        <a href="-" aria-label="Trading Solutions">Trading Solutions</a>
                        <a href="-" aria-label="Trade and Achieve">Trade and Achieve</a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="-" className="noDropd" aria-label="Partners">
                  Partners
                </a>
                <div className="dropdown">
                  <a href="-" className="dropD" aria-label="Company">
                    Company
                  </a>
                  <div className="element-show">
                    <div className="dropdown-ele">
                      <a href="-" aria-label="About Us">About Us</a>
                      <a href="-" aria-label="Contact Us">Contact Us</a>
                    </div>
                  </div>
                </div>
                <a href="-" className="noDropd" aria-label="Blogs">
                  Blogs
                </a>
                <a href="-" className="noDropd" aria-label="Contact Us">
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
