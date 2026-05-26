import React from "react";
import DownArrowIcon from "../../assets/svgIcons/downarrow.svg";
import "./faq.scss";

export default function Faq() {
  return (
    <section className="faq-section">
      <div className="container-base">
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>

        <div className="faq-main">
          <div className="faq-grid">
            <div>
              <div className="faq-items">
                <div className="text-icon">
                  <h3>How Do I Open an Account with Sea Global FX?</h3>
                  <img src={DownArrowIcon} alt="Down arrow Icon" />
                </div>
                <div className="expand-ans">
                  <p>
                    You can open an account by completing our online
                    registration form and verifying your identity. Once
                    approved, you can fund your account and start trading.
                  </p>
                </div>
              </div>
              <div className="faq-items">
                <div className="text-icon">
                  <h3>
                    Are Funding and Withdrawal Requests Processed Immediately?
                  </h3>
                  <img src={DownArrowIcon} alt="Down arrow Icon" />
                </div>
                <div className="expand-ans">
                  <p>
                    Funding is usually instant, while withdrawals are processed
                    as quickly as possible and may take a short time depending
                    on the payment method used.
                  </p>
                </div>
              </div>
              <div className="faq-items">
                <div className="text-icon">
                  <h3>What Is Forex Trading?</h3>
                  <img src={DownArrowIcon} alt="Down arrow Icon" />
                </div>
                <div className="expand-ans">
                  <p>
                    Forex trading involves buying one currency and selling
                    another to profit from changes in their exchange rates. For
                    example, if you believe the Euro will rise against the US
                    Dollar, you buy EUR/USD. If the Euro’s value increases, you
                    can sell it later at a higher price and make a profit.
                  </p>
                </div>
              </div>
              <div className="faq-items">
                <div className="text-icon">
                  <h3>Is MetaTrader 5 Good for Beginners?</h3>
                  <img src={DownArrowIcon} alt="Down arrow Icon" />
                </div>
                <div className="expand-ans">
                  <p>
                    Yes. MetaTrader 5 is user-friendly, widely used, and offers
                    helpful tools for both beginners and experienced traders.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="faq-items">
                <div className="text-icon">
                  <h3>Why is risk management important?</h3>
                  <img src={DownArrowIcon} alt="Down arrow Icon" />
                </div>
                <div className="expand-ans">
                  <p>
                    Risk management helps protect your trading capital by
                    controlling how much you risk on each trade. It involves
                    setting limits like stop-loss orders and proper position
                    sizing, which can reduce losses and support more consistent,
                    disciplined trading decisions over time.
                  </p>
                </div>
              </div>
              <div className="faq-items">
                <div className="text-icon">
                  <h3>What is the biggest mistake new traders make?</h3>
                  <img src={DownArrowIcon} alt="Down arrow Icon" />
                </div>
                <div className="expand-ans">
                  <p>
                    The biggest mistake new traders make is risking too much on
                    a single trade. This often comes from overconfidence or
                    emotional decisions, and it can quickly lead to large
                    losses.
                  </p>
                </div>
              </div>
              <div className="faq-items">
                <div className="text-icon">
                  <h3>Is trading suitable for everyone?</h3>
                  <img src={DownArrowIcon} alt="Down arrow Icon" />
                </div>
                <div className="expand-ans">
                  <p>
                    Trading involves risk and may not be suitable for everyone.
                    It’s important to understand the risks and trade
                    responsibly.
                  </p>
                </div>
              </div>
              <div className="faq-items">
                <div className="text-icon">
                  <h3>What is trading psychology?</h3>
                  <img src={DownArrowIcon} alt="Down arrow Icon" />
                </div>
                <div className="expand-ans">
                  <p>
                    Trading psychology refers to how a trader manages emotions
                    such as fear, greed, and stress. Maintaining emotional
                    control helps traders stay disciplined, follow their
                    strategy, and make rational decisions instead of impulsive
                    ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
