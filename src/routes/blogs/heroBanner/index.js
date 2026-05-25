import React from "react";
import Grid1Img from "../../../assets/images/grid1.jpg"
import Grid2Img from "../../../assets/images/grid2.jpeg"
import Grid3Img from "../../../assets/images/grid3.jpg"
import Grid4Img from "../../../assets/images/grid4.jpeg"
import './heroBanner.scss'

export default function HeroBannerBlogs() {
    return (
        <section className="heroBannerBlog-section">
            <div className="container3">
                <div className="blog-grid">
                    <div className="grid-img-items">
                        <div className="img-items">
                            <img src={Grid1Img} alt="Grid1Img" />
                            <div className="layer">

                            </div>
                            <div className="img-content">
                                <h3>MACD Indicator: How It Works and How to Trade It Effectively</h3>
                                <div className="date-time">
                                    <span>25 May 2026</span>
                                    <span>|</span>
                                    <span>By Sea Global Fx Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subgrid-img">
                        <div className="subgrid">
                            <img src={Grid2Img} alt="Grid2Img" />
                            <div className="layer"></div>
                            <div className="img-content">
                                <h3>The Role of Digital Assets & Stablecoins in Forex Markets</h3>
                                <div className="date-time">
                                    <span>25 May 2026</span>
                                    <span>|</span>
                                    <span>By Sea Global Fx Team</span>
                                </div>
                            </div>
                        </div>
                        <div className="subgrid">
                            <img src={Grid3Img} alt="Grid3Img" />
                            <div className="layer"></div>
                            <div className="img-content">
                                <h3>The Future of the US Dollar in a Multipolar World: Is the USD Losing Dominance or Simply Adapting?</h3>
                                <div className="date-time">
                                    <span>25 May 2026</span>
                                    <span>|</span>
                                    <span>By Sea Global Fx Team</span>
                                </div>
                            </div>
                        </div>
                        <div className="subgrid">
                            <img src={Grid4Img} alt="Grid4Img" />
                            <div className="layer"></div>
                            <div className="img-content">
                                <h3>Geopolitical Risk Forex Trading Has Changed in 2026 — And What CFD Traders Must Do</h3>
                                <div className="date-time">
                                    <span>25 May 2026</span>
                                    <span>|</span>
                                    <span>By Sea Global Fx Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}