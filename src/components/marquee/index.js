import react from "react";
import DownGraph from "../../assets/images/down-graph.png"
import Upgraph from "../../assets/images/up-graph.png"
import Country1 from "../../assets/images/country1.png"
import Country2 from "../../assets/images/country2.png"
import GoldSvg from "../../assets/svgIcons/gold.svg"
import './marquee.scss'
import Marquee from "react-fast-marquee";

export default function MarqueeAnimate() {
    return (
        <section className="marquee-section">
            <Marquee pauseOnHover>
                <div className="marquee-animated">
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={GoldSvg} alt="GoldSvg" className="gold" />
                                </div>
                                <div className="names"><p>Gold</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        4.65342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={Upgraph} alt="Upgraph" />

                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={Country1} alt="country1" className="country1" />
                                    <img src={Country2} alt="country2" className="country2" />
                                </div>
                                <div className="names"><p>USDJPY</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        1.45342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={DownGraph} alt="DownGraph" />

                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={GoldSvg} alt="GoldSvg" className="gold" />
                                </div>
                                <div className="names"><p>Gold</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        4.65342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={Upgraph} alt="Upgraph" />

                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={Country1} alt="country1" className="country1" />
                                    <img src={Country2} alt="country2" className="country2" />
                                </div>
                                <div className="names"><p>USDJPY</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        1.45342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={DownGraph} alt="DownGraph" />

                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={GoldSvg} alt="GoldSvg" className="gold" />
                                </div>
                                <div className="names"><p>Gold</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        4.65342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={Upgraph} alt="Upgraph" />

                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={Country1} alt="country1" className="country1" />
                                    <img src={Country2} alt="country2" className="country2" />
                                </div>
                                <div className="names"><p>USDJPY</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        1.45342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={DownGraph} alt="DownGraph" />

                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={GoldSvg} alt="GoldSvg" className="gold" />
                                </div>
                                <div className="names"><p>Gold</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        4.65342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={Upgraph} alt="Upgraph" />

                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={Country1} alt="country1" className="country1" />
                                    <img src={Country2} alt="country2" className="country2" />
                                </div>
                                <div className="names"><p>USDJPY</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        1.45342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={DownGraph} alt="DownGraph" />

                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={GoldSvg} alt="GoldSvg" className="gold" />
                                </div>
                                <div className="names"><p>Gold</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        4.65342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={Upgraph} alt="Upgraph" />

                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="countryImg-name">
                                <div className="countryImg">
                                    <img src={Country1} alt="country1" className="country1" />
                                    <img src={Country2} alt="country2" className="country2" />
                                </div>
                                <div className="names"><p>USDJPY</p></div>
                            </div>
                            <div className="data-info">
                                <div className="doller">
                                    <h3>
                                        1.45342
                                    </h3>
                                    <span>
                                        USD
                                    </span>
                                </div>
                                <p>-0.16%</p>
                            </div>
                        </div>
                        <div className="graphImg">
                            <img src={DownGraph} alt="DownGraph" />

                        </div>
                    </div>
                </div>
            </Marquee>
        </section>
    )
}